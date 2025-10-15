#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurações
const PUBLIC_DIR = join(__dirname, '..', 'public');
const QUALITY = 85; // Qualidade WebP (0-100)
const SKIP_FAVICON = true; // Não converter favicon

// Cores para output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

async function findPngFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await findPngFiles(fullPath));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.png') {
      // Pular favicon se configurado
      if (SKIP_FAVICON && entry.name.includes('favicon')) {
        console.log(`${colors.yellow}⏭️  Pulando:${colors.reset} ${fullPath.replace(PUBLIC_DIR, '')}`);
        continue;
      }
      files.push(fullPath);
    }
  }

  return files;
}

async function convertToWebP(pngPath) {
  const outputPath = pngPath.replace(/\.png$/i, '.webp');
  const relativePath = pngPath.replace(PUBLIC_DIR, '');

  try {
    const startTime = Date.now();
    const inputStats = await stat(pngPath);
    const inputSize = inputStats.size;

    // Converter para WebP
    await sharp(pngPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const outputStats = await stat(outputPath);
    const outputSize = outputStats.size;
    const reduction = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    const duration = Date.now() - startTime;

    console.log(
      `${colors.green}✓${colors.reset} ${relativePath}\n` +
      `  ${colors.blue}→${colors.reset} ${(inputSize / 1024).toFixed(1)} KB → ${(outputSize / 1024).toFixed(1)} KB ` +
      `${colors.green}(-${reduction}%)${colors.reset} [${duration}ms]`
    );

    return { inputSize, outputSize, reduction: parseFloat(reduction) };
  } catch (error) {
    console.error(`${colors.red}✗${colors.reset} Erro ao converter ${relativePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log(`\n${colors.blue}🔄 Iniciando conversão PNG → WebP...${colors.reset}\n`);

  const pngFiles = await findPngFiles(PUBLIC_DIR);

  if (pngFiles.length === 0) {
    console.log(`${colors.yellow}⚠️  Nenhum arquivo PNG encontrado para conversão.${colors.reset}\n`);
    return;
  }

  console.log(`${colors.blue}📦 Encontrados ${pngFiles.length} arquivo(s) PNG${colors.reset}\n`);

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;

  for (const pngFile of pngFiles) {
    const result = await convertToWebP(pngFile);
    if (result) {
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
      successCount++;
    }
  }

  // Relatório final
  const totalReduction = totalInputSize > 0
    ? ((totalInputSize - totalOutputSize) / totalInputSize * 100).toFixed(1)
    : 0;

  console.log(`\n${colors.green}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.green}✓ Conversão concluída!${colors.reset}`);
  console.log(`${colors.green}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`📊 Arquivos convertidos: ${colors.green}${successCount}/${pngFiles.length}${colors.reset}`);
  console.log(`📉 Tamanho original: ${colors.blue}${(totalInputSize / 1024).toFixed(1)} KB${colors.reset}`);
  console.log(`📦 Tamanho WebP: ${colors.blue}${(totalOutputSize / 1024).toFixed(1)} KB${colors.reset}`);
  console.log(`💾 Economia total: ${colors.green}-${totalReduction}% (${((totalInputSize - totalOutputSize) / 1024).toFixed(1)} KB)${colors.reset}`);
  console.log();
}

main().catch(console.error);
