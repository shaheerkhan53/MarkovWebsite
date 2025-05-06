# Markov International Color Style Guide

## Brand Colors

| Color Name | Hex Code | HSL Value | Usage |
|------------|----------|-----------|-------|
| Primary (Teal) | `#2DD8D4` | `176 75% 51%` | Main brand color, primary buttons, active states, links |
| Secondary (Yellow) | `#FFB800` | `41 100% 50%` | Accents, secondary buttons, highlights, calls to action |
| Accent (Dark) | `#1A1A1A` | `0 0% 10%` | Text, icons, dark surfaces |

## Extended Palette

### Teal Variations
| Shade | Hex Code | Usage |
|-------|----------|-------|
| Teal 50 | `#f0fdfa` | Subtle backgrounds, hover states |
| Teal 100 | `#ccfbf1` | Light backgrounds, borders |
| Teal 200 | `#99f6e4` | Light accents |
| Teal 300 | `#5eead4` | Medium accents |
| Teal 400 | `#2dd4bf` | Medium emphasis |
| Teal 500 | `#14b8a6` | Primary buttons (alternative) |
| Teal 600 | `#0d9488` | Primary buttons (pressed) |
| Teal 700 | `#0f766e` | Strong emphasis |
| Teal 800 | `#115e59` | Very strong emphasis |
| Teal 900 | `#134e4a` | Extra strong emphasis |

### Yellow/Orange Variations
| Shade | Hex Code | Usage |
|-------|----------|-------|
| Orange 50 | `#fff7ed` | Subtle backgrounds, hover states |
| Orange 100 | `#ffedd5` | Light backgrounds, borders |
| Orange 200 | `#fed7aa` | Light accents |
| Orange 300 | `#fdba74` | Medium accents |
| Orange 400 | `#fb923c` | Medium emphasis |
| Orange 500 | `#f97316` | Secondary buttons (alternative) |
| Orange 600 | `#ea580c` | Secondary buttons (pressed) |
| Orange 700 | `#c2410c` | Strong emphasis |
| Orange 800 | `#9a3412` | Very strong emphasis |
| Orange 900 | `#7c2d12` | Extra strong emphasis |

## Neutral Colors
| Color Name | Hex Code | HSL Value | Usage |
|------------|----------|-----------|-------|
| Background (Light) | `#FFFFFF` | `0 0% 100%` | Page backgrounds (light mode) |
| Background (Dark) | `#1A1A1A` | `0 0% 10%` | Page backgrounds (dark mode) |
| Foreground (Light) | `#1A1A1A` | `0 0% 10%` | Text (light mode) |
| Foreground (Dark) | `#F7F7F7` | `0 0% 98%` | Text (dark mode) |
| Muted (Light) | N/A | `176 10% 95%` | Subtle backgrounds, disabled states (light mode) |
| Muted (Dark) | N/A | `0 0% 15%` | Subtle backgrounds, disabled states (dark mode) |
| Muted Foreground (Light) | N/A | `0 0% 45%` | Subtle text, placeholders (light mode) |
| Muted Foreground (Dark) | N/A | `0 0% 65%` | Subtle text, placeholders (dark mode) |
| Border (Light) | N/A | `176 10% 90%` | Borders, dividers (light mode) |
| Border (Dark) | N/A | `0 0% 20%` | Borders, dividers (dark mode) |

## Gradient Usage

### Brand Gradient
`linear-gradient(to right, #2DD8D4, #FFB800)`
- Hero sections
- CTA buttons
- Text accents
- Section dividers

### Brand Dark Gradient
`linear-gradient(to right, #1A1A1A, #2DD8D4)`
- Dark mode sections
- Alternative CTAs
- Footer backgrounds

## Accessibility Guidelines

- Ensure text has a minimum contrast ratio of 4.5:1 against its background (WCAG AA)
- Use lighter teal shades (50-300) with dark text, darker teal shades (600-900) with light text
- Primary yellow (#FFB800) should only be used with dark text (#1A1A1A)
- Avoid using gradients behind important text unless contrast is sufficient

## Implementation Notes

- Use CSS custom properties (variables) for all colors
- Implement colors through Tailwind classes using the configuration
- Hard-coded hex values should be avoided in favor of semantic color names 