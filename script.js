/* script.js — Lizzan Holidays scroll narrative */
gsap.registerPlugin(ScrollTrigger);

// ─── HELPERS ──────────────────────────────────────────────────────────────
// We NEVER write CSS unit strings like "30vw" as GSAP x/y values.
// Use window.innerWidth / innerHeight instead to convert to pixels.
function vw(n) { return window.innerWidth  * (n / 100); }
function vh(n) { return window.innerHeight * (n / 100); }

// ─── ELEMENTS ─────────────────────────────────────────────────────────────
const map       = document.getElementById('layer-map');
const airplane  = document.getElementById('airplane');
const panels = {
  hero:     document.getElementById('panel-hero'),
  about:    document.getElementById('panel-about'),
  packages: document.getElementById('panel-packages'),
  services: document.getElementById('panel-services'),
  contact:  document.getElementById('panel-contact'),
};

// ─── INITIAL STATES ────────────────────────────────────────────────────────
// Map: starts at scale 1, centered
gsap.set(map, { scale: 1, x: 0, y: 0, transformOrigin: '50% 50%' });

// Airplane: starts bottom-left, pointing right (rotation 0 = right-facing)
// FontAwesome plane-departure icon points to upper-right by default (~-45deg)
gsap.set(airplane, {
  x: vw(-30),
  y: vh(30),
  rotation: 0,
  transformOrigin: '50% 50%'
});

// Panels: all hidden except hero
gsap.set(panels.hero,     { opacity: 1 });
gsap.set(panels.about,    { opacity: 0, y: 30 });
gsap.set(panels.packages, { opacity: 0, y: 30 });
gsap.set(panels.services, { opacity: 0, y: 30 });
gsap.set(panels.contact,  { opacity: 0, y: 30 });

// ─── MAIN SCROLL TIMELINE ──────────────────────────────────────────────────
// scroll-wrapper is 500vh. The sticky hero-canvas pins itself via CSS `position:sticky`.
// We scrub through the full document height.

const totalScrollHeight = document.getElementById('scroll-wrapper').offsetHeight - window.innerHeight;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger:  '#scroll-wrapper',
    start:    'top top',
    end:      'bottom bottom',
    scrub:    1.2,
  }
});

/*
  The timeline has 5 segments, each ~1 unit long (= 1/5 of scroll travel):
    0.0 – 1.0  →  Hero visible (initial state, no anim needed)
    1.0 – 2.0  →  Hero → About
    2.0 – 3.0  →  About → Packages
    3.0 – 4.0  →  Packages → Services
    4.0 – 5.0  →  Services → Contact (zoom to Kerala)
*/

// ── Segment 1: Hero → About ──────────────────────────────────────────────
tl
  // Fade hero out
  .to(panels.hero, { opacity: 0, y: -30, duration: 0.4, ease: 'power2.in' }, 0.8)
  // Map: gentle zoom left (Europe/Middle East area)
  .to(map, { scale: 1.25, x: vw(-5), y: vh(5), duration: 1, ease: 'power2.inOut' }, 0.8)
  // Airplane flies from bottom-left to center-left
  .to(airplane, { x: vw(-18), y: vh(-5), rotation: -30, duration: 1, ease: 'power2.inOut' }, 0.8)
  // About panel in
  .to(panels.about, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 1.6);

// ── Segment 2: About → Packages ─────────────────────────────────────────
tl
  // About out
  .to(panels.about, { opacity: 0, y: -20, duration: 0.4 }, 2.0)
  // Map: zoom into Western Europe / Atlantic area (International routes)
  .to(map, { scale: 1.55, x: vw(-8), y: vh(8), duration: 1, ease: 'power2.inOut' }, 2.0)
  // Airplane cruises to upper-right (international destinations)
  .to(airplane, { x: vw(10), y: vh(-15), rotation: -50, duration: 1, ease: 'power2.inOut' }, 2.0)
  // Packages in (right side)
  .to(panels.packages, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 2.8);

// ── Segment 3: Packages → Services ──────────────────────────────────────
tl
  // Packages out
  .to(panels.packages, { opacity: 0, y: -20, duration: 0.4 }, 3.0)
  // Map: pan to show Asia / India region
  .to(map, { scale: 1.75, x: vw(6), y: vh(-4), duration: 1, ease: 'power2.inOut' }, 3.0)
  // Airplane moves toward India area
  .to(airplane, { x: vw(5), y: vh(5), rotation: -20, duration: 1, ease: 'power2.inOut' }, 3.0)
  // Services in (left side)
  .to(panels.services, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 3.8);

// ── Segment 4: Services → Contact (Zoom to Kerala) ───────────────────────
tl
  // Services out
  .to(panels.services, { opacity: 0, y: -20, duration: 0.4 }, 4.0)
  // Map: dramatic zoom into South India / Kerala
  // Kerala is roughly at 8°N 77°E — on a 130vw map, we need to shift right & up
  .to(map, { scale: 2.6, x: vw(12), y: vh(-22), duration: 1.2, ease: 'power3.inOut' }, 4.0)
  // Airplane descends & "lands" at Kerala — arrives center-bottom, rotated to descend
  .to(airplane, { x: vw(8), y: vh(20), rotation: 20, scale: 0.75, duration: 1.2, ease: 'power3.inOut' }, 4.0)
  // Contact panel in
  .to(panels.contact, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 4.8);

// Enable pointer events on contact when visible
ScrollTrigger.create({
  trigger:  '#scroll-wrapper',
  start:    '80% top',
  onEnter:  () => panels.contact.style.pointerEvents = 'auto',
  onLeaveBack: () => panels.contact.style.pointerEvents = 'none',
});

// ─── NAVBAR: shrink on scroll ─────────────────────────────────────────────
ScrollTrigger.create({
  start: 'top -60px',
  onUpdate(self) {
    const nav = document.getElementById('navbar');
    if (self.progress > 0) {
      nav.style.padding = '8px 40px';
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
    } else {
      nav.style.padding = '14px 40px';
      nav.style.boxShadow = 'none';
    }
  }
});
