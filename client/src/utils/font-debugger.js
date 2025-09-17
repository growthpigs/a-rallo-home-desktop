// Font Debugger - Identifies all JetBrains Mono usage and word-spacing issues
export function debugFonts() {
  console.log('🔍 === FONT DEBUGGER STARTING ===');
  
  // Get all elements on the page
  const allElements = document.querySelectorAll('*');
  const jetBrainsElements = [];
  const problemElements = [];
  
  allElements.forEach((el, index) => {
    const computed = window.getComputedStyle(el);
    const fontFamily = computed.fontFamily;
    const wordSpacing = computed.wordSpacing;
    
    // Check if element uses JetBrains Mono in any form
    if (fontFamily && (
      fontFamily.includes('JetBrains') || 
      fontFamily.includes('jetbrains') ||
      fontFamily.includes('mono') ||
      fontFamily.includes('Mono')
    )) {
      jetBrainsElements.push({
        element: el,
        tagName: el.tagName,
        className: el.className,
        fontFamily: fontFamily,
        wordSpacing: wordSpacing,
        text: el.textContent?.substring(0, 50),
        hasNegativeSpacing: wordSpacing.includes('-')
      });
      
      // Check if word-spacing is NOT negative (our fix not applied)
      if (!wordSpacing.includes('-')) {
        problemElements.push({
          element: el,
          tagName: el.tagName,
          className: el.className,
          id: el.id,
          fontFamily: fontFamily,
          wordSpacing: wordSpacing,
          text: el.textContent?.substring(0, 50),
          inlineStyle: el.getAttribute('style'),
          computedSpecificity: getSpecificity(el)
        });
      }
    }
  });
  
  console.log(`📊 Found ${jetBrainsElements.length} elements with JetBrains/Mono fonts`);
  console.log(`✅ ${jetBrainsElements.filter(e => e.hasNegativeSpacing).length} have negative word-spacing (FIX APPLIED)`);
  console.log(`❌ ${problemElements.length} DON'T have negative word-spacing (FIX NOT APPLIED)`);
  
  console.log('\n🔴 PROBLEM ELEMENTS (no word-spacing fix):');
  problemElements.forEach(item => {
    console.log('---');
    console.log('Element:', item.tagName, item.className || '[no class]');
    console.log('Font:', item.fontFamily);
    console.log('Word Spacing:', item.wordSpacing);
    console.log('Inline Style:', item.inlineStyle || '[none]');
    console.log('Text Preview:', item.text);
    
    // Highlight the element visually
    item.element.style.outline = '3px solid red';
    item.element.style.outlineOffset = '2px';
  });
  
  console.log('\n🟢 WORKING ELEMENTS (word-spacing applied):');
  const workingElements = jetBrainsElements.filter(e => e.hasNegativeSpacing);
  workingElements.slice(0, 5).forEach(item => {
    console.log('---');
    console.log('Element:', item.tagName, item.className || '[no class]');
    console.log('Font:', item.fontFamily);
    console.log('Word Spacing:', item.wordSpacing);
    console.log('Text Preview:', item.text);
    
    // Highlight working elements in green
    item.element.style.outline = '3px solid green';
    item.element.style.outlineOffset = '2px';
  });
  
  // Check for Tailwind font-mono class
  const fontMonoElements = document.querySelectorAll('.font-mono');
  console.log(`\n🎯 Elements with .font-mono class: ${fontMonoElements.length}`);
  fontMonoElements.forEach(el => {
    const computed = window.getComputedStyle(el);
    console.log('font-mono element:', el.tagName, 'Word-spacing:', computed.wordSpacing);
  });
  
  console.log('\n🔍 === FONT DEBUGGER COMPLETE ===');
  
  return { jetBrainsElements, problemElements };
}

function getSpecificity(element) {
  // Simple specificity calculator
  let score = 0;
  if (element.id) score += 100;
  if (element.className) score += element.className.split(' ').length * 10;
  if (element.getAttribute('style')) score += 1000;
  return score;
}

// Auto-run on page load
if (typeof window !== 'undefined') {
  window.debugFonts = debugFonts;
  
  // Run after a delay to ensure all React components are rendered
  setTimeout(() => {
    console.log('🚀 Auto-running font debugger...');
    debugFonts();
  }, 2000);
}