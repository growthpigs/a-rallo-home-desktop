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

console.log('🔧 Fixing structural spacing issues from first principles...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Fix structural issues
  const replacements = [
    // Remove justify-between that causes massive gaps
    { from: /justify-between(\s+self-stretch.*?flex.*?<div.*?flex-col)/g, to: '$1' },
    
    // Ensure headlines and text are in same container with proper gaps
    // Between tagline and headline: gap-2 (8px)
    // Between headline and text: gap-2 to gap-3 (8-12px)  
    // After text before buttons: mt-[25px]
    
    // Fix gaps in heading containers
    { from: /gap-0\.5(\s+relative\s+self-stretch.*?flex-col.*?h[1-6]>)/g, to: 'gap-2$1' },
    { from: /gap-1(\s+relative\s+self-stretch.*?flex-col.*?h[1-6]>)/g, to: 'gap-2$1' },
    
    // Ensure proper text width to prevent widows
    { from: /max-w-\[480px\]/g, to: 'max-w-[520px]' },
    { from: /max-w-\[420px\]/g, to: 'max-w-[460px]' },
    { from: /max-w-\[450px\]/g, to: 'max-w-[500px]' },
    
    // Add small margin between headline and text if needed
    { from: /(<p className="relative max-w-\[\d+px\].*?font-text-medium-normal)/g, 
      to: '$1 mt-1' },
    
    // Ensure button has proper spacing
    { from: /(<div className="inline-flex.*?items-center.*?Button)/g,
      to: '$1' },
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  // Clean up duplicate mt-1 or mt-[25px]
  content = content.replace(/mt-1\s+mt-1/g, 'mt-1');
  content = content.replace(/mt-\[25px\]\s+mt-\[25px\]/g, 'mt-[25px]');
  
  // Ensure buttons always have mt-[25px] if not already present
  content = content.replace(
    /(<div className="inline-flex)(?!.*?mt-\[25px\])(.*?items-center.*?gap-1.*?Button)/g,
    '$1 mt-[25px]$2'
  );
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed structural spacing in ${file}`);
  }
});

console.log('\n✨ All structural spacing issues resolved!');