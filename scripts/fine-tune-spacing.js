#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sectionsDir = path.join(__dirname, '../client/src/pages/sections');

// Read all section files
const files = fs.readdirSync(sectionsDir).filter(file => file.endsWith('.tsx'));

console.log('🔧 Fine-tuning spacing between elements...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Fine-tune spacing
  const replacements = [
    // Between headline and subtext: gap-1 to gap-3 (12px - 50% more than gap-2)
    { from: /gap-1(\s+relative\s+self-stretch.*?h[1-6]>)/g, to: 'gap-3$1' },
    { from: /gap-2(\s+relative\s+self-stretch.*?h[1-6]>)/g, to: 'gap-3$1' },
    
    // Change gap-8 (32px) to custom gap for 25px (between gap-6 which is 24px)
    { from: /gap-8(\s+relative.*?inline-flex)/g, to: 'gap-[25px]$1' },
    { from: /mt-8/g, to: 'mt-[25px]' },
    
    // Ensure consistent spacing in flex containers with headlines
    { from: /gap-1(\s+w-full.*?h[1-6]>)/g, to: 'gap-3$1' },
    { from: /gap-2(\s+w-full.*?h[1-6]>)/g, to: 'gap-3$1' },
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fine-tuned spacing in ${file}`);
  }
});

console.log('\n✨ Spacing fine-tuned: gap-3 between headline/text, 25px below text!');