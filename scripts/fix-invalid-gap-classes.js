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

console.log('🔧 Fixing invalid Tailwind gap classes...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Fix invalid gap classes
  const replacements = [
    // Fix decimal issues
    { from: /gap-0\.50/g, to: 'gap-0.5' },
    { from: /gap-0\.58/g, to: 'gap-0.5' },
    { from: /gap-0\.5\.5/g, to: 'gap-0.5' },
    { from: /gap-1\.00/g, to: 'gap-1' },
    { from: /gap-2\.00/g, to: 'gap-2' },
    { from: /gap-3\.00/g, to: 'gap-3' },
    { from: /gap-4\.00/g, to: 'gap-4' },
    { from: /gap-5\.00/g, to: 'gap-5' },
    { from: /gap-6\.00/g, to: 'gap-6' },
    
    // Also fix any padding/margin issues
    { from: /p-0\.50/g, to: 'p-0.5' },
    { from: /p-0\.58/g, to: 'p-0.5' },
    { from: /p-0\.5\.5/g, to: 'p-0.5' },
    { from: /m-0\.50/g, to: 'm-0.5' },
    { from: /m-0\.58/g, to: 'm-0.5' },
    { from: /m-0\.5\.5/g, to: 'm-0.5' },
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed invalid classes in ${file}`);
    
    // Show what was changed
    replacements.forEach(({ from, to }) => {
      const matches = originalContent.match(from);
      if (matches) {
        console.log(`   ${matches[0]} → ${to}`);
      }
    });
  }
});

console.log('\n✨ All invalid gap classes have been fixed!');