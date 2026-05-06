# Design System Inspired by Google Flow

## 1. Visual Theme & Atmosphere

Flow embodies a minimalist, contemporary digital aesthetic centered on immersive storytelling and creative expression. The design prioritizes visual content through expansive imagery with minimal interface friction, creating an open canvas for user exploration. A dark, near-black backdrop amplifies the vibrancy of featured media while maintaining sophisticated elegance. The interface dissolves into the background, allowing creative narratives to occupy the foreground. Typography is clean and purposeful, using generous whitespace and refined typography to guide attention without distraction. The overall mood is one of anticipation, discovery, and creative possibility—inviting users into a flowing experience where content guides the journey.

**Key Characteristics**
- Immersive, full-screen media presentation
- Minimal interface with maximum content focus
- Dark, sophisticated background palette
- Clean, open typography hierarchy
- Fluid navigation that encourages exploration
- Refined, almost invisible interaction patterns
- Bold, generously-sized display text
- Emphasis on visual storytelling over UI chrome

## 2. Color Palette & Roles

### Primary
- **Flow Blue** (`#007AFF`): Call-to-action elements, interactive highlights, primary accent for engagement

### Neutral Scale
- **Pure White** (`#FFFFFF`): Primary text, interface elements, high-contrast overlays, dominant neutral
- **Pure Black** (`#000000`): Dark backgrounds, navigation bars, dark text contrast
- **Cool Gray** (`#BDC1C6`): Secondary dividers, subtle borders, disabled or tertiary text states

### Surface & Borders
- **Dark Background** (`#000000`): Page and container backgrounds creating immersive canvas
- **Overlay Transparent Black** (`rgba(0, 0, 0, 0.6)`): Semi-transparent surfaces for text readability over media

## 3. Typography Rules

### Font Family
- **Primary Font:** Google Sans
- **Fallback Stack:** Google Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Secondary Font:** Google Sans (unified system)
- **Code Font:** Courier New, monospace

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display/Hero | Google Sans | 54px | 400 | 58px | 0px | Primary page heading, bold storytelling |
| Heading 1 | Google Sans | 21px | 400 | 27px | 0px | Section titles, feature headings |
| Heading 4 | Google Sans | 14px | 400 | 16px | 0px | Tertiary labels, UI text |
| Body/Description | Google Sans | 32px | 500 | normal | 0px | Large descriptive text, taglines |
| Navigation | Google Sans | 21px | 400 | 27px | 0px | Header navigation links |
| Link | Google Sans | 16px | 400 | 27px | 0px | Inline and footer links |
| Caption | Google Sans | 12px | 400 | 16px | 0px | Supporting text, metadata |

### Principles
- **Minimalist approach:** Typography creates hierarchy through size and weight rather than multiple font families
- **Generous spacing:** Line heights and letter spacing allow text to breathe and remain readable over imagery
- **Weight restraint:** Primarily 400 (regular) weight with strategic 500 (medium) for emphasis
- **Contrast driven:** Light typography on dark backgrounds ensures legibility and visual pop
- **Hierarchy through scale:** Dramatic size differences guide visual attention and establish information priority

## 4. Component Stylings

### Buttons

#### Icon Button (Navigation/Social)
- **Background:** `transparent` (rgba(0, 0, 0, 0))
- **Text Color:** `#FFFFFF`
- **Font Size:** `21px`
- **Font Weight:** `400`
- **Font Family:** Google Sans
- **Padding:** `0px`
- **Border Radius:** `50%`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Height:** `40px`
- **Width:** `40px`
- **Line Height:** `27px`
- **Hover State:** Opacity `0.8`, subtle scale `1.1`
- **Active State:** Opacity `1`, scale `1`

#### Full-Width Media Button (Hero)
- **Background:** `transparent` (rgba(0, 0, 0, 0))
- **Text Color:** `#FFFFFF`
- **Font Size:** `21px`
- **Font Weight:** `400`
- **Font Family:** Google Sans
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Height:** `605px`
- **Width:** `1076px`
- **Line Height:** `27px`
- **Cursor:** pointer
- **Hover State:** Overlay opacity increase to `0.1`

#### Primary Call-to-Action Button
- **Background:** `#007AFF`
- **Text Color:** `#FFFFFF`
- **Font Size:** `18px`
- **Font Weight:** `500`
- **Font Family:** Google Sans
- **Padding:** `16px 32px`
- **Border Radius:** `8px`
- **Border:** `0px none`
- **Box Shadow:** `0px 2px 8px rgba(0, 122, 255, 0.3)`
- **Hover State:** Background `#0056CC`, box shadow `0px 4px 12px rgba(0, 122, 255, 0.4)`
- **Active State:** Background `#003FA3`, transform `scale(0.98)`

### Cards & Containers

#### Media Card (Gallery Item)
- **Background:** `transparent`
- **Border Radius:** `16px`
- **Border:** `1px solid rgba(255, 255, 255, 0.1)`
- **Box Shadow:** `none`
- **Overflow:** `hidden`
- **Aspect Ratio:** `varies`
- **Hover State:** Border color `rgba(255, 255, 255, 0.3)`, transform `scale(1.02)`

#### Content Container
- **Background:** `rgba(0, 0, 0, 0.7)`
- **Padding:** `32px 40px`
- **Border Radius:** `0px`
- **Box Shadow:** `inset 0px 1px 0px rgba(255, 255, 255, 0.1)`
- **Text Color:** `#FFFFFF`

#### Overlay Panel
- **Background:** `rgba(0, 0, 0, 0.6)`
- **Backdrop Filter:** `blur(4px)`
- **Padding:** `24px 32px`
- **Border Radius:** `12px`
- **Box Shadow:** `0px 8px 24px rgba(0, 0, 0, 0.4)`

### Inputs & Forms

#### Text Input
- **Background:** `rgba(255, 255, 255, 0.05)`
- **Text Color:** `#FFFFFF`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Google Sans
- **Padding:** `12px 16px`
- **Border Radius:** `8px`
- **Border:** `1px solid rgba(255, 255, 255, 0.2)`
- **Box Shadow:** `inset 0px 1px 2px rgba(0, 0, 0, 0.1)`
- **Line Height:** `24px`
- **Focus State:** Border color `#007AFF`, box shadow `0px 0px 0px 3px rgba(0, 122, 255, 0.2)`

#### Text Input Placeholder
- **Color:** `rgba(255, 255, 255, 0.5)`
- **Font Style:** italic

### Navigation

#### Header Navigation
- **Background:** `#000000`
- **Text Color:** `#FFFFFF`
- **Font Size:** `21px`
- **Font Weight:** `400`
- **Font Family:** Google Sans
- **Padding:** `0px 24px`
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `0px 1px 0px rgba(255, 255, 255, 0.1)`
- **Height:** `72px`
- **Width:** `100%`
- **Line Height:** `27px`
- **Display:** flex
- **Align Items:** center
- **Gap:** `24px`

#### Navigation Links
- **Background:** `transparent`
- **Text Color:** `#FFFFFF`
- **Font Size:** `21px` or `16px` (contextual)
- **Font Weight:** `400`
- **Font Family:** Google Sans
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Line Height:** `27px`
- **Hover State:** Opacity `0.7`, text decoration `underline`
- **Active State:** Color `#007AFF`

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale:**
- `4px`: Tight micro-interactions, icon padding
- `8px`: Component internal gaps, small margins
- `12px`: Form field labels, small section spacing
- `16px`: Standard gap between elements, padding
- `20px`: Section padding, card margins
- `24px`: Container padding, navigation height component
- `28px`: Medium section separation
- `32px`: Large container padding, hero spacing
- `36px`: Feature spacing, major section breaks
- `40px`: Extra-large padding for hero sections
- `44px`: Hero section margins
- `64px`: Full-screen section gaps, maximum breathing room

**Usage Context:**
- Buttons & inputs: `12px–16px` padding
- Cards & containers: `24px–40px` padding
- Sections: `32px–64px` margin/gap
- Navigation: `24px` horizontal padding

### Grid & Container

- **Max Width:** `1440px` (full viewport width for immersive media)
- **Column Strategy:** Flexible grid responsive to viewport; hero content spans full width
- **Container Padding:** `24px` on tablet, `32px–40px` on desktop
- **Section Pattern:** Full-width color/media blocks with internal content containers

### Whitespace Philosophy

Flow prioritizes generosity with whitespace to create breathing room around content. Negative space is intentional and protective of user attention. Media galleries use consistent gaps of `16px–24px` between items. Text blocks are surrounded by ample margin (`32px–40px`) to prevent visual clutter. Section dividers use whitespace rather than borders where possible, emphasizing the organic flow between content areas.

### Border Radius Scale

- `0px`: Navigation bar, full-width hero sections, large container blocks
- `8px`: Buttons, input fields, medium cards, overlay panels
- `12px`: Small badges, secondary cards, divider elements
- `16px`: Media gallery cards, featured containers
- `50%`: Icon buttons, circular avatars, profile indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Floating | `0px 8px 24px rgba(0, 0, 0, 0.4)` | Modal dialogs, floating action overlays, prominent callouts |
| Raised | `0px 4px 12px rgba(0, 122, 255, 0.4)` | Primary CTA buttons, hover state accents |
| Default | `0px 2px 8px rgba(0, 122, 255, 0.3)` | Secondary buttons, card hover states |
| Inset | `inset 0px 1px 2px rgba(0, 0, 0, 0.1)` | Input fields, sunken controls, pressed states |
| Subtle | `none` | Most UI elements, minimal visual hierarchy |

**Shadow Philosophy:**

Flow employs restrained elevation through subtle, carefully-calibrated shadows that enhance depth without creating visual noise. Shadows are used primarily for floating content (modals, overlays) and interactive state feedback (buttons on hover). The system favors transparency and backdrop blur over heavy drop shadows, maintaining the immersive quality of background imagery. Most interface elements use no shadow, allowing the content and typography to carry the visual hierarchy. When shadows are employed, they use low opacity black (`rgba(0, 0, 0, 0.3–0.4)`) with moderate blur radius (`8px–12px`) to feel natural and purposeful rather than decorative.

## 7. Do's and Don'ts

### Do
- **Center immersive media:** Position high-quality imagery and video as the primary visual anchor
- **Use generous margins:** Surround text and interactive elements with ample whitespace (`24px–40px`)
- **Prioritize legibility:** Ensure sufficient contrast between text and backgrounds; use dark overlays (`rgba(0, 0, 0, 0.6)`) over images when necessary
- **Keep navigation minimal:** Limit header elements to essential functions (logo, social links, primary menu)
- **Apply consistent spacing:** Use the modular spacing scale (`4px` base) to maintain visual rhythm
- **Embrace negative space:** Allow content to breathe; avoid cramped layouts
- **Use Google Sans exclusively:** Maintain typographic unity across all interfaces
- **Employ subtle animations:** Smooth transitions on hover (opacity, scale) enhance interactivity without distraction
- **Leverage color sparingly:** Use `#007AFF` for primary actions and key interactive moments only

### Don't
- **Clutter the interface:** Avoid excessive UI elements, badges, or decorative graphics competing with main content
- **Use heavy shadows:** Reject drop shadows larger than `8px` blur radius; keep shadows subtle and purposeful
- **Break the spacing grid:** Apply arbitrary margins or padding; stick to the modular scale
- **Mix fonts:** Never introduce additional typefaces; Google Sans is the system standard
- **Over-saturate colors:** Limit bright accent colors; let `#007AFF` remain the primary visual call-to-action
- **Create rigid layouts:** Avoid fixed-width, pixel-perfect designs; embrace responsive fluidity
- **Use small touch targets:** Ensure buttons and interactive elements are at least `40px × 40px`
- **Layer excessive overlays:** Avoid stacking multiple transparency layers that degrade image quality
- **Forget focus states:** Always provide clear visual feedback for keyboard and pointer focus states
- **Ignore accessibility:** Ensure all text meets WCAG AA contrast ratios (`4.5:1` for body text)

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | `320px–767px` | Full-width sections, stacked layouts, `12px` gaps, `16px` padding, single-column media grids, larger touch targets (`48px`) |
| Tablet | `768px–1023px` | Two-column grids, `20px` padding, `16px–24px` gaps, flexible navigation, condensed hero height |
| Desktop | `1024px–1440px` | Three+ column grids, `32px–40px` padding, `24px–64px` gaps, full-width immersive sections, `40px` buttons |
| Large | `1441px+` | Constrained max-width (`1440px`), centered layouts, generous side margins |

### Touch Targets

- **Minimum Size:** `48px × 48px` for all interactive elements on mobile
- **Desktop:** `40px × 40px` for icon buttons, `44px+` height for links and menu items
- **Spacing:** Maintain `12px` minimum gap between adjacent touch targets to prevent accidental activation

### Collapsing Strategy

- **Header Navigation:** On mobile, hide secondary navigation links; show menu icon (`☰`) that reveals stacked menu overlay
- **Media Grids:** Collapse from 4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- **Text Sizing:** Scale body text from `32px` (desktop) → `24px` (tablet) → `18px` (mobile) to maintain readability
- **Padding & Margins:** Reduce from `40px` (desktop) → `24px` (tablet) → `16px` (mobile)
- **Hero Sections:** Adjust height from `605px` (desktop) → `400px` (tablet) → `280px` (mobile); maintain aspect ratio for media
- **Overlay Panels:** Full-width on mobile (`16px` margin), constrained width on desktop (`max-width: 600px`)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Flow Blue (`#007AFF`) — buttons, active links, highlights
- **Background:** Pure Black (`#000000`) — page canvas, navigation, containers
- **Text/Foreground:** Pure White (`#FFFFFF`) — all body text, icons, primary UI elements
- **Accents & Dividers:** Cool Gray (`#BDC1C6`) — subtle borders, disabled states, tertiary text
- **Overlay/Transparency:** Transparent Black (`rgba(0, 0, 0, 0.6)`) — text backgrounds over media, modal backdrop

### Iteration Guide

1. **Use Google Sans exclusively** — all typography derives from a single family; no serif or alternative fonts
2. **Maintain modular spacing** — apply only `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `36px`, `40px`, `44px`, or `64px` values; no arbitrary margins
3. **Typography hierarchy via size** — Display (`54px`), H1 (`21px`), Body (`32px`), Link (`16px`), Caption (`14px`); weight stays `400` except body at `500`
4. **Dark background always** — every section uses `#000000` or transparent overlay; never use light backgrounds
5. **White text for contrast** — `#FFFFFF` is default text color; ensure `4.5:1` WCAG AA minimum contrast
6. **Icon buttons are circular** — `40px × 40px` with `border-radius: 50%`, `transparent` background, `#FFFFFF` icons
7. **Primary actions use Flow Blue** — `#007AFF` background with `#FFFFFF` text, `8px` border-radius, subtle shadow on hover
8. **Ample padding in containers** — headers and overlays use `24px–40px` padding; never less than `16px`
9. **Cards and galleries have breathing room** — maintain `16px–24px` gaps between grid items; apply `16px` border-radius
10. **Immersive full-width media** — hero sections and featured content span viewport width; internal text is centered with overlay or dark backdrop
11. **Minimal navigation chrome** — header is `72px` height, flat design, no gradients or complex styling; text-only links with hover underline
12. **Animations are subtle** — use opacity and scale (`0.8–1.0` range) on hover; duration `200ms–300ms`; avoid jarring or decorative motion