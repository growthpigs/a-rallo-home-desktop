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

console.log('🔧 Final comprehensive spacing fix...\n');

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Remove any nested containers causing spacing issues
  // Pattern: tagline div -> nested container -> headline and text
  // Should be: tagline div -> headline -> text (all siblings)
  
  // Fix duplicate mt-1
  content = content.replace(/mt-1\s+font-\[number/g, 'font-[number');
  content = content.replace(/font-text-medium-normal\s+mt-1/g, 'font-text-medium-normal');
  
  // Ensure wider text to prevent widows
  content = content.replace(/max-w-\[520px\]/g, 'max-w-[550px]');
  content = content.replace(/max-w-\[500px\]/g, 'max-w-[540px]');
  content = content.replace(/max-w-\[460px\]/g, 'max-w-[500px]');
  
  // Clean up any leftover issues
  content = content.replace(/mt-1\s+mt-1/g, 'mt-1');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Final fix applied to ${file}`);
  }
});

console.log('\n✨ Final spacing corrections complete!');