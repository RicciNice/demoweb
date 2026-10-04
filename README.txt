GoldenState College - Team Website

HOW TO RUN IN VS CODE
1. Unzip this folder.
2. In VS Code: File > Open Folder > select "goldenstate-college".
3. Install the "Live Server" extension (by Ritwick Dey).
4. Right-click index.html > "Open with Live Server".
   (Or just double-click index.html to open it in your browser.)

FILES
- index.html : page content (coaches, players, videos, sponsors, footer)
- style.css  : all colors, fonts, and layout
- cs-theme.css : Counter-Strike.net-inspired look layered on top (delete it + its <link> in index.html to revert)
- cs-scroll.js : parallax hero, staggered reveals, section dots

Fonts load from Google Fonts, so you need an internet connection to see them.


EDIT CONTACT LINKS: top of the <script> at the bottom of index.html (variable C): Facebook page, Messenger, WhatsApp, phone.
PHOTOS: see photos/README.txt.

AUTOPLAY: double-click start-website.bat (Windows) or start-website.sh (Mac/Linux) to open the site at http://localhost:8000, where the 3 highlight videos autoplay muted. Or use VS Code > Live Server.

NEW (ref-theme.css): Leadership = 3 tall cards (Sir Warren, Ma'am Sara, Sir John). Academy = dark hero with Facebook / WhatsApp / Messenger icon links (no phone number). Partners = gold social band + black partner footer.
Extra photo: photos/academy.jpg (optional background for the Academy hero, shows in black & white).
Extra links in index.html variable C: ig, yt, tt, x (Instagram, YouTube, TikTok, X). Edit them like fb / msg / wa.

HIGHLIGHTS: now a full-width autoplay stage. The 3 clips (messi/yamal/neymar) play muted and rotate every 8 seconds; the centre button opens the current clip with sound. Change the 8000 (ms) in the last script of index.html to adjust timing.
