#!/bin/sh
cd "$(dirname "$0")"
echo "GoldenState site at http://localhost:8000 (Ctrl+C to stop)"
(sleep 2; (xdg-open http://localhost:8000 || open http://localhost:8000) >/dev/null 2>&1) &
python3 serve.py 8000
