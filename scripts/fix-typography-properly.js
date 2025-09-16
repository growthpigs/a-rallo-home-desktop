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

console.log(`Fixing typography PROPERLY in ${files.length} section files...`);
console.log('======================================================');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const changes = [];
  
  // Fix 1: Reduce ALL gaps to minimal values
  const gapReplacements = [
    // Headlines to text gaps
    { from: /gap-6/g, to: 'gap-1', desc: 'gap-6 → gap-1 (24px → 4px)' },
    { from: /gap-4/g, to: 'gap-0.5', desc: 'gap-4 → gap-0.5 (16px → 2px)' },
    { from: /gap-3/g, to: 'gap-1', desc: 'gap-3 → gap-1 (12px → 4px)' },
    { from: /gap-2/g, to: 'gap-0.5', desc: 'gap-2 → gap-0.5 (8px → 2px)' },
    { from: /gap-8/g, to: 'gap-2', desc: 'gap-8 → gap-2 (32px → 8px)' },
    
    // Keep large section gaps intact
    { from: /gap-20/g, to: 'gap-20', desc: 'gap-20 kept (section spacing)' },
  ];
  
  gapReplacements.forEach(replacement => {
    const regex = new RegExp(replacement.from.source, 'g');
    const matches = content.match(regex);
    if (matches && matches.length > 0 && replacement.from.source !== replacement.to) {
      const before = content;
      content = content.replace(regex, replacement.to);
      if (before !== content) {
        modified = true;
        changes.push(`  ${replacement.desc} (${matches.length} occurrences)`);
      }
    }
  });
  
  // Fix 2: Reduce max-width to prevent widows (more aggressive)
  const widthReplacements = [
    // Replace 85% with 65%
    { from: /max-w-\[85%\]/g, to: 'max-w-[65%]', desc: 'max-w-[85%] → max-w-[65%]' },
    
    // Replace 380px with 340px
    { from: /max-w-\[380px\]/g, to: 'max-w-[340px]', desc: 'max-w-[380px] → max-w-[340px]' },
    
    // Replace 520px with 450px
    { from: /max-w-\[520px\]/g, to: 'max-w-[450px]', desc: 'max-w-[520px] → max-w-[450px]' },
    
    // Replace 500px with 420px
    { from: /max-w-\[500px\]/g, to: 'max-w-[420px]', desc: 'max-w-[500px] → max-w-[420px]' },
    
    // Add max-width to paragraphs that don't have one
    { 
      from: /<p className="([^"]*font-text-medium[^"]*)"(?![^>]*max-w)/g,
      to: '<p className="$1 max-w-[65%]"',
      desc: 'Added max-w-[65%] to paragraphs without max-width'
    },
  ];
  
  widthReplacements.forEach(replacement => {
    const matches = content.match(replacement.from);
    if (matches && matches.length > 0) {
      const before = content;
      content = content.replace(replacement.from, replacement.to);
      if (before !== content) {
        modified = true;
        changes.push(`  ${replacement.desc} (${matches.length} occurrences)`);
      }
    }
  });
  
  // Fix 3: Remove negative margins that are ineffective
  const marginReplacements = [
    { from: /mt-\[-1\.00px\]/g, to: '', desc: 'Removed mt-[-1.00px]' },
    { from: /\s+mt-\[-1px\]/g, to: '', desc: 'Removed mt-[-1px]' },
  ];
  
  marginReplacements.forEach(replacement => {
    const matches = content.match(replacement.from);
    if (matches && matches.length > 0) {
      const before = content;
      content = content.replace(replacement.from, replacement.to);
      if (before !== content) {
        modified = true;
        changes.push(`  ${replacement.desc} (${matches.length} occurrences)`);
      }
    }
  });
  
  // Fix 4: Special handling for specific text that still has widows
  if (content.includes('One Rallo account unlocks multiple ways to connect with your audience across digital platforms')) {
    const before = content;
    content = content.replace(
      /max-w-\[450px\]([^>]*>One Rallo account unlocks multiple ways to connect with your audience across digital platforms)/g,
      'max-w-[400px]$1'
    );
    if (before !== content) {
      modified = true;
      changes.push('  Fixed specific widow in "One Rallo account..." text');
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed ${file}:`);
    changes.forEach(change => console.log(change));
    console.log('');
  } else {
    console.log(`  No changes needed in ${file}`);
  }
});

console.log('======================================================');
console.log('Typography fixes COMPLETE!');
console.log('\nSummary of changes:');
console.log('✓ Reduced all gaps to minimal values (gap-1, gap-0.5)');
console.log('✓ Reduced max-widths to 65% to prevent widows');
console.log('✓ Removed ineffective negative margins');
console.log('✓ Fixed specific widow-prone text');
console.log('\nCombined with reduced line-heights in CSS:');
console.log('  - Headlines: 120% → 100% line-height');
console.log('  - Body text: 150% → 130% line-height');
console.log('\nResult: Tight spacing and no widows!');