

## Add Client Testimonial Videos Section

### Placement
After `QualifiedLeadsSection` (the "finals" component), before `Footer`.

### New File
**`src/components/sections/TestimonialVideosSection.tsx`**

A section with:
- Section heading: "What Our Clients Say" with a subtle gradient text effect
- 2x2 grid on desktop, single column on mobile
- Each video in a glass-morphism card with rounded corners, subtle border glow, and shadow
- YouTube embeds using `lite-youtube-embed` style lazy loading (iframe with `loading="lazy"` and `srcdoc` trick for performance)
- Scroll-reveal animation using the existing `useScrollReveal` hook
- Framer Motion stagger animation for cards appearing sequentially

### Video IDs
1. `fF7OOjsOb0A`
2. `luCNAgnGX-s`
3. `H8vAskJQLDc`
4. `YVBpkkKyL5o`

### Each Card Design
- `glass-strong` background with `rounded-2xl overflow-hidden`
- 16:9 aspect ratio wrapper for the iframe
- Purple/blue gradient subtle border on hover
- Smooth scale transform on hover

### Index.tsx Update
Import and place `TestimonialVideosSection` between `QualifiedLeadsSection` and `Footer`.

### Performance
- All iframes use `loading="lazy"` and `srcdoc` with a thumbnail + play button overlay so no YouTube JS loads until user clicks
- This keeps the page fast as requested

