import urllib.request
import re

urls = [
    'https://www.antaranews.com/berita/3407715/ekotifa-inovasi-dalam-pemberdayaan-masyarakat-di-kota-bogor',
    'https://megapolitan.antaranews.com/berita/232695/ekotifa-fasilitasi-223-siswa-yphb-plus-bogor-riset-di-dieng',
    'https://bogor-kita.com/baik-heritage-ajak-traveler-kembali-ke-masa-eropa-zaman-dulu/'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'property="og:image"\s+content="([^"]+)"', html)
        if match:
            print(f"URL: {url} -> Image: {match.group(1)}")
        else:
            print(f"URL: {url} -> Image not found")
    except Exception as e:
        print(f"URL: {url} -> Error: {e}")
