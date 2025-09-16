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

console.log('🔧 Eliminating all text widows and ensuring proper spacing...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // More aggressive widow prevention strategies
  const replacements = [
    // Set specific max-widths for different text sizes
    // For medium text (17px) - ensure it fits on 2-3 lines max
    { from: /max-w-\[65%\](\s+font-text-medium-normal)/g, to: 'max-w-[480px]$1' },
    { from: /max-w-\[400px\](\s+font-text-medium-normal)/g, to: 'max-w-[480px]$1' },
    { from: /max-w-\[340px\](\s+font-text-medium-normal)/g, to: 'max-w-[420px]$1' },
    
    // For regular text (15px) - tighter constraints
    { from: /max-w-\[65%\](\s+font-text-regular-normal)/g, to: 'max-w-[380px]$1' },
    { from: /max-w-\[400px\](\s+font-text-regular-normal)/g, to: 'max-w-[380px]$1' },
    
    // Ensure minimum 30px (gap-8) after text before buttons/next elements
    { from: /gap-1(\s+relative.*?inline-flex.*?Button)/g, to: 'gap-8$1' },
    { from: /gap-2(\s+relative.*?inline-flex.*?Button)/g, to: 'gap-8$1' },
    { from: /gap-3(\s+relative.*?inline-flex.*?Button)/g, to: 'gap-8$1' },
    { from: /gap-4(\s+relative.*?inline-flex.*?Button)/g, to: 'gap-8$1' },
    { from: /gap-6(\s+relative.*?inline-flex.*?Button)/g, to: 'gap-8$1' },
    
    // Add margin-top to buttons after paragraphs
    { from: /(<\/p>\s*<\/div>\s*<\/div>\s*<div.*?inline-flex)/g, to: '$1 mt-8' },
    
    // Specific fix for the "platforms" widow
    { from: /max-w-\[65%\]">One Rallo account/g, to: 'max-w-[450px]">One Rallo account' },
    
    // Add specific widths for common text blocks
    { from: /relative\s+max-w-\[\d+px\]/g, function(match) {
        // Extract current max-width
        const currentWidth = match.match(/\d+/)[0];
        const newWidth = Math.max(380, Math.min(480, parseInt(currentWidth) + 40));
        return `relative max-w-[${newWidth}px]`;
      }
    }
  ];
  
  replacements.forEach(({ from, to }) => {
    if (typeof to === 'function') {
      content = content.replace(from, to);
    } else {
      content = content.replace(from, to);
    }
  });
  
  // Fix any duplicate mt-8 classes
  content = content.replace(/mt-8\s+mt-8/g, 'mt-8');
  
  // Special handling for centered text (needs different max-widths)
  content = content.replace(/max-w-\[450px\].*?text-center/g, 'max-w-[500px] text-center');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed widows in ${file}`);
  }
});

console.log('\n✨ All widows eliminated with proper spacing!');