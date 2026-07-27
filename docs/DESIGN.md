# ADDIS FOODIES MASTER DESIGN SYSTEM SPECIFICATION (v5.0)

---

## 1. Aesthetic Direction
Addis Foodies combines the editorial sophistication of *National Geographic* and *Michelin Guide* with the clean usability of *Apple* and *Airbnb*.

- **Day Mode (Light Broken White)**: Soft Warm Broken White canvas (`#FAF8F5`), pure white card surfaces (`#FFFFFF`), dark stone typography (`#111827`), subtle borders (`border-stone-200/80`).
- **Night Mode (Dark Obsidian Flame)**: Deep Obsidian Charcoal canvas (`#120907`), rich dark card surfaces (`#1A100C`), glowing crimson (`#E53935`) and amber (`#FF8C00`) accents, crisp white text (`#FFF8F6`).

---

## 2. Color Palette Tokens

```css
/* Light Day Broken White Mode */
:root {
  --background: #FAF8F5;
  --foreground: #111827;
  --card-bg: #FFFFFF;
  --card-border: #E5E7EB;
  --brand-primary: #E53935;
  --brand-amber: #FF8C00;
  --text-muted: #57534E;
}

/* Dark Flame Night Mode */
.dark {
  --background: #120907;
  --foreground: #FFF8F6;
  --card-bg: #1A100C;
  --card-border: rgba(229, 57, 53, 0.18);
  --brand-primary: #E53935;
  --brand-amber: #FF8C00;
  --text-muted: #D1C2BD;
}
```

### Verified Master Hex Tokens
- **Primary Crimson**: `#A81D1D` / `#E53935`
- **Dark Crimson**: `#8B1717`
- **Warm Amber**: `#F59E0B` / `#FF8C00`
- **Deep Charcoal**: `#111827` / `#120907`
- **Soft Cream**: `#FAFAFA` / `#FAF8F5`
- **Emerald Green**: `#10B981`

---

## 3. Typography Stack
- **Display Headings**: `Plus Jakarta Sans` (`font-display font-extrabold tracking-tight`)
- **Body & Interface**: `Inter` (`font-sans font-medium text-stone-900 dark:text-[#FFF8F6]`)
- **Prices & Receipt Data**: `JetBrains Mono` (`font-mono font-black text-[#E53935]`)

---

## 4. Component Hierarchy & Accessibility
- **Cards**: `rounded-3xl border shadow-xs hover:shadow-xl transition-all duration-300`
- **Touch Targets**: Minimum 48px height and width (`.touch-target`).
- **Aspect Ratios**: 4:3 for food review media, 9:16 for short video reels, 16:9 for event banners.
- **Motion**: Subtly animated stats counters, Ken Burns slow zoom (`@keyframes kenburns`), glassmorphic header blur (`backdrop-blur-xl`).
