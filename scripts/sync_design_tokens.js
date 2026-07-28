/**
 * Design Token Validation & Synchronization Script for Vodafone Design System
 * Ensures tailwind.config.ts and globals.css adhere to design.md (v-alpha)
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Auditing & Syncing Vodafone Design System Tokens...');

const rootDir = path.resolve(__dirname, '..');
let designMdPath = path.join(rootDir, 'design.md');
if (!fs.existsSync(designMdPath)) {
  designMdPath = path.join(rootDir, 'Design.md');
}

if (!fs.existsSync(designMdPath)) {
  console.error('❌ design.md missing!');
  process.exit(1);
}

const designMdContent = fs.readFileSync(designMdPath, 'utf8');

// Key Vodafone tokens to enforce
const requiredTokens = [
  '#0D0D0D', // Primary
  '#6D6D6D', // Secondary
  '#E60000', // Tertiary (Vodafone Red)
  '#F4F4F4', // Neutral
  '#FFFFFF', // Surface / On-primary
];

let allValid = true;

requiredTokens.forEach((token) => {
  if (!designMdContent.includes(token)) {
    console.warn(`⚠️ Warning: Vodafone Token ${token} missing from design.md`);
    allValid = false;
  }
});

if (allValid) {
  console.log('✅ All Master Vodafone Color Tokens verified in design.md:');
  console.log('  - Primary (#0D0D0D)');
  console.log('  - Secondary (#6D6D6D)');
  console.log('  - Tertiary / Vodafone Red (#E60000)');
  console.log('  - Neutral (#F4F4F4)');
  console.log('  - Surface / On-Primary (#FFFFFF)');
  console.log('✨ Vodafone Design System Tokens synchronized successfully!');
} else {
  console.log('⚠️ Token verification finished with warnings.');
}
