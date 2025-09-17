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

console.log('🔧 Fixing all typography and spacing issues comprehensively...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Comprehensive fixes
  const replacements = [
    // Fix undefined class names - replace with "relative max-w-[XXXpx]"
    { from: /className="undefined\s+font-text-medium-normal/g, 
      to: 'className="relative max-w-[480px] font-text-medium-normal' },
    { from: /className="undefined\s+font-text-regular-normal/g, 
      to: 'className="relative max-w-[380px] font-text-regular-normal' },
      
    // Fix gap between headline and text - should be gap-3
    { from: /gap-1(\s+relative\s+self-stretch.*?flex-col.*?h[1-6]>)/g, to: 'gap-3$1' },
    { from: /gap-2(\s+relative\s+self-stretch.*?flex-col.*?h[1-6]>)/g, to: 'gap-3$1' },
    { from: /gap-0\.5(\s+self-stretch.*?flex-col.*?h[1-6]>)/g, to: 'gap-3$1' },
    
    // Ensure 25px space after text blocks
    { from: /gap-8(\s+relative.*?flex-col)/g, to: 'gap-3$1 mt-[25px]' },
    
    // Fix max-width for better line wrapping - no widows
    { from: /max-w-\[65%\]/g, to: 'max-w-[480px]' },
    { from: /max-w-\[85%\]/g, to: 'max-w-[520px]' },
    { from: /max-w-\[340px\]/g, to: 'max-w-[420px]' },
    { from: /max-w-\[380px\]/g, to: 'max-w-[420px]' },
    
    // Remove any leftover margin issues
    { from: /ml-\[\d+px\]\s+mr-\[\d+px\]/g, to: '' },
    
    // Clean up duplicate mt-[25px]
    { from: /mt-\[25px\]\s+mt-\[25px\]/g, to: 'mt-[25px]' },
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  // Special fix for button spacing - ensure mt-[25px] on button containers
  content = content.replace(
    /(<div className="inline-flex)(.*?items-center.*?gap-1.*?Button)/g,
    '$1 mt-[25px]$2'
  );
  
  // Clean up any duplicate mt-[25px]
  content = content.replace(/mt-\[25px\]\s+mt-\[25px\]/g, 'mt-[25px]');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed all issues in ${file}`);
  }
});

console.log('\n✨ All typography and spacing issues fixed!');