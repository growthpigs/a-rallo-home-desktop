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

console.log('🔧 Applying final typography and spacing fixes...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Final adjustments
  const replacements = [
    // Add uppercase to all body text
    { from: /font-text-medium-normal font-\[number:var\(--text-medium-normal-font-weight\)\]/g, 
      to: 'font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase' },
    { from: /font-text-regular-normal font-\[number:var\(--text-regular-normal-font-weight\)\]/g, 
      to: 'font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase' },
    
    // Fix specific gap issues - headline to text should be gap-2
    { from: /gap-0\.5(\s+relative.*?flex-col.*?h[1-6]>)/g, to: 'gap-2$1' },
    { from: /gap-1(\s+relative.*?flex-col.*?h[1-6]>)/g, to: 'gap-2$1' },
    
    // After text paragraphs, ensure gap-6 for buttons
    { from: /(<\/p>\s*<\/div>\s*<\/div>\s*<div.*?inline-flex.*?Button)/g, 
      to: '$1' },
    
    // Ensure section-level gaps are gap-3
    { from: /gap-2(\s+px-16\s+py-28)/g, to: 'gap-3$1' },
    
    // Remove font-['Inter'] completely as we're using JetBrains Mono
    { from: /font-\['Inter'\]/g, to: "font-['JetBrains_Mono']" },
    
    // Ensure all text has font-light
    { from: /font-normal(\s+text-)/g, to: 'font-light$1' },
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  // Fix duplicate uppercase attributes
  content = content.replace(/uppercase\s+uppercase/g, 'uppercase');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed typography in ${file}`);
  }
});

console.log('\n✨ Final typography fixes applied!');