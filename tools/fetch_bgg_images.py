"""
Tải ảnh bìa + ảnh nền của game từ BoardGameGeek (qua api.geekdo.com) rồi đổi cỡ.

Kết quả cho mỗi game STT = N:
    <out>/00N/00N.webp   ảnh bìa  600x800   (giữ nguyên cả bìa, phần thừa lấp bằng chính ảnh làm mờ)
    <out>/00N/00Nb.webp  ảnh nền  1600x1000 (cắt giữa cho vừa khung)

Ảnh bìa : ảnh chính của game trên BGG.
Ảnh nền : ảnh đầu tiên trong gallery "game", sắp xếp "hot" (ảnh đầu mục Overview).

Cách dùng (chạy ở thư mục gốc dự án):
    py -3.12 -m pip install pillow requests
    py -3.12 tools/fetch_bgg_images.py <STT bắt đầu> <STT kết thúc>

Ví dụ:
    py -3.12 tools/fetch_bgg_images.py 1 50            # game 1 đến 50
    py -3.12 tools/fetch_bgg_images.py 20 30           # game 20 đến 30
    py -3.12 tools/fetch_bgg_images.py 8 8             # chỉ game 8
    py -3.12 tools/fetch_bgg_images.py 8 8 --force     # ghi đè file đã có
    py -3.12 tools/fetch_bgg_images.py 1 5 --out tmp   # lưu sang thư mục khác

Mặc định KHÔNG ghi đè file đã tồn tại (để không mất ảnh bạn đã thay tay).
Thêm game mới: tìm BGG ID (số trong link boardgamegeek.com/boardgame/<ID>/...) rồi thêm vào GAMES.

Lưu ý: cần Python 3.12 (Pillow chưa có bản cài sẵn cho 3.11 trên máy này).
BGG chặn truy cập tự động trên trang web (Cloudflare) và API XML cần token,
nên script chỉ dùng api.geekdo.com, không tra được ID theo tên.
"""
import argparse
import io
import os
import sys
import time

import requests
from PIL import Image, ImageFilter, ImageOps

# STT (theo sheet "Danh sách game" trong docs/boardgame.xlsx) -> BGG ID
GAMES = {
    1: 167355, 2: 240980, 3: 167791, 4: 297562, 5: 54998, 6: 173346, 7: 170216,
    8: 157354, 9: 436217, 10: 194879, 11: 163412, 12: 414317, 13: 144592,
    14: 254713, 15: 13, 16: 177639, 17: 128882, 18: 188834, 19: 256680, 20: 478,
    21: 242302, 22: 395181, 23: 413246, 24: 102181, 25: 256960, 26: 36218,
    27: 187645, 28: 214887, 29: 40765, 30: 246784, 31: 148228, 32: 103343,
    33: 271055, 34: 242653, 35: 129622, 36: 45, 37: 24068, 38: 355735, 39: 34635,
    40: 143884, 41: 9220, 42: 271601, 43: 255615, 44: 172225, 45: 230765,
    46: 178900, 47: 35188, 48: 25821, 49: 156129, 50: 10547,
    # STT 51 - 100
    51: 237182, 52: 157969, 53: 131357, 54: 198454, 55: 39856, 56: 284083, 57: 209685,
    58: 2375, 59: 297985, 60: 402207, 61: 169318, 62: 212450, 63: 92415,
    64: 271324, 65: 40692, 66: 306321, 67: 2223, 68: 1406,
    # 69: Ma Sói Hành Quyết (game VN, không có trên BGG)
    70: 147949, 71: 161533, 72: 184267, 73: 316554, 74: 317321,
    75: 338960, 76: 160010, 77: 282853, 78: 224517, 79: 28720, 80: 233078,
    81: 31594, 82: 358661, 83: 269144, 84: 342942, 85: 266192, 86: 284378,
    87: 125153, 88: 175640, 89: 142379, 90: 237179, 91: 375459, 92: 200680,
    93: 102794, 94: 177736, 95: 35677, 96: 70149, 97: 159675, 98: 300322,
    99: 234277, 100: 420805,
}

API = "https://api.geekdo.com/api"
HEADERS = {"User-Agent": "Mozilla/5.0"}
COVER_SIZE = (600, 800)
BG_SIZE = (1600, 1000)
QUALITY = 85


def get(url, **kw):
    for _ in range(3):
        try:
            r = requests.get(url, headers=HEADERS, timeout=40, **kw)
            if r.ok:
                return r
        except requests.RequestException:
            pass
        time.sleep(1)
    raise RuntimeError(f"Không tải được: {url}")


def open_image(url):
    return Image.open(io.BytesIO(get(url).content))


def make_cover(im):
    """600x800: giữ nguyên toàn bộ bìa, nền là chính ảnh đó cắt + làm mờ."""
    im = im.convert("RGB")
    canvas = ImageOps.fit(im, COVER_SIZE, Image.LANCZOS).filter(ImageFilter.GaussianBlur(25))
    fg = ImageOps.contain(im, COVER_SIZE, Image.LANCZOS)
    canvas.paste(fg, ((COVER_SIZE[0] - fg.width) // 2, (COVER_SIZE[1] - fg.height) // 2))
    return canvas


def make_background(im):
    """1600x1000: cắt giữa cho vừa khung."""
    return ImageOps.fit(im.convert("RGB"), BG_SIZE, Image.LANCZOS)


def process(stt, bgg_id, out, force):
    tag = f"{stt:03d}"
    folder = os.path.join(out, tag)
    cover_path = os.path.join(folder, f"{tag}.webp")
    bg_path = os.path.join(folder, f"{tag}b.webp")
    os.makedirs(folder, exist_ok=True)

    item = get(f"{API}/geekitems?objecttype=thing&objectid={bgg_id}").json()["item"]

    if force or not os.path.exists(cover_path):
        url = item["images"].get("original") or item["imageurl@2x"]
        make_cover(open_image(url)).save(cover_path, "WEBP", quality=QUALITY)

    if force or not os.path.exists(bg_path):
        gallery = get(
            f"{API}/images?ajax=1&gallery=game&nosession=1&objectid={bgg_id}"
            f"&objecttype=thing&pageid=1&showcount=1&size=thumb&sort=hot"
        ).json()["images"]
        if not gallery:
            return item["name"], "không có ảnh trong gallery (chỉ lưu bìa)"
        detail = get(f"{API}/images/{gallery[0]['imageid']}").json()["images"]
        original = detail.get("original")
        url = original.get("url") if isinstance(original, dict) else original
        url = url or gallery[0]["imageurl_lg"]
        make_background(open_image(url)).save(bg_path, "WEBP", quality=QUALITY)

    return item["name"], "ok"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("start", type=int, help="STT bắt đầu")
    ap.add_argument("end", type=int, help="STT kết thúc (tính cả STT này)")
    ap.add_argument("--out", default=os.path.join("assets", "images"), help="thư mục xuất (mặc định assets/images)")
    ap.add_argument("--force", action="store_true", help="ghi đè file đã có")
    args = ap.parse_args()

    if args.start > args.end:
        sys.exit("STT bắt đầu phải nhỏ hơn hoặc bằng STT kết thúc.")
    targets = list(range(args.start, args.end + 1))
    unknown = [n for n in targets if n not in GAMES]
    if unknown:
        sys.exit(f"STT chưa có trong GAMES: {unknown}. Thêm BGG ID của chúng vào GAMES trước.")

    for n in targets:
        try:
            name, status = process(n, GAMES[n], args.out, args.force)
            print(f"{n:>3}  {name}  [{status}]")
        except Exception as e:  # tiếp tục các game còn lại
            print(f"{n:>3}  LỖI: {e}")


if __name__ == "__main__":
    main()
