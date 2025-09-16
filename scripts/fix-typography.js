#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing the section components
const sectionsDir = path.join(__dirname, '../client/src/pages/sections');

// Read all section files
const files = fs.readdirSync(sectionsDir).filter(file => file.endsWith('.tsx'));

console.log(`Fixing typography in ${files.length} section files...`);

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix 1: Reduce gap between headlines and text from gap-6 to gap-3, gap-4 to gap-2, gap-8 to gap-4
  const gapReplacements = [
    // For flex-col containers with headlines and text
    { from: /gap-6(\s+relative\s+self-stretch.*?flex-col)/g, to: 'gap-3$1' },
    { from: /gap-6(\s+w-full.*?flex-col)/g, to: 'gap-3$1' },
    { from: /gap-4(\s+relative\s+self-stretch.*?flex-col)/g, to: 'gap-2$1' },
    { from: /gap-4(\s+w-full.*?flex-col)/g, to: 'gap-2$1' },
    { from: /gap-8(\s+relative\s+self-stretch.*?flex-col)/g, to: 'gap-4$1' },
    
    // Also fix when gap comes after flex-col
    { from: /(flex-col\s+items-\w+\s+)gap-6/g, to: '$1gap-3' },
    { from: /(flex-col\s+items-\w+\s+)gap-4/g, to: '$1gap-2' },
    { from: /(flex-col\s+items-\w+\s+)gap-8/g, to: '$1gap-4' },
    
    // Fix gaps in flex-col containers with items-center or items-start
    { from: /(flex\s+flex-col\s+items-(?:center|start)\s+)gap-6/g, to: '$1gap-3' },
    { from: /(flex\s+flex-col\s+items-(?:center|start)\s+)gap-4/g, to: '$1gap-2' },
    { from: /(flex\s+flex-col\s+items-(?:center|start)\s+)gap-8/g, to: '$1gap-4' },
  ];
  
  gapReplacements.forEach(replacement => {
    const before = content;
    content = content.replace(replacement.from, replacement.to);
    if (before !== content) modified = true;
  });
  
  // Fix 2: Add max-width to paragraphs to prevent widows
  // Look for paragraphs that use self-stretch and add max-width
  const paragraphPatterns = [
    // Pattern for p tags with self-stretch
    {
      from: /<p className="relative self-stretch/g,
      to: '<p className="relative max-w-[85%]'
    },
    // Pattern for p tags that are full width
    {
      from: /<p className="(?!.*max-w)([^"]*font-text-medium[^"]*)">/g,
      to: '<p className="$1 max-w-[500px]">'
    },
    // For center-aligned paragraphs, use a different max-width
    {
      from: /<p className="([^"]*text-center[^"]*?)self-stretch([^"]*)">/g,
      to: '<p className="$1max-w-[520px] mx-auto$2">'
    }
  ];
  
  paragraphPatterns.forEach(pattern => {
    const before = content;
    content = content.replace(pattern.from, pattern.to);
    if (before !== content) modified = true;
  });
  
  // Fix 3: Special handling for sections with specific text that needs width constraints
  if (content.includes('audience across digital platforms')) {
    content = content.replace(
      /<p className="([^"]*)">\s*One Rallo account unlocks multiple ways to connect with your\s*audience across digital platforms\./g,
      '<p className="$1">One Rallo account unlocks multiple ways to connect with your audience across digital platforms.'
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed typography in ${file}`);
  } else {
    console.log(`  No changes needed in ${file}`);
  }
});

console.log('\nTypography fixes complete!');
console.log('Summary of changes:');
console.log('- Reduced spacing between headlines and text (gap-6→3, gap-4→2, gap-8→4)');
console.log('- Added max-width constraints to prevent text widows');
console.log('- Optimized text wrapping for better readability');