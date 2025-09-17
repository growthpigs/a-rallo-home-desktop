#!/usr/bin/env node

// File verification script for RALLO animation assets
const fs = require('fs');
const path = require('path');

// Expected files in sequence
const expectedFiles = [
  // R variations (1-4)
  '1-R.jpg', '2-R.jpg', '3-R.jpg', '4-R.jpg',
  // A variations (5-8)
  '1-A.jpg', '2-A.jpg', '3-A.jpg', '4-A.jpg',
  // L1 variations (9-12)
  '1-L1.jpg', '2-L1.jpg', '3-L1.jpg', '4-L1.jpg',
  // L2 variations (13-16)
  '1-L2.jpg', '2-L2.jpg', '3-L2.jpg', '4-L2.jpg',
  // O variations (17-20)
  '1-O.jpg', '2-O.jpg', '3-O.jpg', '4-O.jpg',
  // Final logo parts (21-25)
  'r-logo.png', 'a-logo.png', 'l1-logo.png', 'l2-logo.png', 'o-logo.png'
];

const imagesDir = path.join(__dirname, 'assets', 'images');

console.log('===========================================');
console.log('RALLO Animation Assets Verification');
console.log('===========================================\n');

let allValid = true;
let foundCount = 0;
let missingFiles = [];
let fileDetails = [];

// Check each expected file
expectedFiles.forEach((filename, index) => {
  const filePath = path.join(imagesDir, filename);
  const frameNumber = index + 1;
  
  try {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    
    console.log(`✅ Frame ${frameNumber.toString().padStart(2, '0')}: ${filename.padEnd(15)} (${sizeKB} KB)`);
    
    fileDetails.push({
      frame: frameNumber,
      filename: filename,
      size: stats.size,
      exists: true
    });
    
    foundCount++;
  } catch (error) {
    console.log(`❌ Frame ${frameNumber.toString().padStart(2, '0')}: ${filename.padEnd(15)} - MISSING`);
    missingFiles.push(filename);
    allValid = false;
    
    fileDetails.push({
      frame: frameNumber,
      filename: filename,
      size: 0,
      exists: false
    });
  }
});

console.log('\n===========================================');
console.log('Summary');
console.log('===========================================');
console.log(`Total Expected: ${expectedFiles.length} files`);
console.log(`Found: ${foundCount} files`);
console.log(`Missing: ${missingFiles.length} files`);

if (allValid) {
  console.log('\n✅ All files present and accessible!');
  console.log('Animation sequence is ready to play.');
} else {
  console.log('\n❌ Some files are missing:');
  missingFiles.forEach(file => console.log(`  - ${file}`));
}

// Check for extra files not in sequence
console.log('\n===========================================');
console.log('Checking for additional files...');
console.log('===========================================');

const actualFiles = fs.readdirSync(imagesDir);
const extraFiles = actualFiles.filter(file => 
  !expectedFiles.includes(file) && 
  !file.startsWith('.') &&
  file !== 'manifest.json'
);

if (extraFiles.length > 0) {
  console.log('\n⚠️ Additional files found (not in sequence):');
  extraFiles.forEach(file => console.log(`  - ${file}`));
} else {
  console.log('\n✅ No extra files found.');
}

// Calculate total size
const totalSize = fileDetails
  .filter(f => f.exists)
  .reduce((sum, f) => sum + f.size, 0);

const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

console.log('\n===========================================');
console.log('Storage Information');
console.log('===========================================');
console.log(`Total size of animation assets: ${totalSizeMB} MB`);

// Export verification results
const results = {
  timestamp: new Date().toISOString(),
  valid: allValid,
  totalFiles: expectedFiles.length,
  foundFiles: foundCount,
  missingFiles: missingFiles,
  totalSize: totalSize,
  fileDetails: fileDetails
};

// Write results to JSON
const resultsPath = path.join(__dirname, 'verification-results.json');
fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
console.log(`\n📄 Verification results saved to: verification-results.json`);

process.exit(allValid ? 0 : 1);