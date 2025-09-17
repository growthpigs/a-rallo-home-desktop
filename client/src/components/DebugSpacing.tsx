import React, { useEffect, useState } from 'react';

export const DebugSpacing: React.FC<{ targetSelector: string }> = ({ targetSelector }) => {
  const [spacing, setSpacing] = useState<any>(null);

  useEffect(() => {
    const element = document.querySelector(targetSelector);
    if (element) {
      const computed = window.getComputedStyle(element);
      const parent = element.parentElement;
      const parentComputed = parent ? window.getComputedStyle(parent) : null;
      
      setSpacing({
        lineHeight: computed.lineHeight,
        fontSize: computed.fontSize,
        marginTop: computed.marginTop,
        marginBottom: computed.marginBottom,
        paddingTop: computed.paddingTop,
        paddingBottom: computed.paddingBottom,
        gap: parentComputed?.gap || 'N/A',
        parentPadding: parentComputed ? `${parentComputed.paddingTop} / ${parentComputed.paddingBottom}` : 'N/A'
      });
    }
  }, [targetSelector]);

  if (!spacing) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs z-50 max-w-sm">
      <div className="font-bold mb-2">Debug: {targetSelector}</div>
      <div>Line Height: {spacing.lineHeight}</div>
      <div>Font Size: {spacing.fontSize}</div>
      <div>Margin: {spacing.marginTop} / {spacing.marginBottom}</div>
      <div>Padding: {spacing.paddingTop} / {spacing.paddingBottom}</div>
      <div>Parent Gap: {spacing.gap}</div>
      <div>Parent Padding: {spacing.parentPadding}</div>
    </div>
  );
};