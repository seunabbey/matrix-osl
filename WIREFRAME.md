# Matrix OSL — one-page site wireframe

## Intent

Help oil-and-gas procurement and HSE decision-makers quickly assess Matrix OSL's
services, local capability, safety commitments and credibility, then make an
enquiry. Keep the factual source of truth to the company profile in the brief.

## Page flow

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ Slim availability/location strip                                         │
├──────────────────────────────────────────────────────────────────────────┤
│ MATRIX | OSL         About  Services  Safety  Contact   [theme] [CTA]   │
├──────────────────────────────────────────────────────────────────────────┤
│ HERO / #top                                          Field operations    │
│ Eyebrow: Independent oilfield services               photo, dark overlay │
│ H1: Built for the field.                             + floating 1,200+  │
│     Trusted in the Delta.                            incident-free days │
│ Intro · [Explore our services] [Talk to our team]                       │
│ ISO 9001 · ISO 45001 · Port Harcourt, Nigeria                            │
├──────────────────────────────────────────────────────────────────────────┤
│ Trust strip: ISO 9001 | ISO 45001 | 1,200+ incident-free field days     │
├──────────────────────────────────────────────────────────────────────────┤
│ ABOUT / #about                                                           │
│ Company story + local context        Supporting field photograph         │
│ Vision · Mission                     Five concise core values            │
├──────────────────────────────────────────────────────────────────────────┤
│ SERVICES / #services                                                     │
│ Section intro                                                           │
│ [Well services] [Pipeline integrity] [HSE & risk]                        │
│ [Equipment & logistics] [Technical staffing]                             │
├──────────────────────────────────────────────────────────────────────────┤
│ SAFETY / #safety — contrasting navy section                              │
│ “Zero Compromise” HSE story + ISO 45001                                  │
│ Daily toolbox talks · Documented PTW · Stop-work authority                │
│ Supporting operational photograph                                        │
├──────────────────────────────────────────────────────────────────────────┤
│ CONTACT / #contact                                                       │
│ Port Harcourt address · verified company email · phone                   │
│ Required name, work email, service interest and message form              │
├──────────────────────────────────────────────────────────────────────────┤
│ Footer: wordmark · anchor navigation · company contact · back to top     │
└──────────────────────────────────────────────────────────────────────────┘
```

## Responsive behaviour

- Desktop: horizontal primary navigation, two-column hero and about/safety/
  contact layouts, three-column services and compact trust strip.
- Tablet: narrower two-column layouts and service cards that reflow without
  clipping; navigation stays available.
- Mobile: compact header with an accessible menu button, stacked sections,
  full-width actions and form fields, one-column service cards, and a floating
  back-to-top control.

## Interaction and accessibility

- Light theme by default; a labelled theme button switches to dark mode and
  remembers the visitor's choice.
- Smooth anchor scrolling, active/visible navigation, scroll-revealed content,
  and a top button shown after scrolling. Honour reduced-motion preferences.
- Semantic landmarks, one page-level heading, keyboard-visible focus, labelled
  controls, meaningful image descriptions, and contrast-aware colour tokens.
- Native required-field and email validation; successful submission displays an
  explicit confirmation. No backend or email delivery is implied.

## Content and visual direction

- Use the supplied navy, steel-blue and safety-amber brand palette with clean
  system typography. Pair decisive, editorial headings with generous spacing,
  technical line details and restrained animation.
- Use responsive, cropped documentary-style oilfield / industrial photography
  as context rather than decoration; keep overlays strong enough for text
  contrast.
- Preserve the supplied facts: five service lines, five core values, ISO 9001
  and ISO 45001, more than 1,200 incident-free field days, Trans-Amadi
  Industrial Layout in Port Harcourt, `info@Matrixosl.example`, and
  `+234 800 000 0000`. No unsupported project counts, client logos, or
  operational claims.
