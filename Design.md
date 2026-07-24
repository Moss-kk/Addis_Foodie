# Addis Foodies — Design System & Attention Engineering Manual

## 1. Core Philosophy: Zero-Friction Attention Loop
Every millisecond of delay or visual noise costs user engagement. The Addis Foodies interface is built on three core psychological pillars:
1. **Dopamine Priming (Visual Heavy):** Food discovery is emotional and visual. High-contrast, appetite-inducing media occupies 65% of screen real estate above the fold.
2. **Cognitive Load Reduction:** No signups, no modal popups, no hidden navigation. The user reaches content in **< 1 second**.
3. **Frictionless Action (The Social Flywheel):** Every review card provides immediate, one-tap paths to external Telegram channels and Instagram posts.

---

## 2. Brand Identity & Assets
* **Logo Asset Path:** `/public/images/logo.png`
* **Logo Style:** Circular dark badge featuring clean white cutlery (fork, knife, spoon) with bold brand typography.
* **Tagline:** *"Discovering Foods in Addis"*

---

## 3. Typography & Font Stack
To ensure instant readability on low-end mobile devices and high-DPI screens alike, we use a hyper-legible, performance-first font stack.

```css
/* Font Definitions */
--font-primary: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;