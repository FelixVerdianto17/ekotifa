const fs = require('fs');
const path = require('path');

function formatName(filename) {
  let name = filename.replace('.webp', '');
  // Format specific weird names
  if (name.startsWith('img-')) {
    return 'Partner Logo';
  }
  return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function generateData(dirPath, type) {
  const fullPath = path.join(__dirname, 'public/images/partners/kolaborasi'); // The user put them in public/images/partners/kolaborasi, wait.
  // Wait, let's use exact paths from my previous `list_dir`
}

const kolaborasiDir = path.join(__dirname, 'public/images/partners/kolaborasi');
const klienDir = path.join(__dirname, 'public/images/klien');

const kolaborasiFiles = fs.readdirSync(kolaborasiDir).filter(f => f.endsWith('.webp'));
const klienFiles = fs.readdirSync(klienDir).filter(f => f.endsWith('.webp'));

const kolaborasiLogos = kolaborasiFiles.map((f, i) => ({
  id: `collab-${i+1}`,
  name: formatName(f),
  logoUrl: `/images/partners/kolaborasi/${f}`,
  alt: `${formatName(f)} Logo`
}));

const clientLogos = klienFiles.map((f, i) => ({
  id: `client-${i+1}`,
  name: formatName(f),
  logoUrl: `/images/klien/${f}`,
  alt: `${formatName(f)} Logo`
}));

const tsContent = `// Auto-generated partner logos data

export const collaborationLogos = ${JSON.stringify(kolaborasiLogos, null, 2)};

export const clientLogos = ${JSON.stringify(clientLogos, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'data/partnerLogos.ts'), tsContent);
console.log('Done!');
