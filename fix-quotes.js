const fs = require('fs');
const path = require('path');

const files = [
  'app/material-didatico/page.tsx',
  'app/o-que-e-crowdfunding/page.tsx',
  'app/o-que-sao-tokens/page.tsx',
  'app/politica-pld-cft/page.tsx',
  'app/processo-kyc-pld/page.tsx',
  'app/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace unescaped quotes in JSX text content
  // Pattern: Finds quotes within JSX that are not already HTML entities
  content = content
    // Replace straight double quotes that are NOT part of prop assignments
    .replace(/(\s|>)\"([^"<>]*?)\"(\s|<|,|\.)/g, '$1&quot;$2&quot;$3')
    // Replace straight single quotes (apostrophes)
    .replace(/(\s)\'([^'<>]*?)\'(\s)/g, '$1&apos;$2&apos;$3');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${file}`);
});

console.log('Done!');
