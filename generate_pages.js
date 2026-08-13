const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');

const pages = [
  { name: 'home-2.html', title: 'Home 2 | Curio', active: 'home-2' },
  { name: 'services.html', title: 'Services | Curio', active: 'services' },
  { name: 'blog.html', title: 'Blog | Curio', active: null },
  { name: 'blog-details.html', title: 'Gift Guide | Curio', active: null },
  { name: 'privacy-policy.html', title: 'Privacy Policy | Curio', active: null },
  { name: 'terms-conditions.html', title: 'Terms & Conditions | Curio', active: null },
  { name: 'sitemap.html', title: 'Sitemap | Curio', active: null },
  { name: '404.html', title: 'Page Not Found | Curio', active: null },
  { name: 'maintenance.html', title: 'Maintenance | Curio', active: null }
];

const navLinks = [
  { href: '../index.html', label: 'Home', key: 'home' },
  { href: 'home-2.html', label: 'Home 2', key: 'home-2' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'services.html', label: 'Services', key: 'services' },
  { href: 'blog.html', label: 'Blog', key: 'blog' },
  { href: 'contact.html', label: 'Contact', key: 'contact' }
];

const navbar = (activeKey) => {
  const links = navLinks.map(l => `                <a href="${l.href}" class="nav-link${l.key === activeKey ? ' active' : ''}">${l.label}</a>`).join('\n');
  return `    <nav class="navbar">
        <div class="nav-container">
            <a href="../index.html" class="logo">
                <img src="../assets/images/logo-mark.svg" alt="Curio" class="logo-icon">
                <div class="logo-text">
                    Curio
                    <span class="logo-tagline">Gifts That Tell Your Story</span>
                </div>
            </a>
            <div class="nav-links">
${links}
            </div>
            <div class="nav-actions">
                <button class="icon-btn" id="theme-toggle" aria-label="Toggle Theme">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </button>
                <button class="icon-btn" id="dir-toggle" aria-label="Toggle RTL">RTL</button>
                <a href="shop.html" class="btn btn-primary" style="text-decoration: none;">Shop Now</a>
                <button class="icon-btn hamburger" id="menu-toggle" aria-label="Menu" aria-expanded="false">
                    <svg class="icon-menu" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg class="icon-x" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
        <div class="mobile-menu" id="mobile-menu">
${links}
        </div>
    </nav>`;
};

const footer = `    <footer class="footer" style="position: relative;">
        <div class="footer-separator"></div>
        <div class="footer-container">
            <div class="grid grid-4" style="align-items: flex-start; gap: 3rem; margin-bottom: 3rem;">
                <div>
                    <a href="../index.html" class="logo" style="color: var(--color-white); margin-bottom: 1rem;">
                        <img src="../assets/images/logo-mark.svg" alt="Curio" class="logo-icon">
                        <div class="logo-text">
                            Curio
                            <span class="logo-tagline">Gifts That Tell Your Story</span>
                        </div>
                    </a>
                    <p class="footer-desc">Curio's most exclusive destination for personalized gifts and fine souvenirs. A curated sanctuary where every piece tells an extraordinary story.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram">ig</a>
                        <a href="#" aria-label="Facebook">fb</a>
                        <a href="#" aria-label="Twitter">tw</a>
                        <a href="#" aria-label="YouTube">yt</a>
                    </div>
                </div>
                <div>
                    <h4>Collections</h4>
                    <ul class="footer-links">
                        <li><a href="shop.html" class="footer-link">Luxury Gifts</a></li>
                        <li><a href="shop.html" class="footer-link">Wedding Sets</a></li>
                        <li><a href="shop.html" class="footer-link">Corporate</a></li>
                        <li><a href="shop.html" class="footer-link">Personalized</a></li>
                        <li><a href="services.html" class="footer-link">Gift Wrapping</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Maison</h4>
                    <ul class="footer-links">
                        <li><a href="../index.html" class="footer-link">Home</a></li>
                        <li><a href="home-2.html" class="footer-link">Home 2</a></li>
                        <li><a href="about.html" class="footer-link">About</a></li>
                        <li><a href="services.html" class="footer-link">Services</a></li>
                        <li><a href="blog.html" class="footer-link">Journal</a></li>
                        <li><a href="contact.html" class="footer-link">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4>The Private List</h4>
                    <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem; color: #a0a0a0;">Receive exclusive previews, private sale invitations, and gifting insights before anyone else.</p>
                    <form class="newsletter-form" onsubmit="event.preventDefault(); this.querySelector('input').value='';">
                        <input type="email" placeholder="Your email" required>
                        <button type="submit" class="btn btn-primary">Join</button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <div>&copy; 2026 Curio. All rights reserved. Established 2010.</div>
                <div class="footer-bottom-links">
                    <a href="privacy-policy.html" style="color: #a0a0a0; text-decoration: none;">Privacy Policy</a>
                    <a href="terms-conditions.html" style="color: #a0a0a0; text-decoration: none;">Terms & Conditions</a>
                    <a href="sitemap.html" style="color: #a0a0a0; text-decoration: none;">Sitemap</a>
                </div>
                <a href="#" class="scroll-top" aria-label="Scroll to top" style="font-size: 1.2rem; font-family: sans-serif; text-decoration: none;">&uarr;</a>
            </div>
        </div>
    </footer>`;

const P = '../assets/images/products/';

const content = {
  'home-2.html': `
    <!-- Section 1: Hero Alternate -->
    <section class="section" style="padding: 100px 0; background: linear-gradient(135deg, var(--bg-secondary), var(--color-white));">
        <div class="container grid grid-2 align-center">
            <div class="reveal fade-left">
                <h6 class="text-accent mb-2">Curio Atelier · Est. 2010</h6>
                <h1 class="mb-3">Gifts Crafted<br>With Heart & Gold</h1>
                <p class="subtitle mb-4">A second home for gifting — explore seasonal drops, corporate collections, and bestsellers loved by thousands. Every order is wrapped by hand, engraved on request, and delivered with a handwritten card.</p>
                <div class="flex gap-sm">
                    <a href="shop.html" class="btn btn-primary">Browse Bestsellers</a>
                    <a href="services.html" class="btn btn-outline">Explore Services</a>
                </div>
            </div>
            <div class="reveal fade-right" style="height: 420px; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-premium);">
                <img src="${P}gift-still.jpg" alt="Curio collection" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        </div>
    </section>

    <!-- Section 2: Corporate Gifts -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">For Business</h6>
                <h2>Corporate Gifts, Perfected</h2>
                <p class="subtitle">From boardroom milestones to festival hampers for your whole team — we handle everything from logo engraving to door-step delivery.</p>
            </div>
            <div class="grid grid-4 mt-4 text-center">
                <div class="card reveal"><div class="card-body"><h3>Tiered Pricing</h3><p class="text-muted text-sm">From 25 units to 10,000+, with dedicated account managers.</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Branded Wrapping</h3><p class="text-muted text-sm">Custom boxes, silk ribbons, and embossed cards in your colours.</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Engraved Logos</h3><p class="text-muted text-sm">Laser-engraved metal, wood and glass in our in-house studio.</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Global Delivery</h3><p class="text-muted text-sm">Individually addressed, tracked and insured to 40+ countries.</p></div></div>
            </div>
            <div class="text-center mt-4 reveal">
                <a href="contact.html" class="btn btn-outline">Request a Corporate Quote</a>
            </div>
        </div>
    </section>

    <!-- Section 3: Seasonal -->
    <section class="section">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Limited Drops</h6>
                <h2>Seasonal Collections</h2>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="card reveal fade-left"><div class="card-img-wrapper" style="height: 220px; overflow: hidden;"><img src="${P}birthday-balloons.jpg" alt="Spring collection" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body text-center"><h3>Spring Blossoms</h3><p class="text-muted text-sm">Pastel florals and botanical keepsakes, available Mar–May.</p></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 220px; overflow: hidden;"><img src="${P}diya-set.jpg" alt="Festival collection" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body text-center"><h3>Festival Season</h3><p class="text-muted text-sm">Diwali lights, gift hampers and festive decor, available Sep–Nov.</p></div></div>
                <div class="card reveal fade-right"><div class="card-img-wrapper" style="height: 220px; overflow: hidden;"><img src="${P}candle-set.jpg" alt="Winter collection" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body text-center"><h3>Winter Wonderland</h3><p class="text-muted text-sm">Velvet, gold and shimmer — holiday luxuries, available Dec–Feb.</p></div></div>
            </div>
        </div>
    </section>

    <!-- Section 4: Bestsellers -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Loved By Thousands</h6>
                <h2>This Season's Bestsellers</h2>
            </div>
            <div class="grid grid-4 mt-4">
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}gift-box-birthday.jpg" alt="Surprise Crate" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body text-center"><h3 class="card-title">Surprise Crate</h3><p class="text-muted text-sm">$65.00 · Birthday</p></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}gift-box-wedding.jpg" alt="Keepsake Gift Box" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body text-center"><h3 class="card-title">Keepsake Gift Box</h3><p class="text-muted text-sm">$120.00 · Wedding</p></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}gold-pen.jpg" alt="Gold Plated Pen Set" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body text-center"><h3 class="card-title">Gold Plated Pen Set</h3><p class="text-muted text-sm">$120.00 · Corporate</p></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}silk-scarf.jpg" alt="Silk Scarf Box" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body text-center"><h3 class="card-title">Silk Scarf Box</h3><p class="text-muted text-sm">$95.00 · Luxury</p></div></div>
            </div>
            <div class="text-center mt-4 reveal">
                <a href="shop.html" class="btn btn-primary">Shop All Products</a>
            </div>
        </div>
    </section>

    <!-- Section 5: Services Banner -->
    <section class="section" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">Make Every Gift Unforgettable</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">Free engraving, signature silk wrapping, and handwritten cards — included with every order from the Curio atelier.</p>
            <div class="flex gap-sm justify-center">
                <a href="services.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Our Services</a>
                <a href="about.html" class="btn btn-outline" style="color: var(--color-white); border-color: rgba(255,255,255,0.6);">Our Story</a>
            </div>
        </div>
    </section>

    <!-- Section 6: Newsletter -->
    <section class="section">
        <div class="container text-center reveal">
            <h6 class="text-accent mb-2">The Private List</h6>
            <h2>Be First To Know</h2>
            <p class="subtitle mb-4" style="max-width: 560px; margin-left: auto; margin-right: auto;">Join 25,000+ gift-givers receiving early access to seasonal drops, private sale invitations, and monthly gifting guides.</p>
            <form class="newsletter-form" style="max-width: 460px; margin: 0 auto;" onsubmit="event.preventDefault(); this.querySelector('input').value='';">
                <input type="email" placeholder="Your email" required>
                <button type="submit" class="btn btn-primary">Join</button>
            </form>
            <p class="text-sm text-muted mt-3">One email a month. Unsubscribe anytime.</p>
        </div>
    </section>`,

  'services.html': `
    <!-- Section 1: Header -->
    <section class="section" style="padding: 100px 0;">
        <div class="container text-center reveal">
            <h6 class="text-accent mb-2">Curio Atelier Services</h6>
            <h1 class="mb-2">Beyond The Gift Itself</h1>
            <p class="subtitle">Every service is performed in-house, by hand, by people who have been doing it for decades.</p>
        </div>
    </section>

    <!-- Section 2: Engraving -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Studio One</h6>
                <h2>Engraving & Personalization</h2>
                <p class="subtitle">Turn a beautiful object into an heirloom with a name, a date, or a message that lasts forever.</p>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="card reveal"><div class="card-body"><h3>Laser Engraving</h3><p class="text-muted text-sm mb-3">Precision-etched messages on metal, wood, glass, leather and acrylic — up to 120 characters.</p><p class="text-accent text-sm">From $12 · 48 hours</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Monogramming</h3><p class="text-muted text-sm mb-3">Hand-embroidered initials on linens, leather goods and keepsakes in eight thread colours.</p><p class="text-accent text-sm">From $15 · 72 hours</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Calligraphy</h3><p class="text-muted text-sm mb-3">Hand-painted gilded initials and messages by our master calligrapher on porcelain and crystal.</p><p class="text-accent text-sm">From $20 · 5 days</p></div></div>
            </div>
        </div>
    </section>

    <!-- Section 3: Gift Wrapping -->
    <section class="section">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Studio Two</h6>
                <h2>Signature Wrapping</h2>
                <p class="subtitle">The first impression is the one they remember — make it unforgettable.</p>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="card reveal"><div class="card-body"><h3>Curio Silk Wrap</h3><p class="text-muted text-sm mb-3">Hand-tied silk ribbons, champagne-gold wax seals and our embossed keepsake box. Free with every order.</p><p class="text-accent text-sm">Complimentary</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Corporate Branding</h3><p class="text-muted text-sm mb-3">Custom-printed boxes, branded ribbons and note cards for bulk programmes of 25 units or more.</p><p class="text-accent text-sm">From $2.50 / unit</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Handwritten Cards</h3><p class="text-muted text-sm mb-3">A calligraphed message on cotton paper, sealed with wax — written in your own words, in our hand.</p><p class="text-accent text-sm">Included</p></div></div>
            </div>
        </div>
    </section>

    <!-- Section 4: Corporate -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">For Business</h6>
                <h2>Corporate Gifting Programmes</h2>
            </div>
            <div class="grid grid-2 mt-4 align-start">
                <div class="card reveal fade-left">
                    <div class="card-body">
                        <h3>What We Manage</h3>
                        <ul class="mt-3">
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Seasonal hampers for teams of 10 to 10,000</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Client appreciation gifts with your logo engraved</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Milestone awards — years of service, retirements, new joins</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Direct-to-recipient delivery, worldwide, with gift notes</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Dedicated account manager and quarterly reporting</li>
                        </ul>
                    </div>
                </div>
                <div class="card reveal fade-right">
                    <div class="card-body">
                        <h3>How It Works</h3>
                        <ul class="mt-3">
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Share your occasion, budget and recipient list</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Receive a curated proposal within 48 hours</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Approve samples, branding and wrapping</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> We produce, engrave, wrap and dispatch</li>
                            <li class="flex align-center gap-sm mb-2"><span class="text-accent">&#10003;</span> Delivery confirmations and photos on request</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4 reveal">
                <a href="contact.html" class="btn btn-primary">Start a Programme</a>
            </div>
        </div>
    </section>

    <!-- Section 5: Delivery -->
    <section class="section">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">From Our Hands To Theirs</h6>
                <h2>Delivery Options</h2>
                <p class="subtitle">Tracked, insured and always beautifully presented — however fast you need it.</p>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="card reveal"><div class="card-body"><h3>Same-Day</h3><p class="text-muted text-sm mb-3">Order before 2pm and it arrives the same evening, city-wide, in our signature wrap.</p><p class="text-accent text-sm">Free over $150</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>Express</h3><p class="text-muted text-sm mb-3">Next-day delivery across the country, with live tracking and a photo of the doorstep moment.</p><p class="text-accent text-sm">From $12</p></div></div>
                <div class="card reveal"><div class="card-body"><h3>International</h3><p class="text-muted text-sm mb-3">Duty-calculated, insured courier to 40+ countries. Gifts arrive with their card, not an invoice.</p><p class="text-accent text-sm">From $25</p></div></div>
            </div>
        </div>
    </section>

    <!-- Section 6: Contact CTA -->
    <section class="section bg-secondary" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">Not Sure Where To Start?</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">Tell us the occasion and your budget — our curators will build the rest, from the object to the final bow.</p>
            <div class="flex gap-sm justify-center">
                <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Talk to a Curator</a>
                <a href="shop.html" class="btn btn-outline" style="color: var(--color-white); border-color: rgba(255,255,255,0.6);">Browse the Shop</a>
            </div>
        </div>
    </section>`,

  'blog.html': `
    <!-- Section 1: Header -->
    <section class="section" style="padding: 100px 0;">
        <div class="container text-center reveal">
            <h6 class="text-accent mb-2">The Curio Journal</h6>
            <h1 class="mb-2">Notes On The Art Of Giving</h1>
            <p class="subtitle">Guides, stories and inspiration from our curators — written for people who give thoughtfully.</p>
        </div>
    </section>

    <!-- Section 2: Featured Post -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container grid grid-2 align-center">
            <div class="reveal fade-left" style="height: 320px; border-radius: var(--radius-lg); overflow: hidden;">
                <img src="${P}gift-box-wedding.jpg" alt="The perfect wedding gift" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="reveal fade-right">
                <span class="badge">Featured</span>
                <h2 class="mb-2 mt-2">The Complete Wedding Gift Guide</h2>
                <p class="text-muted mb-3">From engagement parties to the final thank-you notes — how to choose, personalise and present a wedding gift they will treasure long after the confetti settles.</p>
                <p class="text-sm text-muted mb-3">By Sarah Croft · 8 min read</p>
                <a href="blog-details.html" class="btn btn-primary">Read the Guide</a>
            </div>
        </div>
    </section>

    <!-- Section 3: Categories -->
    <section class="section">
        <div class="container text-center reveal">
            <h2 class="mb-4">Browse By Category</h2>
            <div class="flex gap-sm justify-center" style="flex-wrap: wrap;">
                <a href="blog.html" class="hero-chip">Gifting Guides</a>
                <a href="blog.html" class="hero-chip">Weddings</a>
                <a href="blog.html" class="hero-chip">Corporate</a>
                <a href="blog.html" class="hero-chip">Festivals</a>
                <a href="blog.html" class="hero-chip">Behind The Scenes</a>
                <a href="blog.html" class="hero-chip">Interviews</a>
            </div>
        </div>
    </section>

    <!-- Section 4: Recent Posts Grid -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Fresh From The Atelier</h6>
                <h2>Recent Posts</h2>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}gold-pen.jpg" alt="Corporate gifting etiquette" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Corporate Gifting Etiquette: 10 Rules</h3><p class="text-muted text-sm mb-2">What to give, what to avoid, and how to make it feel personal at scale.</p><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}ceramic-vase.jpg" alt="Artisan spotlight" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Meet The Artisans Behind Our Ceramics</h3><p class="text-muted text-sm mb-2">A visit to the potters' studio where every vase is thrown, glazed and fired by hand.</p><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}candle-trio.jpg" alt="Scented candle guide" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Choosing The Perfect Scented Candle</h3><p class="text-muted text-sm mb-2">Wax, wick and fragrance families — a short guide to gifting scent with confidence.</p><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}diya-set.jpg" alt="Diwali gift guide" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Diwali Gift Hampers: What To Include</h3><p class="text-muted text-sm mb-2">Our curator's favourite combination of light, sweet and keepsake for the festival of lights.</p><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}gift-box-birthday.jpg" alt="Birthday gift guide" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">The Psychology of a Great Birthday Gift</h3><p class="text-muted text-sm mb-2">Why the best gifts are remembered long after they are used — and how to pick one.</p><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${P}silk-scarf.jpg" alt="Silk scarf styling" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Five Ways To Wear A Silk Scarf</h3><p class="text-muted text-sm mb-2">The gift that keeps on giving — styling notes to slip inside the box.</p><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
            </div>
        </div>
    </section>

    <!-- Section 5: Newsletter -->
    <section class="section" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">Get The Journal In Your Inbox</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">A monthly letter from our curators — new guides, seasonal drops and stories from the atelier.</p>
            <form class="newsletter-form" style="max-width: 460px; margin: 0 auto;" onsubmit="event.preventDefault(); this.querySelector('input').value='';">
                <input type="email" placeholder="Your email" required>
                <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Section 6: Instagram Feed -->
    <section class="section">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">@curiogifts</h6>
                <h2>Follow The Atelier</h2>
                <p class="subtitle">Wrapping tutorials, unboxings and behind-the-scenes moments, weekly.</p>
            </div>
            <div class="grid grid-6 mt-4">
                <div class="reveal" style="height: 160px; border-radius: var(--radius-md); overflow: hidden;"><img src="${P}gift-box-birthday.jpg" alt="Instagram post 1" style="width: 100%; height: 100%; object-fit: cover;"></div>
                <div class="reveal" style="height: 160px; border-radius: var(--radius-md); overflow: hidden;"><img src="${P}candle-set.jpg" alt="Instagram post 2" style="width: 100%; height: 100%; object-fit: cover;"></div>
                <div class="reveal" style="height: 160px; border-radius: var(--radius-md); overflow: hidden;"><img src="${P}ceramic-vase.jpg" alt="Instagram post 3" style="width: 100%; height: 100%; object-fit: cover;"></div>
                <div class="reveal" style="height: 160px; border-radius: var(--radius-md); overflow: hidden;"><img src="${P}diya-set.jpg" alt="Instagram post 4" style="width: 100%; height: 100%; object-fit: cover;"></div>
                <div class="reveal" style="height: 160px; border-radius: var(--radius-md); overflow: hidden;"><img src="${P}gold-pen.jpg" alt="Instagram post 5" style="width: 100%; height: 100%; object-fit: cover;"></div>
                <div class="reveal" style="height: 160px; border-radius: var(--radius-md); overflow: hidden;"><img src="${P}silk-scarf.jpg" alt="Instagram post 6" style="width: 100%; height: 100%; object-fit: cover;"></div>
            </div>
        </div>
    </section>`,

  'blog-details.html': `
    <!-- Section 1: Article Header -->
    <section class="section" style="padding: 100px 0 60px;">
        <div class="container text-center reveal">
            <span class="badge">Gifting Guide</span>
            <h1 class="mt-2 mb-2">The Complete Wedding Gift Guide</h1>
            <p class="text-muted text-sm mb-1">By Sarah Croft · Head Curator</p>
            <p class="text-muted text-sm">March 12, 2026 · 8 min read</p>
        </div>
    </section>

    <!-- Section 2: Article Content -->
    <section class="section" style="padding-top: 0;">
        <div class="container" style="max-width: 820px;">
            <div class="reveal" style="height: 380px; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 2.5rem;">
                <img src="${P}gift-box-wedding.jpg" alt="Wedding gift box" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="reveal">
                <p class="mb-3">A wedding gift has a peculiar job: it must honour the couple's new life, reflect your relationship with them, and — if you are lucky — become one of the objects they carry from their first home to their fifth. Over a decade of wrapping thousands of wedding gifts, our curators have learned a few things worth sharing.</p>
                <h3 class="mb-2">Start With Their Story, Not Their Registry</h3>
                <p class="mb-3">Registries are practical; the gifts people remember are personal. Think about how you met the couple — a shared holiday, a mutual obsession, the place they got engaged. A gift that nods to that story will always outlive a toaster, however fine the toaster.</p>
                <h3 class="mb-2">Personalisation Is Not Optional</h3>
                <p class="mb-3">The single most consistent piece of feedback we hear from newlyweds is that the engraved items — the champagne flutes with their date, the keepsake box with both names — are the ones that made them emotional. Laser engraving is fast, affordable, and transforms a lovely object into an heirloom.</p>
                <h3 class="mb-2">What To Give (And What To Avoid)</h3>
                <ul class="mb-3">
                    <li class="mb-2">Engravable keepsakes: boxes, frames, flutes, and carafes — they carry names and dates forever.</li>
                    <li class="mb-2">Experiences framed as objects: a silk scarf with the honeymoon destination printed in calligraphy.</li>
                    <li class="mb-2">Hand-poured candles and home scents — safe, beautiful, and instantly usable.</li>
                    <li class="mb-2">Anything with a monogrammed wrong initial. Double-check the spelling twice, then once more.</li>
                </ul>
                <h3 class="mb-2">Presentation Is Half The Gift</h3>
                <p class="mb-3">We wrap every wedding order in our signature silk with a champagne-gold wax seal, and we write the card in the couple's favourite pen. The unwrapping — the pause, the surprise, the gasp — is where the gift becomes a memory. Never hand over a bag.</p>
                <p class="mb-3">And finally: the thank-you note. A handwritten note after a wedding is vanishingly rare these days, which is exactly why yours will be remembered. We will happily provide the paper and the stamp.</p>
            </div>
        </div>
    </section>

    <!-- Section 3: Author Bio -->
    <section class="section" style="padding-top: 0;">
        <div class="container" style="max-width: 820px;">
            <div class="card reveal">
                <div class="card-body flex gap-md align-center" style="gap: 1.5rem;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent), var(--color-secondary)); flex-shrink: 0;"></div>
                    <div>
                        <h3 class="mb-1">Sarah Croft</h3>
                        <p class="text-accent text-sm mb-2">Head Curator, Curio</p>
                        <p class="text-muted text-sm">Sarah has travelled to forty countries sourcing the artisans whose work fills our shelves. She believes a gift is never finished until it is wrapped, addressed, and sealed.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 4: Share -->
    <section class="section" style="padding-top: 0;">
        <div class="container text-center reveal" style="max-width: 820px;">
            <p class="text-muted mb-3">Share this guide with someone who loves giving</p>
            <div class="flex gap-sm justify-center">
                <a href="#" class="btn btn-outline">Share on X</a>
                <a href="#" class="btn btn-outline">Share on Facebook</a>
                <a href="#" class="btn btn-outline">Share on Pinterest</a>
            </div>
        </div>
    </section>

    <!-- Section 5: Related Posts -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Keep Reading</h6>
                <h2>Related Posts</h2>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="card reveal"><div class="card-img-wrapper" style="height: 180px; overflow: hidden;"><img src="${P}gold-pen.jpg" alt="Corporate gifting etiquette" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Corporate Gifting Etiquette: 10 Rules</h3><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 180px; overflow: hidden;"><img src="${P}candle-trio.jpg" alt="Choosing candles" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Choosing The Perfect Scented Candle</h3><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
                <div class="card reveal"><div class="card-img-wrapper" style="height: 180px; overflow: hidden;"><img src="${P}diya-set.jpg" alt="Diwali hampers" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">Diwali Gift Hampers: What To Include</h3><a href="blog-details.html" class="text-accent text-sm">Read More &rarr;</a></div></div>
            </div>
        </div>
    </section>

    <!-- Section 6: Comments -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <h2 class="text-center mb-4 reveal">Comments</h2>
            <div class="card mb-3 reveal">
                <div class="card-body">
                    <div class="flex gap-sm align-center mb-2">
                        <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--color-peach);"></div>
                        <div><strong>Priya N.</strong><span class="text-muted text-sm"> · 2 days ago</span></div>
                    </div>
                    <p class="text-muted text-sm">The engraved flutes idea won my sister's heart — she cried at the gift opening. Thank you for this guide!</p>
                </div>
            </div>
            <div class="card mb-4 reveal">
                <div class="card-body">
                    <div class="flex gap-sm align-center mb-2">
                        <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--color-accent);"></div>
                        <div><strong>Michael R.</strong><span class="text-muted text-sm"> · 5 days ago</span></div>
                    </div>
                    <p class="text-muted text-sm">"Never hand over a bag" — noted. My Curio boxes have always been the highlight of the wedding table.</p>
                </div>
            </div>
            <div class="card reveal">
                <div class="card-body">
                    <h3 class="mb-3">Leave a Comment</h3>
                    <form>
                        <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-control" placeholder="Your name"></div>
                        <div class="form-group"><label class="form-label">Comment</label><textarea class="form-control" rows="4" placeholder="Share your thoughts..."></textarea></div>
                        <button class="btn btn-primary">Post Comment</button>
                    </form>
                </div>
            </div>
        </div>
    </section>`,

  'privacy-policy.html': `
    <!-- Section 1: Header -->
    <section class="section" style="padding: 100px 0;">
        <div class="container text-center reveal">
            <h6 class="text-accent mb-2">Legal</h6>
            <h1 class="mb-2">Privacy Policy</h1>
            <p class="subtitle">Last updated: January 2026. We protect your data as carefully as we wrap your gifts.</p>
        </div>
    </section>

    <!-- Section 2: Data Collection -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">1. What We Collect</h2>
                <p class="mb-3">When you place an order, join The Private List, or contact our curators, we collect only what we need to serve you: your name, email address, delivery address, order history, and the details of any engraving or personalisation you request. We do not collect payment card numbers — payments are processed by our PCI-compliant payment partners.</p>
                <p>When you browse the site, we use privacy-respecting analytics to understand which collections are most loved. This data is anonymised and never sold.</p>
            </div>
        </div>
    </section>

    <!-- Section 3: Use of Data -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">2. How We Use Your Data</h2>
                <p class="mb-3">Your data is used to fulfil orders, personalise gifts, provide delivery updates, and — only with your consent — send our monthly journal. We may use your order history to recommend gifts you are more likely to love, but you can switch this off at any time.</p>
                <p class="mb-3">We retain order records for seven years to honour warranties and returns, after which they are permanently deleted. Engraving messages are stored only long enough to complete your order, unless you ask us to keep them for reorders.</p>
                <p>We never sell, rent, or trade your personal information. Ever.</p>
            </div>
        </div>
    </section>

    <!-- Section 4: Cookies -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">3. Cookies</h2>
                <p class="mb-3">We use a small number of cookies: essential ones to keep your cart working, and optional ones to remember your theme preference and remember you between visits. You can clear or block cookies in your browser settings without losing access to the site.</p>
                <p>We do not use intrusive advertising trackers, and we do not follow you across other websites.</p>
            </div>
        </div>
    </section>

    <!-- Section 5: Third Parties -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">4. Third Parties</h2>
                <p class="mb-3">The only third parties who ever see your data are the ones required to deliver your gift: our couriers (address details), our payment processors (card transactions), and our engraving studio (the message you ask us to personalise). All are bound by confidentiality agreements.</p>
                <p>We never share your details with marketing agencies, data brokers, or partner retailers.</p>
            </div>
        </div>
    </section>

    <!-- Section 6: Contact Info -->
    <section class="section bg-secondary" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">Questions About Your Data?</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">Email our data protection officer and we will respond within 48 hours — access, correction, or deletion, on request.</p>
            <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Contact Us</a>
        </div>
    </section>`,

  'terms-conditions.html': `
    <!-- Section 1: Header -->
    <section class="section" style="padding: 100px 0;">
        <div class="container text-center reveal">
            <h6 class="text-accent mb-2">Legal</h6>
            <h1 class="mb-2">Terms & Conditions</h1>
            <p class="subtitle">Last updated: January 2026. Please read these terms before placing an order.</p>
        </div>
    </section>

    <!-- Section 2: General -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">1. General</h2>
                <p class="mb-3">By using the Curio website and placing an order, you agree to these terms. All content on the site — photography, descriptions, and branding — is the property of Curio and may not be reproduced without written permission.</p>
                <p>We make every effort to display product colours accurately, but slight variations may occur between screens and the hand-finished originals.</p>
            </div>
        </div>
    </section>

    <!-- Section 3: Purchases -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">2. Orders & Pricing</h2>
                <p class="mb-3">Prices are shown in US dollars and include taxes where applicable. Orders are confirmed by email, and payment is charged at dispatch. Personalised and engraved items are made to order, so we cannot cancel them once production begins — usually within 24 hours of your confirmation.</p>
                <p class="mb-3">Occasionally, a handmade piece may be unavailable despite appearing on the site. If so, we will contact you before charging, and offer a replacement, a wait, or a full refund — your choice.</p>
                <p>Promotional discounts cannot be combined unless stated, and gift cards are valid for 24 months from purchase.</p>
            </div>
        </div>
    </section>

    <!-- Section 4: Returns -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">3. Returns & Exchanges</h2>
                <p class="mb-3">Unwrapped, unengraved items may be returned within 30 days of delivery for a full refund. Items should be returned in their original packaging, and we will cover the return postage for faulty goods.</p>
                <p class="mb-3">Engraved, monogrammed and personalised items are made exclusively for you and are therefore non-returnable, unless they arrive damaged or defective — in which case we will remake or refund immediately.</p>
                <p>Our gift wrapping is free to keep, but we do ask that you open with care: torn keepsake boxes are yours to enjoy.</p>
            </div>
        </div>
    </section>

    <!-- Section 5: Liability -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <div class="reveal">
                <h2 class="mb-3">4. Liability</h2>
                <p class="mb-3">We are responsible for delivering your order in the condition described. Our liability is limited to the value of the goods purchased, except where caused by negligence or fraud. We are not liable for delays caused by customs, carriers, or events beyond our reasonable control.</p>
                <p>Nothing in these terms affects your statutory consumer rights.</p>
            </div>
        </div>
    </section>

    <!-- Section 6: Changes -->
    <section class="section bg-secondary" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">Changes To These Terms</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">We may update these terms occasionally. The latest version always lives on this page, with its date at the top.</p>
            <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Ask A Question</a>
        </div>
    </section>`,

  'sitemap.html': `
    <!-- Section 1: Header -->
    <section class="section" style="padding: 100px 0;">
        <div class="container text-center reveal">
            <h6 class="text-accent mb-2">Navigation</h6>
            <h1 class="mb-2">Sitemap</h1>
            <p class="subtitle">Every page in one place — jump anywhere in the Curio universe.</p>
        </div>
    </section>

    <!-- Section 2: Main Pages -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <h2 class="mb-3 reveal">Main Pages</h2>
            <ul class="reveal">
                <li class="mb-2"><a href="../index.html" class="text-accent">Home</a> — the flagship Curio boutique page</li>
                <li class="mb-2"><a href="home-2.html" class="text-accent">Home 2</a> — alternate hero, seasonal and bestseller view</li>
                <li class="mb-2"><a href="shop.html" class="text-accent">Shop</a> — all products, occasions, engraving and corporate</li>
                <li class="mb-2"><a href="about.html" class="text-accent">About</a> — our story, values and artisans</li>
                <li class="mb-2"><a href="services.html" class="text-accent">Services</a> — engraving, wrapping, corporate and delivery</li>
                <li class="mb-2"><a href="contact.html" class="text-accent">Contact</a> — messages, bulk enquiries and FAQs</li>
            </ul>
        </div>
    </section>

    <!-- Section 3: Categories -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <h2 class="mb-3 reveal">Shop Categories</h2>
            <ul class="reveal">
                <li class="mb-2"><a href="shop.html" class="text-accent">Birthday Gifts</a> — Surprise Crates, candles and balloons</li>
                <li class="mb-2"><a href="shop.html" class="text-accent">Wedding Gifts</a> — Keepsake boxes, frames and vases</li>
                <li class="mb-2"><a href="shop.html" class="text-accent">Festival Gifts</a> — Diya sets, hampers and home scents</li>
                <li class="mb-2"><a href="shop.html" class="text-accent">Corporate Gifts</a> — bulk programmes and branded gifting</li>
                <li class="mb-2"><a href="shop.html" class="text-accent">Seasonal Collections</a> — limited drops, four times a year</li>
            </ul>
        </div>
    </section>

    <!-- Section 4: Legal -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <h2 class="mb-3 reveal">Legal</h2>
            <ul class="reveal">
                <li class="mb-2"><a href="privacy-policy.html" class="text-accent">Privacy Policy</a> — what we collect and how we protect it</li>
                <li class="mb-2"><a href="terms-conditions.html" class="text-accent">Terms & Conditions</a> — orders, returns and liability</li>
            </ul>
        </div>
    </section>

    <!-- Section 5: Blog -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <h2 class="mb-3 reveal">Journal</h2>
            <ul class="reveal">
                <li class="mb-2"><a href="blog.html" class="text-accent">Blog</a> — guides, stories and inspiration</li>
                <li class="mb-2"><a href="blog-details.html" class="text-accent">Featured Guide</a> — The Complete Wedding Gift Guide</li>
            </ul>
        </div>
    </section>

    <!-- Section 6: Contact -->
    <section class="section bg-secondary" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">Lost? We Are Easy To Find</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">hello@curio.com · +1 (555) 123-4567 · 123 Luxury Avenue, New York</p>
            <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Contact Us</a>
        </div>
    </section>`,

  '404.html': `
    <!-- Section 1: 404 Error -->
    <section class="section" style="padding: 100px 0 40px;">
        <div class="container text-center reveal">
            <h1 style="font-size: 7rem; line-height: 1; color: var(--color-accent);">404</h1>
            <h2 class="mb-3">This Page Took The Wrapping Off Too Early</h2>
            <p class="subtitle" style="max-width: 560px; margin-left: auto; margin-right: auto;">The page you are looking for has moved, been renamed, or never existed. Our curators apologise — and would love to point you somewhere wonderful instead.</p>
        </div>
    </section>

    <!-- Section 2: Message -->
    <section class="section" style="padding-top: 0;">
        <div class="container text-center reveal">
            <p class="mb-1">Here are a few of our favourite places to start:</p>
        </div>
    </section>

    <!-- Section 3: Search -->
    <section class="section" style="padding-top: 0;">
        <div class="container reveal" style="max-width: 520px;">
            <form class="flex gap-sm" onsubmit="event.preventDefault();">
                <input type="text" class="form-control" placeholder="Search for a gift...">
                <button class="btn btn-primary">Search</button>
            </form>
        </div>
    </section>

    <!-- Section 4: Home Button -->
    <section class="section" style="padding-top: 0;">
        <div class="container text-center reveal">
            <div class="flex gap-sm justify-center">
                <a href="../index.html" class="btn btn-primary">Back To Home</a>
                <a href="shop.html" class="btn btn-outline">Browse The Shop</a>
            </div>
        </div>
    </section>

    <!-- Section 5: Popular Links -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <h2 class="text-center mb-4 reveal">Popular Destinations</h2>
            <div class="grid grid-3 text-center">
                <div class="reveal"><a href="shop.html" class="text-accent">Birthday Gifts</a></div>
                <div class="reveal"><a href="shop.html" class="text-accent">Wedding Gifts</a></div>
                <div class="reveal"><a href="services.html" class="text-accent">Engraving Studio</a></div>
                <div class="reveal"><a href="contact.html" class="text-accent">Contact Us</a></div>
                <div class="reveal"><a href="blog.html" class="text-accent">The Journal</a></div>
                <div class="reveal"><a href="sitemap.html" class="text-accent">Sitemap</a></div>
            </div>
        </div>
    </section>

    <!-- Section 6: Support -->
    <section class="section" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">Still Can't Find It?</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">A real person answers our concierge line, Monday to Saturday, 9am–6pm.</p>
            <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Talk To Us</a>
        </div>
    </section>`,

  'maintenance.html': `
    <!-- Section 1: Icon -->
    <section class="section" style="padding: 120px 0 20px;">
        <div class="container text-center reveal">
            <div style="width: 90px; height: 90px; margin: 0 auto 1.5rem; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent), var(--color-secondary)); display: flex; align-items: center; justify-content: center;">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
            </div>
            <h1 class="mb-2">The Atelier Is Being Refreshed</h1>
            <p class="subtitle" style="max-width: 560px; margin-left: auto; margin-right: auto;">We are restocking seasonal collections, tuning our engraving studio, and polishing every shelf. The boutique reopens shortly — good things are being wrapped.</p>
        </div>
    </section>

    <!-- Section 2: Message -->
    <section class="section" style="padding-top: 0;">
        <div class="container text-center reveal">
            <p class="text-muted">While you wait, our gift guides and shop are still open — you just cannot reach them from here yet.</p>
        </div>
    </section>

    <!-- Section 3: Countdown -->
    <section class="section" style="padding-top: 0;">
        <div class="container reveal">
            <div class="flex gap-md justify-center text-center">
                <div class="card"><div class="card-body"><h2 class="text-accent mb-0">02</h2><p class="text-sm text-muted mb-0">Days</p></div></div>
                <div class="card"><div class="card-body"><h2 class="text-accent mb-0">14</h2><p class="text-sm text-muted mb-0">Hours</p></div></div>
                <div class="card"><div class="card-body"><h2 class="text-accent mb-0">36</h2><p class="text-sm text-muted mb-0">Minutes</p></div></div>
            </div>
        </div>
    </section>

    <!-- Section 4: Notify Form -->
    <section class="section" style="padding-top: 0;">
        <div class="container reveal" style="max-width: 480px;">
            <form class="flex gap-sm" onsubmit="event.preventDefault(); this.querySelector('input').value='';">
                <input type="email" class="form-control" placeholder="Email me when we reopen" required>
                <button class="btn btn-primary">Notify Me</button>
            </form>
        </div>
    </section>

    <!-- Section 5: Socials -->
    <section class="section" style="padding-top: 0;">
        <div class="container text-center reveal">
            <p class="text-muted mb-3">Or follow the behind-the-scenes on social</p>
            <div class="flex gap-sm justify-center">
                <a href="#" class="btn btn-outline">Instagram</a>
                <a href="#" class="btn btn-outline">Facebook</a>
                <a href="#" class="btn btn-outline">Pinterest</a>
            </div>
        </div>
    </section>

    <!-- Section 6: Contact -->
    <section class="section" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
        <div class="container text-center reveal">
            <h2 style="color: var(--color-white);">In A Hurry?</h2>
            <p class="subtitle mb-4" style="color: rgba(255,255,255,0.85);">Our concierge can still place your order by phone while the site is down.</p>
            <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Contact Concierge</a>
        </div>
    </section>`
};

const template = (title, body, activeKey) => `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon.png">
    <link rel="apple-touch-icon" href="../assets/images/favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/variables.css">
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/typography.css">
    <link rel="stylesheet" href="../assets/css/layout.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="stylesheet" href="../assets/css/animations.css">
</head>
<body>
${navbar(activeKey)}

${body}

${footer}

    <script src="../assets/js/main.js"></script>
</body>
</html>`;

pages.forEach(p => {
    fs.writeFileSync(path.join(pagesDir, p.name), template(p.title, content[p.name], p.active));
    console.log(`Created ${p.name}`);
});
