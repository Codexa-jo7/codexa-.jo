# CODEXA

Arabic RTL portfolio for CODEXA. Static HTML, CSS and JavaScript, with no build dependencies.

## Run

From this directory:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Deploy these files to any static host, including GitHub Pages. All local asset paths are relative to support a repository subpath.

Project cards open external sites inside a sandboxed dialog iframe. Public destination URLs cannot be protected against extraction or copying. Framing also depends on each destination's headers, availability, and browser policy; links opening popups remain subject to browser controls. The preview offers a reload control and a permanent help message because cross-origin iframe load events cannot reliably confirm rendering.

Contact: codexa.jo@gmail.com.

Logos for Hashemi, City Fries, and MZMZ come from their supplied public repositories. Huna uses its website's text-based branding. `assets/codexa.svg` is a vector approximation of the supplied CODEXA image, not the original image file.
