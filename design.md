---
version: alpha
name: Vodafone
description: Monumental uppercase display. Vodafone-red chapter bands. Works for both Black & White moods.
colors:
  primary: "#0D0D0D"
  secondary: "#6D6D6D"
  tertiary: "#E60000"
  neutral: "#F4F4F4"
  surface: "#FFFFFF"
  on-primary: "#FFFFFF"
typography:
  display:
    fontFamily: Archivo Black
    fontSize: 6rem
    fontWeight: 900
    letterSpacing: "-0.025em"
  h1:
    fontFamily: Archivo Black
    fontSize: 2.8rem
    fontWeight: 900
  body:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.74rem
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: 2px
  md: 4px
  lg: 6px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
---
## Overview

Vodafone: monumental all-caps display, saturated red chapter bands on white or black canvas, uncompromising sans. Built to support both **White Mood** (Light Mode) and **Black Mood** (Dark Mode) seamlessly.

## Colors

The palette is built around high-contrast neutrals and a single accent (`#E60000`) that drives interaction.

### White Mood (Light Mode)
- **Primary (`#0D0D0D`):** Headlines and core text.
- **Secondary (`#6D6D6D`):** Borders, captions, and metadata.
- **Tertiary (`#E60000`):** The sole driver for interaction. Reserve it.
- **Neutral (`#F4F4F4`):** The light page foundation canvas.
- **Surface (`#FFFFFF`):** High-contrast white card surfaces.
- **On-Primary (`#FFFFFF`):** Text on primary CTAs.

### Black Mood (Dark Mode)
- **Primary (`#FFFFFF`):** Headlines and core text.
- **Secondary (`#A3A3A3`):** Subtitles, captions, and metadata.
- **Tertiary (`#E60000`):** The sole driver for interaction. Reserve it.
- **Neutral (`#0D0D0D`):** The dark page foundation canvas.
- **Surface (`#171717`):** High-contrast elevated dark slate card surfaces.
- **On-Primary (`#FFFFFF`):** Text on primary CTAs.

## Typography

- **display:** Archivo Black 6rem (Weight 900, -0.025em letter spacing, uppercase)
- **h1:** Archivo Black 2.8rem (Weight 900, uppercase)
- **body:** Inter 1rem (Line height 1.6)
- **label:** Inter 0.74rem (Weight 700, Letter spacing 0.1em, uppercase)

## Radii & Spacing System

- **rounded-sm:** 2px
- **rounded-md:** 4px
- **rounded-lg:** 6px
- **spacing-sm:** 8px
- **spacing-md:** 16px
- **spacing-lg:** 32px

## Components

- **button-primary:** `bg: #E60000`, `text: #FFFFFF`, `rounded: 4px`, `padding: 12px 20px`
- **card:** `bg: {surface}`, `text: {primary}`, `rounded: 6px`, `padding: 24px`
- **chapter-band:** Solid 4px saturated Vodafone-red (`#E60000`) accent border on display sections.

## Do's and Don'ts

- **Do** use Tertiary (`#E60000`) for exactly one action per screen context.
- **Do** let Neutral carry the composition — negative space is a feature.
- **Do** ensure contrast and crisp presentation across both White Mood and Black Mood.
- **Don't** introduce gradients. This system is flat on purpose.
- **Don't** mix Tertiary with alternate accents; the single-accent rule is load-bearing.