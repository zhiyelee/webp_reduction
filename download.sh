rm *.png*
rm index.html*
wget http://tubitv.com
cat index.html| grep -Eow "url\([^)]+.png\)" | awk -F'[()]' '{print $2}' | xargs wget 
for i in `find *.png`; do cwebp -q 100 $i -o $i.webp; done
node t.js
