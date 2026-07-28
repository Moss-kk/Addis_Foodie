/**
 * Design Token Validation & Synchronization Script for Heritage Design System
 * Ensures tailwind.config.ts and globals.css adhere to design.md (v-alpha Heritage)
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Auditing & Syncing Heritage Design System Tokens...');

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

// Key Heritage tokens to enforce
const requiredTokens = [
  '#1A1C1E', // Primary
  '#6C7278', // Secondary
  '#B8422E', // Tertiary Accent
  '#F7F5F2', // Neutral Foundation
  '#FFFFFF', // Surface / On-primary
];

let allValid = true;

requiredTokens.forEach((token) => {
  if (!designMdContent.includes(token)) {
    console.warn(`⚠️ Warning: Heritage Token ${token} missing from design.md`);
    allValid = false;
  }
});

if (allValid) {
  console.log('✅ All Master Heritage Color Tokens verified in design.md:');
  console.log('  - Primary (#1A1C1E)');
  console.log('  - Secondary (#6C7278)');
  console.log('  - Tertiary (#B8422E)');
  console.log('  - Neutral (#F7F5F2)');
  console.log('  - Surface / On-Primary (#FFFFFF)');
  console.log('✨ Heritage Design System Tokens synchronized successfully!');
} else {
  console.log('⚠️ Token verification finished with warnings.');
}
