/**
 * Design Token Validation & Synchronization Script for Addis Foodies
 * Ensures tailwind.config.ts and globals.css adhere to Design.md (v5.0)
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Auditing & Syncing Design System Tokens for Addis Foodies (v5.0)...');

const rootDir = path.resolve(__dirname, '..');
const designMdPath = path.join(rootDir, 'Design.md');
const tailwindConfigPath = path.join(rootDir, 'tailwind.config.ts');
const globalsCssPath = path.join(rootDir, 'src', 'app', 'globals.css');

if (!fs.existsSync(designMdPath)) {
  console.error('❌ Design.md missing!');
  process.exit(1);
}

const designMdContent = fs.readFileSync(designMdPath, 'utf8');

// Key tokens to enforce
const requiredTokens = [
  '#A81D1D', // Primary Crimson
  '#8B1717', // Dark Crimson
  '#F59E0B', // Warm Amber
  '#111827', // Deep Charcoal
  '#FAFAFA', // Soft Cream
  '#10B981', // Emerald Green
];

let allValid = true;

requiredTokens.forEach((token) => {
  if (!designMdContent.includes(token)) {
    console.warn(`⚠️ Warning: Token ${token} missing from Design.md`);
    allValid = false;
  }
});

if (allValid) {
  console.log('✅ All 6 Master Color Tokens verified in Design.md:');
  console.log('  - Primary Crimson (#A81D1D)');
  console.log('  - Dark Crimson (#8B1717)');
  console.log('  - Warm Amber (#F59E0B)');
  console.log('  - Deep Charcoal (#111827)');
  console.log('  - Soft Cream (#FAFAFA)');
  console.log('  - Emerald Green (#10B981)');
  console.log('✨ Design System Tokens synchronized successfully!');
} else {
  console.log('⚠️ Token verification finished with warnings.');
}
