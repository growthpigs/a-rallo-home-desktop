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

console.log('🔧 Adjusting spacing balance...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Adjust gaps to be more balanced
  const replacements = [
    // Between tagline and headline: gap-2 (8px)
    { from: /gap-0\.5(\s+relative\s+self-stretch.*?Tagline)/g, to: 'gap-2$1' },
    
    // Between headline and subtext: gap-2 (8px) 
    { from: /gap-1(\s+relative.*?h[1-6]>)/g, to: 'gap-2$1' },
    
    // After subtext (before buttons/next element): gap-6 (24px)
    { from: /gap-1(\s+relative.*?Button|gap-1">[\s\S]*?<\/p>[\s\S]*?<\/div>[\s\S]*?<div)/g, to: 'gap-6$1' },
    
    // Main section gaps should be gap-2
    { from: /gap-0\.5(\s+px-16\s+py-28)/g, to: 'gap-2$1' },
    
    // Content wrapper gaps should be gap-3
    { from: /gap-0\.5(\s+relative\s+w-full.*?flex-col\s+max-w-screen)/g, to: 'gap-3$1' },
    
    // Change all body text to JetBrains Mono Light uppercase
    { from: /font-\['Inter'\]/g, to: "font-['JetBrains_Mono']" },
    { from: /font-normal(\s+text-black\s+text-\[length:var\(--text-medium-normal)/g, to: 'font-light uppercase$1' },
    { from: /font-normal(\s+.*?text-\[length:var\(--text-regular-normal)/g, to: 'font-light uppercase$1' },
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Adjusted spacing in ${file}`);
  }
});

console.log('\n✨ Spacing has been balanced!');