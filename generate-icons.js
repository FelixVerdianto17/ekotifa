const sharp = require('sharp');
const pngToIco = require('png-to-ico').default || require('png-to-ico');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, 'public', 'images', 'brand', 'logo.webp');
const publicDir = path.join(__dirname, 'public');

async function generateIcons() {
  try {
    // 1. apple-touch-icon.png (180x180)
    await sharp(inputImagePath)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('Created apple-touch-icon.png');

    // 2. icon-192.png
    await sharp(inputImagePath)
      .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('Created icon-192.png');

    // 3. icon-512.png
    await sharp(inputImagePath)
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('Created icon-512.png');

    // 4. Create a 64x64 png for the favicon, then convert to ico
    const tempPngPath = path.join(publicDir, 'temp-favicon.png');
    await sharp(inputImagePath)
      .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(tempPngPath);
      
    const buf = await pngToIco(tempPngPath);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buf);
    console.log('Created favicon.ico');
    
    // clean up temp
    fs.unlinkSync(tempPngPath);
    
  } catch (err) {
    console.error(err);
  }
}
generateIcons();
