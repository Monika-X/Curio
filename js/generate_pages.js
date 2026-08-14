const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'pages');

const pages = [
  { name: 'home-2.html', title: 'Home 2 | Curio', active: 'home-2' },
  { name: 'services.html', title: 'Services | Curio', active: 'services' },
  { name: 'blog.html', title: 'Blog | Curio', active: 'blog' },
  { name: 'blog-details.html', title: 'Gift Guide | Curio', active: 'blog' },
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
                <a href="contact.html" class="btn btn-primary" style="text-decoration: none;">Book Now</a>
                <button class="icon-btn hamburger" id="menu-toggle" aria-label="Menu" aria-expanded="false">
                    <svg class="icon-menu" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg class="icon-x" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
        <div class="mobile-menu" id="mobile-menu">
${links}
            <a href="contact.html" class="btn btn-primary mobile-book">Book Now</a>
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
                        <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                        <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                    </div>
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
                    <h4>Visit The Atelier</h4>
                    <ul class="footer-links">
                        <li style="display: flex; gap: 0.6rem; align-items: flex-start;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <a href="https://maps.google.com/?q=12+Rosewood+Lane,+Chennai+600+001" target="_blank" rel="noopener" style="color: #a0a0a0; text-decoration: none;">12 Rosewood Lane, Chennai 600 001</a>
                        </li>
                        <li style="display: flex; gap: 0.6rem; align-items: flex-start;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <span style="color: #a0a0a0;">Mon – Sat, 10am – 8pm</span>
                        </li>
                        <li><a href="tel:+919876543210" class="footer-link" style="display: flex; gap: 0.6rem; align-items: center;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>+91 98765 43210</a></li>
                        <li><a href="mailto:hello@curio.gifts" class="footer-link" style="display: flex; gap: 0.6rem; align-items: center;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>hello@curio.gifts</a></li>
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

const posts = [
  {
    slug: 'blog-details.html', category: 'Gifting Guide', title: 'The Complete Wedding Gift Guide',
    author: 'Sarah Croft', role: 'Head Curator, Curio',
    bio: "Sarah has travelled to forty countries sourcing the artisans whose work fills our shelves. She believes a gift is never finished until it is wrapped, addressed, and sealed.",
    date: 'March 12, 2026', read: '8 min read',
    image: 'https://i.pinimg.com/736x/e6/30/f3/e630f3a32b324773812e8c3d3721739d.jpg', alt: 'Wedding gift box',
    intro: "A wedding gift has a peculiar job: it must honour the couple's new life, reflect your relationship with them, and — if you are lucky — become one of the objects they carry from their first home to their fifth. Over a decade of wrapping thousands of wedding gifts, our curators have learned a few things worth sharing.",
    sections: [
      { h: 'Start With Their Story, Not Their Registry', p: "Registries are practical; the gifts people remember are personal. Think about how you met the couple — a shared holiday, a mutual obsession, the place they got engaged. A gift that nods to that story will always outlive a toaster, however fine the toaster." },
      { h: 'Personalisation Is Not Optional', p: "The single most consistent piece of feedback we hear from newlyweds is that the engraved items — the champagne flutes with their date, the keepsake box with both names — are the ones that made them emotional. Laser engraving is fast, affordable, and transforms a lovely object into an heirloom." },
      { h: 'What To Give (And What To Avoid)', list: ['Engravable keepsakes: boxes, frames, flutes, and carafes — they carry names and dates forever.', "Experiences framed as objects: a silk scarf with the honeymoon destination printed in calligraphy.", 'Hand-poured candles and home scents — safe, beautiful, and instantly usable.', "Anything with a monogrammed wrong initial. Double-check the spelling twice, then once more."] },
      { h: 'Presentation Is Half The Gift', p: "We wrap every wedding order in our signature silk with a champagne-gold wax seal, and we write the card in the couple's favourite pen. The unwrapping — the pause, the surprise, the gasp — is where the gift becomes a memory. Never hand over a bag." },
      { h: 'And Finally: The Thank-You Note', p: "A handwritten note after a wedding is vanishingly rare these days, which is exactly why yours will be remembered. We will happily provide the paper and the stamp." }
    ],
    comments: [
      { name: 'Priya N.', time: '2 days ago', text: "The engraved flutes idea won my sister's heart — she cried at the gift opening. Thank you for this guide!", dot: 'var(--color-peach)' },
      { name: 'Michael R.', time: '5 days ago', text: '"Never hand over a bag" — noted. My Curio boxes have always been the highlight of the wedding table.', dot: 'var(--color-accent)' }
    ]
  },
  {
    slug: 'blog-corporate-etiquette.html', category: 'Corporate', title: 'Corporate Gifting Etiquette: 10 Rules',
    author: 'Marcus Lin', role: 'Corporate Gifting Lead, Curio',
    bio: 'Marcus spent a decade running gifting programmes for Fortune 500 brands before joining Curio. He believes a corporate gift should feel like a choice, never an obligation.',
    date: 'March 5, 2026', read: '6 min read',
    image: 'https://i.pinimg.com/736x/b9/4a/a7/b94aa77419c8cf859bebfa101c7e1426.jpg', alt: 'Corporate gifting etiquette',
    intro: "Corporate gifts occupy a strange middle ground: too lavish looks like a bribe, too generic reads as an afterthought. After running gifting programmes for a decade, here are the ten rules we never break.",
    sections: [
      { h: '1. Reciprocity Is A Myth — Give First', p: "A gift sent because the client sent one is a transaction, not a gesture. The best relationships we have seen started with a gift that arrived with no expectation attached." },
      { h: '2. Brand It Lightly', p: "One discreet mark is elegant; five logos are advertising. If the recipient must hunt for your branding, you have done it right." },
      { h: '3. Know The Person, Not The Database', p: "Their espresso machine, their garden, their new puppy — one personal detail beats a luxury hamper assembled from a spreadsheet." },
      { h: '4. Wrap It Properly', p: "A crumpled courier box undoes every good intention. Presentation is the difference between an invoice and a memory." },
      { h: '5. The Golden Rules: Timing, Taste, Thank-You', list: ['Send within two weeks of the occasion — never months late.', 'Keep it appropriate to the relationship; a new client gets a gesture, not a bequest.', 'Always include a handwritten note and expect nothing in return.'] }
    ],
    comments: [
      { name: 'Anita K.', time: '1 day ago', text: 'Rule 2 changed our whole approach — clients actually mention how subtle the branding is now.', dot: 'var(--color-peach)' }
    ]
  },
  {
    slug: 'blog-artisans-ceramics.html', category: 'Behind The Scenes', title: 'Meet The Artisans Behind Our Ceramics',
    author: 'Elena Rose', role: 'Artisan Liaison, Curio',
    bio: 'Elena spends half her year in workshops across three continents, chasing potters, weavers and candle makers whose hands deserve a global audience.',
    date: 'February 27, 2026', read: '5 min read',
    image: 'https://i.pinimg.com/736x/57/20/6c/57206cd17a0af6cecb8032e05b2bede1.jpg', alt: 'Artisan spotlight',
    intro: "Every vase on our shelves began as a lump of clay on a kick wheel in a courtyard studio. This is the story of the hands behind our ceramic collection.",
    sections: [
      { h: 'The Wheel Is Older Than The Wheel', p: "Our primary potter, Meera, works a wheel her grandfather built in 1962. She throws forty vases a day and rejects half of them — the kiln is a cruel but honest editor." },
      { h: 'Glaze Recipes Are Family Secrets', p: "The copper-green drip on our signature vases comes from a recipe guarded by three generations. We do not ask for it; we are simply trusted with the results." },
      { h: 'Why Perfection Is The Enemy', p: "Each piece carries a tiny fingerprint of its maker — a wobble, a thumbprint, a blush of uneven glaze. Those are the marks we want in your hands, not the machine-stamped sameness of mass production." },
      { h: 'How We Choose What Ships To Curio', list: ['Strength: a vase that cannot survive a wedding hall is not a vase.', 'Light: the piece should feel thinner than it looks.', 'The wobble test: a slight imperfection, honestly made, always passes.'] }
    ],
    comments: [
      { name: 'Ravi S.', time: '4 days ago', text: 'My ceramic vase has a thumbprint on the rim — I love that it has a maker.', dot: 'var(--color-accent)' }
    ]
  },
  {
    slug: 'blog-scented-candle.html', category: 'Gifting Guides', title: 'Choosing The Perfect Scented Candle',
    author: 'Elena Rose', role: 'Artisan Liaison, Curio',
    bio: 'Elena spends half her year in workshops across three continents, chasing potters, weavers and candle makers whose hands deserve a global audience.',
    date: 'February 19, 2026', read: '5 min read',
    image: 'https://i.pinimg.com/736x/16/7b/3f/167b3f8866c05b16c2634f5c85ef5347.jpg', alt: 'Scented candle guide',
    intro: "A candle is the rare gift that is opened twice: once at the unwrapping and again on the first match. Here is how to choose one that gets both moments right.",
    sections: [
      { h: 'Wax Matters More Than Fragrance', p: "Look for soy, coconut or beeswax blends. Paraffin burns hotter and faster, and it dulls the scent throw. A clean burn is what makes a candle feel expensive." },
      { h: 'Know Your Fragrance Families', p: "Citrus lifts a kitchen; amber and oud warm a bedroom; green fig and tea soften a study. Match the scent to the room you imagine the recipient living in, not the one you live in." },
      { h: 'The Wick And The First Burn', p: "Trim the wick to a quarter inch and let the first burn reach the edges — that is the secret to an even pool and a candle that actually lasts its promised hours." },
      { h: 'A Quick Buying Checklist', list: ['Single or double wick for the vessel size — never guess.', 'A lead-free, cotton wick, always.', 'A vessel worth keeping: the jar is the second gift.', 'A scent story on the label — people gift the story, not the smell.'] }
    ],
    comments: [
      { name: 'Divya M.', time: '6 days ago', text: 'The first-burn tip was gold. My candles burn even now and last twice as long.', dot: 'var(--color-peach)' }
    ]
  },
  {
    slug: 'blog-diwali-hampers.html', category: 'Festivals', title: 'Diwali Gift Hampers: What To Include',
    author: 'Sarah Croft', role: 'Head Curator, Curio',
    bio: "Sarah has travelled to forty countries sourcing the artisans whose work fills our shelves. She believes a gift is never finished until it is wrapped, addressed, and sealed.",
    date: 'February 12, 2026', read: '6 min read',
    image: 'https://i.pinimg.com/736x/52/cb/83/52cb837ddff7494e78afd9070c5740ab.jpg', alt: 'Diwali gift guide',
    intro: "The best Diwali hamper is a small festival in a box: light for the darkness, sweetness for the table, and something that will outlast both. This is our curator's formula.",
    sections: [
      { h: 'Start With Light', p: "A hand-poured diya set or a brass candle holder anchors the hamper. It is the object that moves from the box to the windowsill on the first evening of the festival." },
      { h: 'Sweetness, Done Thoughtfully', p: "Skip the commercial mithai tins. A small jar of artisanal honey, date-nut bars or homemade-style sweets wrapped in muslin feels personal and travels beautifully." },
      { h: 'A Keepsake That Lasts', p: "Every great hamper ends with something permanent: an engraved brass bell, a ceramic rangoli tile, a silk scarf. The light fades and the sweets vanish — the keepsake stays on the shelf for the next Diwali." },
      { h: 'The Curio Formula', list: ['One source of light: diya, candle or lantern.', 'One sweet: jarred, wrapped or baked.', 'One keepsake: engraved, woven or ceramic.', 'One note: handwritten, never printed.'] }
    ],
    comments: [
      { name: 'Kavya R.', time: '1 week ago', text: 'Sent the formula hamper to my in-laws — the brass bell is still on their altar.', dot: 'var(--color-accent)' }
    ]
  },
  {
    slug: 'blog-birthday-psychology.html', category: 'Gifting Guides', title: 'The Psychology of a Great Birthday Gift',
    author: 'Sarah Croft', role: 'Head Curator, Curio',
    bio: "Sarah has travelled to forty countries sourcing the artisans whose work fills our shelves. She believes a gift is never finished until it is wrapped, addressed, and sealed.",
    date: 'February 4, 2026', read: '5 min read',
    image: 'https://i.pinimg.com/1200x/7a/1c/d7/7a1cd7dd22d20c3a73d62b27e767a6de.jpg', alt: 'Birthday gift guide',
    intro: "Why do some birthday gifts get re-gifted within a year while others sit on shelves for decades? The answer has less to do with price and more to do with how the gift makes the recipient feel about themselves.",
    sections: [
      { h: 'Gifts Are Mirrors, Not Objects', p: "A great gift says something true about the person receiving it — their humour, their ambition, their nostalgia. The object is just the frame for that statement." },
      { h: 'The Surprise Coefficient', p: "Gifts that are practical are forgotten; gifts that are unexpected are remembered. The best birthdays produce a gift that makes the recipient say 'how did you know?'" },
      { h: 'Nostalgia Is The Cheapest Luxury', p: "An item that connects to a shared memory — the band they loved at nineteen, the city where you met — outperforms anything twice its price." },
      { h: 'Three Tests Before You Buy', list: ['Would they buy this for themselves? If yes, buy something else.', 'Does it mention a shared memory? If no, add one to the note.', 'Will it look good on their shelf in five years? If no, reconsider.'] }
    ],
    comments: [
      { name: 'Harish T.', time: '2 weeks ago', text: 'The mirror test is spot on. My best gifts were all ones I would never have bought myself.', dot: 'var(--color-peach)' }
    ]
  },
  {
    slug: 'blog-silk-scarf.html', category: 'Gifting Guides', title: 'Five Ways To Wear A Silk Scarf',
    author: 'Elena Rose', role: 'Artisan Liaison, Curio',
    bio: 'Elena spends half her year in workshops across three continents, chasing potters, weavers and candle makers whose hands deserve a global audience.',
    date: 'January 28, 2026', read: '4 min read',
    image: 'https://i.pinimg.com/736x/b1/3b/1e/b13b1e25d4c387a5af47238e92adcca1.jpg', alt: 'Silk scarf styling',
    intro: "A silk scarf is the gift that keeps giving — but only if the recipient knows what to do with it. Slip these five styling notes inside the box.",
    sections: [
      { h: 'The Parisian Knot', p: "Fold the scarf into a triangle, roll it, and knot it loosely at the throat. It upgrades a plain shirt in ten seconds and needs no mirror." },
      { h: 'The Bag Handle', p: "Tie it around a handbag handle in a double knot. It is the cheapest luxury accessory trick there is, and it protects the leather too." },
      { h: 'The Hair Tie', p: "Roll it thin and use it as a scrunchie for a low ponytail. Silk slides through hair without the crease of an elastic." },
      { h: 'The Belt', p: "Thread it through belt loops and let the ends trail. Instant waistline, zero tailoring." },
      { h: 'The Wrist Wrap', p: "Two loops around the wrist with the tails tucked — a bracelet that matches every outfit and starts a conversation." }
    ],
    comments: [
      { name: 'Nisha V.', time: '3 weeks ago', text: 'The bag handle trick gets compliments every single time. Genius.', dot: 'var(--color-accent)' }
    ]
  },
  {
    slug: 'blog-anniversary-cheat-sheet.html', category: 'Romance', title: 'The Ultimate Anniversary Gift Cheat Sheet',
    author: 'Sarah Croft', role: 'Head Curator, Curio',
    bio: "Sarah has travelled to forty countries sourcing the artisans whose work fills our shelves. She believes a gift is never finished until it is wrapped, addressed, and sealed.",
    date: 'January 20, 2026', read: '6 min read',
    image: 'https://i.pinimg.com/736x/51/eb/28/51eb289cdabc0144ba1799b2b9d1d8cf.jpg', alt: 'Anniversary gift guide',
    intro: "From the paper anniversary to the platinum, every milestone has a material tradition — and a way to honour it without bankrupting the marriage. This is our cheat sheet.",
    sections: [
      { h: 'The Traditional Materials, Modernised', p: "Paper, cotton, leather, wood, silver, gold — the classic list. The trick is the nod, not the obedience: a leather-bound photo album honours leather year one hundred times better than a belt." },
      { h: 'The Engraving Rule', p: "The date, the place, or the joke. Engrave one of the three and the gift becomes the story of the marriage rather than just an object in it." },
      { h: 'What The Cheat Sheet Actually Says', list: ['1st (Paper): a handwritten letter in a keepsake box.', '5th (Wood): a carved keepsake with both names.', '10th (Tin/Aluminium): a personalised flask or frame.', '25th (Silver): engraved silver flutes or a jewellery dish.', '50th (Gold): a gold-plated keepsake — and the party.'] },
      { h: 'The Rule That Matters More', p: "The material is the frame; the note inside is the gift. Twenty minutes with a pen beats a month with a search engine, every single year." }
    ],
    comments: [
      { name: 'Meera & Karthik', time: '3 weeks ago', text: 'Used the 5th-year wood idea for our anniversary — the frame is the centrepiece of our home now.', dot: 'var(--color-peach)' }
    ]
  },
  {
    slug: 'blog-digital-etiquette.html', category: 'Gifting Guides', title: 'Gifting Etiquette In The Digital Age',
    author: 'James Doe', role: 'Studio & Digital Lead, Curio',
    bio: 'James runs the atelier floor where every Curio order is wrapped, sealed and shipped. He has strong opinions about shipping notes and stronger ones about gift cards.',
    date: 'January 12, 2026', read: '5 min read',
    image: 'https://i.pinimg.com/736x/c6/d9/ea/c6d9ea274cb130c52ed82396c411f110.jpg', alt: 'Digital gifting etiquette',
    intro: "The gift card killed the handwritten note, and the two-day shipping changed what we expect from a gift. But the digital age has quietly added its own etiquette — and most of us are breaking it.",
    sections: [
      { h: 'The Deliver-To-Door Rule', p: "If you can get the address, ship to the home — never the office, unless they work from home. An unboxing in the kitchen beats an awkward courier handoff in a lobby." },
      { h: 'The Unboxing Is The Ceremony', p: "Receiving is a moment now recorded, photographed and sometimes filmed. Wrap accordingly: the box, the ribbon and the note are all visible on camera." },
      { h: 'The Gift Card Exception', p: "Gift cards are acceptable only in one case: paired with something physical that shows you thought about them. A card alone is a transaction; a card with a book, a candle and a note is a gift." },
      { h: 'Digital Manners, Briefly', list: ['Acknowledge within 24 hours — even a "it arrived, I am saving it" works.', 'Never post the gift before the giver has seen the photo.', 'If you regift, remove the card. There is no deeper digital sin.', 'Track the package. There is no excuse for a 3 a.m. "did it arrive?" text.'] }
    ],
    comments: [
      { name: 'Farhan A.', time: '1 month ago', text: 'The camera-ready wrapping point is so true — my sister filmed her unboxing and the ribbon looked awful.', dot: 'var(--color-accent)' }
    ]
  },
  {
    slug: 'blog-bridal-shower.html', category: 'Weddings', title: 'Bridal Shower Essentials',
    author: 'Sarah Croft', role: 'Head Curator, Curio',
    bio: "Sarah has travelled to forty countries sourcing the artisans whose work fills our shelves. She believes a gift is never finished until it is wrapped, addressed, and sealed.",
    date: 'January 6, 2026', read: '5 min read',
    image: 'https://i.pinimg.com/736x/a5/1a/73/a51a7361b4cdef20d2ee34af744f968c.jpg', alt: 'Bridal shower essentials',
    intro: "The bridal shower is where practicality meets romance: everything she will actually use, wrapped in everything she has always wanted. Here is what brides tell us they love to open.",
    sections: [
      { h: 'The Keepsake Box', p: "A personalised keepsake box — engraved with her initials or the wedding date — is the sleeper hit of every shower. It holds the cards, the confetti and the first year of receipts." },
      { h: 'Something For The Honeymoon', p: "A silk scarf for the flight, a leather travel journal for the trip, a linen set for the villa. Honeymoon gifts are loved twice: at the shower and in the packing." },
      { h: 'The Hosting Trio', p: "Every bride is building a hosting identity. Candles for the first dinner party, a carafe set for the first guests, a serving tray for the first Sunday. Practical never looked so romantic." },
      { h: 'What To Skip', list: ['Another vase — she has eleven and has counted.', 'Anything that requires assembly.', 'Monogrammed items with guessed initials. Ask first, always.', 'Anything you would also give a colleague.'] }
    ],
    comments: [
      { name: 'Sneha P.', time: '1 month ago', text: 'The keepsake box idea — the bride at our shower cried over hers. Perfect suggestion.', dot: 'var(--color-peach)' }
    ]
  },
  {
    slug: 'blog-startup-gifting.html', category: 'Corporate', title: 'Corporate Gifting For Startups',
    author: 'Marcus Lin', role: 'Corporate Gifting Lead, Curio',
    bio: 'Marcus spent a decade running gifting programmes for Fortune 500 brands before joining Curio. He believes a corporate gift should feel like a choice, never an obligation.',
    date: 'December 28, 2025', read: '5 min read',
    image: 'https://i.pinimg.com/736x/2e/f3/18/2ef3188e91c655f46a9f797afa2325bd.jpg', alt: 'Startup corporate gifts',
    intro: "Startups think they cannot afford meaningful gifting — and they are exactly wrong. The best client gifts we have ever seen were assembled on budgets under fifty dollars.",
    sections: [
      { h: 'Small Budget, Big Taste', p: "Twenty clients at forty dollars beats two clients at four hundred. Scale is a strategy: every client gets the same thoughtful experience, and word travels." },
      { h: 'Founder Story Gifts', p: "A gift that tells the startup's own story — a founders' favourite coffee, the city where the company began, the running joke from the pitch deck — is worth ten times its price in memorability." },
      { h: 'The First Deal Gift', p: "Close a deal? Send something to the human who closed it with you. A personal note plus a small keepsake converts a vendor into an ally." },
      { h: 'The Startup Gift Stack', list: ['A handwritten note on company letterhead — this is the gift.', 'A small artisan object with the story printed inside.', 'Something consumable: coffee, honey, candles.', 'Total budget: under fifty. Total effect: priceless.'] }
    ],
    comments: [
      { name: 'Rohit D.', time: '1 month ago', text: 'Used the founder-story idea for our first ten clients. Three have mentioned it in renewals.', dot: 'var(--color-accent)' }
    ]
  },
  {
    slug: 'blog-wrap-pro.html', category: 'Behind The Scenes', title: 'How To Wrap Like A Pro',
    author: 'James Doe', role: 'Studio & Digital Lead, Curio',
    bio: 'James runs the atelier floor where every Curio order is wrapped, sealed and shipped. He has strong opinions about shipping notes and stronger ones about gift cards.',
    date: 'December 18, 2025', read: '4 min read',
    image: 'https://i.pinimg.com/736x/e6/31/af/e631af8231d85e1558b26729c8b10c47.jpg', alt: 'Pro wrapping guide',
    intro: "The atelier wraps hundreds of gifts a week, and the difference between a good wrap and a professional one is rarely skill — it is four quiet habits. Steal them.",
    sections: [
      { h: '1. Cut The Paper First', p: "Measure the box against the roll, add three centimetres, and cut. Wrapping with oversized paper is where amateur crumple begins." },
      { h: '2. The Envelope Fold', p: "Fold the ends like a parcel, not a burrito. Sharp diagonal folds, tucked tight, with the tape hidden on the underside of the flap." },
      { h: '3. The Wax Seal Moment', p: "A wax seal costs nothing and transforms the unwrapping. Press it over the ribbon knot — the click of the seal breaking is the sound of a gift done right." },
      { h: '4. The Card Goes Inside, Not On', p: "A card tucked under the ribbon is the first thing to fall off. Put it inside the box, face up, so the note is the last thing they find." },
      { h: '5. Never Skip The Second Layer', p: "Tissue, ribbon, seal. Three layers of anticipation make the box feel like it costs twice what it did." }
    ],
    comments: [
      { name: 'Lakshmi G.', time: '2 months ago', text: 'The envelope fold fixed my wrapping in one gift. My family thinks I hired someone.', dot: 'var(--color-peach)' }
    ]
  },
  {
    slug: 'blog-holiday-hampers.html', category: 'Festivals', title: 'Hampers For The Holidays',
    author: 'Elena Rose', role: 'Artisan Liaison, Curio',
    bio: 'Elena spends half her year in workshops across three continents, chasing potters, weavers and candle makers whose hands deserve a global audience.',
    date: 'December 10, 2025', read: '5 min read',
    image: 'https://i.pinimg.com/736x/b2/2e/4b/b22e4b221b4184aa713dcf93ef34e4d8.jpg', alt: 'Holiday hampers guide',
    intro: "A holiday hamper is a small act of generosity with a long checklist: something warm, something sweet, something new and something remembered. Here is how we layer one, top to bottom.",
    sections: [
      { h: 'The Bottom Layer: The Heavyweight', p: "Start with the anchors — preserves, honey, spice blends, a bottle of something festive. The heavy items at the bottom keep the hamper balanced and the light things on top." },
      { h: 'The Middle Layer: The Warmth', p: "Candles, throws, tea, wool socks. These are the items that get used the night the hamper arrives, and they are what makes the gift feel like an invitation to stay in." },
      { h: 'The Top Layer: The Delight', p: "The last thing unpacked should be the most surprising: a small ornament, a wax seal kit, a keepsake that will decorate next year's tree." },
      { h: 'The Hamper Rule Of Three', list: ['Three categories minimum: consume, use, keep.', 'One item must be handmade.', 'One item must tell a story — put it on the note.', 'The box itself must be reusable. The box is part of the gift.'] }
    ],
    comments: [
      { name: 'Thomas W.', time: '2 months ago', text: 'Layered my first hamper with this method — the top-layer ornament was the star of the dinner.', dot: 'var(--color-accent)' }
    ]
  }
];

const postCard = (post, hidden) => `<div class="card${hidden ? ' more-post reveal' : ' reveal'}"${hidden ? ' style="display: none;"' : ''}><div class="card-img-wrapper" style="height: 200px; overflow: hidden;"><img src="${post.image}" alt="${post.alt}" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="card-body"><h3 class="card-title">${post.title}</h3><p class="text-muted text-sm mb-2">${post.intro.split('.')[0]}.</p><a href="${post.slug}" class="text-accent text-sm">Read More &rarr;</a></div></div>`;

const authorPhotos = {
  'Sarah Croft': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format',
  'Marcus Lin': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format',
  'Elena Rose': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format',
  'James Doe': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format'
};

const commentPhotos = {
  'Priya N.': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format',
  'Michael R.': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format',
  'Anita K.': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format',
  'Ravi S.': 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=200&auto=format',
  'Divya M.': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format',
  'Kavya R.': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format',
  'Harish T.': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format',
  'Nisha V.': 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format',
  'Meera & Karthik': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=200&auto=format',
  'Farhan A.': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format',
  'Sneha P.': 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format',
  'Rohit D.': 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format',
  'Lakshmi G.': 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format',
  'Thomas W.': 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format'
};

const renderPostDetail = (post, index) => {
  const related = [posts[(index + 1) % posts.length], posts[(index + 2) % posts.length]];
  const sections = post.sections.map(s =>
    `<h3 class="mb-2">${s.h}</h3>` + (s.p
      ? `<p class="mb-3">${s.p}</p>`
      : `<ul class="mb-3">${s.list.map(li => `<li class="mb-2">${li}</li>`).join('')}</ul>`)
  ).join('');
  const comments = post.comments.map(c =>
    `<div class="card mb-3 reveal">
        <div class="card-body">
            <div class="flex gap-sm align-center mb-2">
                <img src="${commentPhotos[c.name]}" alt="${c.name}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; object-position: center top;">
                <div><strong>${c.name}</strong><span class="text-muted text-sm"> · ${c.time}</span></div>
            </div>
            <p class="text-muted text-sm">${c.text}</p>
        </div>
    </div>`).join('');
  const relatedCards = related.map(r => `<div class="card reveal">
                <div class="card-img-wrapper" style="height: 180px; overflow: hidden;"><img src="${r.image}" alt="${r.alt}" style="width: 100%; height: 100%; object-fit: cover;"></div>
                <div class="card-body">
                    <span class="text-accent text-sm" style="text-transform: uppercase; letter-spacing: 1.5px; font-size: 0.7rem; font-weight: 600; display: block; margin-bottom: 0.4rem;">${r.category}</span>
                    <h3 class="card-title mb-2" style="margin-bottom: 0.5rem;">${r.title}</h3>
                    <a href="${r.slug}" class="text-accent text-sm">Read More &rarr;</a>
                </div>
            </div>`).join('');
  return `
    <!-- Section 1: Article Header -->
    <section class="section" style="padding: clamp(60px, 12vw, 100px) 0 60px;">
        <div class="container text-center reveal">
            <span class="badge badge-inline">${post.category}</span>
            <h1 class="mt-2 mb-2">${post.title}</h1>
            <p class="text-muted text-sm mb-1">By ${post.author} · ${post.role}</p>
            <p class="text-muted text-sm">${post.date} · ${post.read}</p>
        </div>
    </section>

    <!-- Section 2: Article Content -->
    <section class="section" style="padding-top: 0;">
        <div class="container" style="max-width: 820px;">
            <div class="reveal" style="aspect-ratio: 16/9; height: auto; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 2.5rem;">
                <img src="${post.image}" alt="${post.alt}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="reveal">
                <p class="mb-3">${post.intro}</p>
                ${sections}
            </div>
        </div>
    </section>

    <!-- Section 3: Author Bio -->
    <section class="section" style="padding-top: 0;">
        <div class="container" style="max-width: 820px;">
            <div class="card reveal">
                <div class="card-body flex gap-md align-center" style="gap: 1.5rem;">
                    <img src="${authorPhotos[post.author]}" alt="${post.author}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; object-position: center top; flex-shrink: 0;">
                    <div>
                        <h3 class="mb-1">${post.author}</h3>
                        <p class="text-accent text-sm mb-2">${post.role}</p>
                        <p class="text-muted text-sm">${post.bio}</p>
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
                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title + ' — Curio')}" target="_blank" rel="noopener" class="btn btn-outline" onclick="window.open(this.href, 'share', 'width=600,height=500'); return false;">Share on X</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.slug)}" target="_blank" rel="noopener" class="btn btn-outline" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href), 'share', 'width=600,height=500'); return false;">Share on Facebook</a>
                <a href="https://pinterest.com/pin/create/button/?media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title + ' — Curio')}" target="_blank" rel="noopener" class="btn btn-outline" onclick="window.open(this.href, 'share', 'width=600,height=500'); return false;">Share on Pinterest</a>
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
            <div class="grid mt-4" style="grid-template-columns: repeat(auto-fit, minmax(280px, 340px)); justify-content: center;">
                ${relatedCards}
            </div>
        </div>
    </section>

    <!-- Section 6: Comments -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <h2 class="text-center mb-4 reveal">Comments</h2>
            ${comments}
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
    </section>`;
};

const home2Styles = `
    <style>
        /* ===== Home 2: The Curio Maison (Black & Gold) ===== */
        .h2-hero {
            position: relative;
            overflow: hidden;
            background:
                radial-gradient(ellipse at 85% 15%, rgba(212, 175, 55, 0.16), transparent 50%),
                radial-gradient(ellipse at 10% 90%, rgba(212, 175, 55, 0.08), transparent 45%),
                linear-gradient(160deg, #0e0908 0%, #1c1210 55%, #2a1a12 100%);
            padding: 110px 0;
        }

        .h2-hero h1 { color: #f6ead2; }
        .h2-hero h1 .gold {
            font-style: italic;
            background: linear-gradient(120deg, #f5d97e 0%, var(--color-accent) 45%, #f9e9b3 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .h2-hero .subtitle { color: rgba(246, 234, 210, 0.75); }

        .h2-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.5rem 1.25rem;
            border: 1px solid rgba(212, 175, 55, 0.55);
            border-radius: 999px;
            background: rgba(212, 175, 55, 0.1);
            color: var(--color-accent);
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .h2-frame {
            position: relative;
            padding: 18px;
            border: 1px solid rgba(212, 175, 55, 0.4);
        }
        .h2-frame::before {
            content: '';
            position: absolute;
            inset: 7px;
            border: 1px solid rgba(212, 175, 55, 0.25);
            pointer-events: none;
        }
        .h2-frame img {
            position: relative;
            width: 100%;
            height: 480px;
            object-fit: cover;
            display: block;
        }
        .h2-frame-corner {
            position: absolute;
            width: 26px;
            height: 26px;
            border-color: var(--color-accent);
            border-style: solid;
            z-index: 2;
        }
        .h2-frame-corner.tl { top: -3px; left: -3px; border-width: 2px 0 0 2px; }
        .h2-frame-corner.tr { top: -3px; right: -3px; border-width: 2px 2px 0 0; }
        .h2-frame-corner.bl { bottom: -3px; left: -3px; border-width: 0 0 2px 2px; }
        .h2-frame-corner.br { bottom: -3px; right: -3px; border-width: 0 2px 2px 0; }

        .h2-badge {
            position: absolute;
            z-index: 3;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.75rem 1.25rem;
            border-radius: var(--radius-md);
            background: #17100d;
            border: 1px solid rgba(212, 175, 55, 0.45);
            box-shadow: 0 24px 50px rgba(0, 0, 0, 0.55);
            animation: h2Float 5s ease-in-out infinite;
        }
        .h2-badge .h2-seal {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--color-accent), #8a6d1f);
            color: #17100d;
            flex-shrink: 0;
        }
        .h2-badge strong { color: #f6ead2; font-size: 0.9rem; display: block; line-height: 1.3; }
        .h2-badge small { color: rgba(246, 234, 210, 0.6); font-size: 0.72rem; }

        @keyframes h2Float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
        }

        .h2-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 0;
            margin-top: 2.5rem;
        }
        .h2-stat { padding: 0.4rem 2rem 0.4rem 0; }
        .h2-stat + .h2-stat { padding-left: 2rem; border-left: 1px solid rgba(212, 175, 55, 0.3); }
        .h2-stat h3 { color: var(--color-accent); font-size: 2rem; margin-bottom: 0.1rem; }
        .h2-stat span { color: rgba(246, 234, 210, 0.65); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; }

        .h2-marquee {
            background: linear-gradient(90deg, #d4af37, #f0d67e 25%, #d4af37 50%, #f0d67e 75%, #d4af37);
            overflow: hidden;
            padding: 0.9rem 0;
        }
        .h2-marquee-track {
            display: flex;
            gap: 3rem;
            white-space: nowrap;
            width: max-content;
            animation: h2Marquee 28s linear infinite;
        }
        .h2-marquee-track span {
            color: #1a1008;
            font-weight: 600;
            font-size: 0.85rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            gap: 3rem;
        }
        .h2-marquee-track span::after { content: '\u2726'; color: #1a1008; }
        @keyframes h2Marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }

        .h2-dark-section {
            background: #120c0a;
            color: #f6ead2;
        }
        .h2-dark-section .section-title h2 { color: #f6ead2; }
        .h2-dark-section .subtitle { color: rgba(246, 234, 210, 0.7); }

        .h2-feature {
            background: #1b130f;
            border: 1px solid rgba(212, 175, 55, 0.18);
            border-radius: var(--radius-lg);
            padding: 2rem 1.75rem;
            position: relative;
            overflow: hidden;
            transition: all var(--transition-normal);
        }
        .h2-feature::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent), transparent);
            opacity: 0.5;
        }
        .h2-feature:hover {
            transform: translateY(-8px);
            border-color: rgba(212, 175, 55, 0.5);
            box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
        }
        .h2-feature .h2-num {
            font-family: var(--font-heading);
            font-size: 3rem;
            font-style: italic;
            color: transparent;
            -webkit-text-stroke: 1px rgba(212, 175, 55, 0.6);
            line-height: 1;
            margin-bottom: 1.25rem;
            display: block;
        }
        .h2-feature h3 { color: #f6ead2; font-size: 1.4rem; margin-bottom: 0.6rem; }
        .h2-feature p { color: rgba(246, 234, 210, 0.65); font-size: 0.9rem; margin-bottom: 0; }

        .h2-banner {
            position: relative;
            background-image: linear-gradient(rgba(10, 6, 5, 0.72), rgba(10, 6, 5, 0.72)), url('https://i.pinimg.com/736x/7b/f0/de/7bf0de1e76ce5ad0069516c4a3a1cc68.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            padding: 130px 0;
        }
        .h2-banner h2 { color: #f6ead2; }

        .h2-step {
            text-align: center;
            position: relative;
            padding: 0 1rem;
        }
        .h2-step-icon {
            width: 76px;
            height: 76px;
            margin: 0 auto 1.25rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #1b130f;
            border: 1px solid rgba(212, 175, 55, 0.5);
            color: var(--color-accent);
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.15);
            transition: all var(--transition-normal);
        }
        .h2-step:hover .h2-step-icon {
            background: var(--color-accent);
            color: #17100d;
        }
        .h2-step h3 { font-size: 1.3rem; margin-bottom: 0.5rem; }
        .h2-step p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0; }

        .h2-bestseller {
            background: #1b130f;
            border: 1px solid rgba(212, 175, 55, 0.18);
            border-radius: var(--radius-lg);
            overflow: hidden;
            transition: all var(--transition-normal);
        }
        .h2-bestseller:hover {
            transform: translateY(-8px);
            border-color: rgba(212, 175, 55, 0.55);
            box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
        }
        .h2-bestseller .h2-price {
            color: var(--color-accent);
            font-weight: 600;
            font-size: 1.1rem;
        }
        .h2-bestseller h3 { color: #f6ead2; }

        .h2-quote {
            position: relative;
            text-align: center;
            max-width: 760px;
            margin: 0 auto;
            padding: 3rem 0;
        }
        .h2-quote-mark {
            font-family: var(--font-heading);
            font-size: 6rem;
            line-height: 0.6;
            color: var(--color-accent);
            opacity: 0.6;
            display: block;
            margin-bottom: 1.5rem;
        }
        .h2-quote blockquote {
            font-family: var(--font-heading);
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            font-style: italic;
            color: #f6ead2;
            line-height: 1.4;
            margin-bottom: 1.5rem;
        }
        .h2-quote cite {
            font-style: normal;
            color: var(--color-accent);
            font-size: 0.85rem;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .h2-cta {
            background: linear-gradient(135deg, #d4af37 0%, #a8862a 55%, #d4af37 100%);
            position: relative;
            overflow: hidden;
        }
        .h2-cta h2 { color: #1a1008; }
        .h2-cta .subtitle { color: rgba(26, 16, 8, 0.8); }
        .h2-cta .btn-dark {
            background: #1a1008;
            color: #f6ead2;
            border-color: #1a1008;
        }
        .h2-cta .btn-dark:hover { background: #2b1c10; }
        .h2-cta .btn-ghost {
            background: transparent;
            color: #1a1008;
            border-color: rgba(26, 16, 8, 0.6);
        }

        @media (max-width: 1024px) {
            .h2-hero .container { gap: 3rem; }
        }

        @media (max-width: 992px) {
            .h2-frame img { height: 360px; }
            .h2-stats { justify-content: center; }
            .h2-stat { padding: 0.4rem 1.2rem; }
            .h2-stat + .h2-stat { padding-left: 1.2rem; }
            .h2-banner { background-attachment: scroll; }
        }

        @media (max-width: 768px) {
            .h2-hero { padding: 80px 0; }
            .h2-badge { position: static; display: inline-flex; margin: 1rem 0.5rem 0 0; }
            .h2-frame img { height: 300px; }
            .h2-feature { padding: 1.75rem 1.5rem; }
            .h2-banner { padding: 90px 0; }
            .h2-cta .newsletter-form { max-width: 100%; }
        }

        @media (max-width: 640px) {
            .h2-hero h1 { font-size: clamp(2.1rem, 9vw, 2.8rem); }
            .h2-stat h3 { font-size: 1.6rem; }
            .h2-quote-mark { font-size: 4.5rem; }
            .h2-marquee-track { gap: 2rem; }
            .h2-marquee-track span { letter-spacing: 2px; }
        }

        @media (max-width: 480px) {
            .h2-hero { padding: 60px 0; }
            .h2-eyebrow { font-size: 0.68rem; letter-spacing: 1.2px; padding: 0.4rem 0.9rem; }
            .h2-frame { padding: 12px; }
            .h2-frame::before { inset: 5px; }
            .h2-frame img { height: 240px; }
            .h2-stats { justify-content: center; }
            .h2-stat { padding: 0.4rem 0.9rem; }
            .h2-stat + .h2-stat { padding-left: 0.9rem; }
            .h2-stat h3 { font-size: 1.35rem; }
            .h2-badge { padding: 0.6rem 0.9rem; }
            .h2-badge .h2-seal { width: 34px; height: 34px; }
            .h2-banner { padding: 70px 0; }
            .h2-feature .h2-num { font-size: 2.4rem; }
            .h2-cta .flex { flex-wrap: wrap; justify-content: center; }
        }
    </style>`;

const servicesStyles = `
    <style>
        /* ===== Services: Signature Wrapping (premium, lighter than Home 2) ===== */
        .sv-eyebrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            padding: 0.45rem 1.15rem;
            border: 1px solid rgba(212, 175, 55, 0.55);
            border-radius: 999px;
            background: rgba(212, 175, 55, 0.12);
            color: var(--color-accent);
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
            white-space: normal;
            max-width: 100%;
        }

        .sv-eyebrow::before {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-accent);
            flex-shrink: 0;
        }

        @media (max-width: 640px) {
            .sv-eyebrow {
                font-size: 0.68rem;
                letter-spacing: 1.2px;
                padding: 0.4rem 0.9rem;
                gap: 0.4rem;
                line-height: 1.5;
            }
        }

        .sv-dark {
            background:
                radial-gradient(ellipse at 15% 0%, rgba(212, 175, 55, 0.14), transparent 50%),
                radial-gradient(ellipse at 90% 100%, rgba(212, 175, 55, 0.1), transparent 45%),
                linear-gradient(135deg, #3a1a24 0%, var(--color-primary) 60%, #4a1f2c 100%);
            color: var(--color-white);
        }

        .section-title .sv-eyebrow {
            display: flex;
            width: fit-content;
            margin: 0 auto 1rem auto;
        }

        .sv-dark .section-title h2 { color: var(--color-white); }
        .sv-dark .subtitle { color: rgba(255, 255, 255, 0.75); }

        .sv-card {
            position: relative;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: var(--radius-lg);
            overflow: hidden;
            transition: all var(--transition-normal);
            height: 100%;
        }

        .sv-card:hover {
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.09);
            border-color: rgba(212, 175, 55, 0.55);
            box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
        }

        .sv-card-img {
            position: relative;
            height: 200px;
            overflow: hidden;
        }

        .sv-card-img::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent), transparent);
        }

        .sv-card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s ease;
        }

        .sv-card:hover .sv-card-img img { transform: scale(1.08); }

        .sv-num {
            position: absolute;
            top: 14px;
            left: 14px;
            z-index: 2;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: linear-gradient(135deg, #f5d97e 0%, var(--color-accent) 100%);
            color: var(--color-primary);
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 1.1rem;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .sv-card-body { padding: 1.5rem 1.4rem 1.7rem; }
        .sv-card-body h3 { color: var(--color-white); font-size: 1.25rem; margin-bottom: 0.5rem; }
        .sv-card-body p { color: rgba(255, 255, 255, 0.75); font-size: 0.9rem; margin-bottom: 0; }

        .sv-tag {
            display: inline-block;
            margin-top: 0.9rem;
            padding: 0.3rem 0.85rem;
            border: 1px solid rgba(212, 175, 55, 0.55);
            border-radius: 999px;
            background: rgba(212, 175, 55, 0.15);
            color: var(--color-accent);
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        @media (max-width: 768px) {
            .sv-card-img { height: 180px; }
        }

        /* ===== Services: Other sections (premium, lighter than Home 2) ===== */
        .svh-hero {
            position: relative;
            padding: 200px 0;
            background-image: linear-gradient(rgba(26, 10, 10, 0.62), rgba(26, 10, 10, 0.78)), url('https://i.pinimg.com/736x/b8/5e/e8/b85ee83b0454956c8875309b1db8bc0c.jpg');
            background-size: cover;
            background-position: center;
            overflow: hidden;
        }

        .svh-hero::before {
            content: '';
            position: absolute;
            top: 18px;
            left: 18px;
            right: 18px;
            bottom: 18px;
            border: 1px solid rgba(212, 175, 55, 0.35);
            pointer-events: none;
        }

        .svh-hero h1 { color: var(--color-white); }

        .svh-hero .sv-eyebrow {
            display: inline-flex;
            margin-left: auto;
            margin-right: auto;
        }

        .svh-hero h1 .text-gold-italic {
            font-style: italic;
            background: linear-gradient(120deg, #f5d97e 0%, var(--color-accent) 45%, #f9e9b3 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .svh-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            margin: 0 auto 1.5rem;
        }
        .svh-divider::before,
        .svh-divider::after {
            content: '';
            width: 70px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8));
        }
        .svh-divider::after { background: linear-gradient(90deg, rgba(212, 175, 55, 0.8), transparent); }
        .svh-divider span {
            width: 8px;
            height: 8px;
            background: var(--color-accent);
            transform: rotate(45deg);
        }

        .svh-stats {
            display: flex;
            justify-content: center;
            align-items: stretch;
            margin-top: 3rem;
        }

        .svh-stat {
            padding: 0.5rem 2.5rem;
            text-align: center;
        }

        .svh-stat + .svh-stat {
            border-left: 1px solid rgba(255, 255, 255, 0.25);
        }

        .svh-stat h3 {
            color: var(--color-accent);
            font-family: var(--font-heading);
            font-size: 1.9rem;
            margin-bottom: 0.1rem;
        }

        .svh-stat span {
            color: rgba(255, 255, 255, 0.75);
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        @media (max-width: 640px) {
            .svh-stat { padding: 0.5rem 1.2rem; }
            .svh-stat h3 { font-size: 1.4rem; }
        }

        @media (max-width: 768px) {
            .svh-hero { padding: 130px 0; }
            .svh-hero::before, .svh-cta::before { top: 12px; left: 12px; right: 12px; bottom: 12px; }
            .svh-cta { padding: 80px 0; }
        }

        @media (max-width: 480px) {
            .svh-hero { padding: 90px 0; }
            .svh-stat { padding: 0.4rem 0.8rem; }
            .svh-stat + .svh-stat { padding-left: 0.8rem; }
            .svh-stat h3 { font-size: 1.2rem; }
            .svh-stat span { font-size: 0.62rem; letter-spacing: 1px; }
            .svl-ico { width: 46px; height: 46px; }
            .svh-cta { padding: 60px 0; }
        }

        .svl-card {
            position: relative;
            background: var(--color-white);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            overflow: hidden;
            height: 100%;
            text-align: center;
            transition: all var(--transition-normal);
        }

        .svl-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent), transparent);
        }

        .svl-card:hover {
            transform: translateY(-6px);
            border-color: rgba(212, 175, 55, 0.5);
            box-shadow: 0 20px 44px rgba(59, 37, 37, 0.14);
        }

        .svl-ico {
            width: 56px;
            height: 56px;
            margin: 0 auto 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(212, 175, 55, 0.14);
            border: 1px solid rgba(212, 175, 55, 0.35);
            color: var(--color-accent);
        }

        .svl-card h3 { margin-bottom: 0.4rem; }

        .svl-panel {
            position: relative;
            background: var(--color-white);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            overflow: hidden;
            height: 100%;
            transition: all var(--transition-normal);
        }

        .svl-panel::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent), transparent);
        }

        .svl-panel:hover {
            transform: translateY(-6px);
            border-color: rgba(212, 175, 55, 0.5);
            box-shadow: 0 20px 44px rgba(59, 37, 37, 0.14);
        }

        .svl-num {
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: linear-gradient(135deg, #f5d97e 0%, var(--color-accent) 100%);
            color: var(--color-primary);
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 0.9rem;
        }

        .svh-cta {
            position: relative;
            text-align: center;
            background-image: linear-gradient(rgba(26, 10, 10, 0.78), rgba(26, 10, 10, 0.85)), url('https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1600&auto=format');
            background-size: cover;
            background-position: center;
            overflow: hidden;
        }

        .svh-cta::before {
            content: '';
            position: absolute;
            top: 18px;
            left: 18px;
            right: 18px;
            bottom: 18px;
            border: 1px solid rgba(212, 175, 55, 0.35);
            pointer-events: none;
        }

        .svh-cta .sv-eyebrow { margin-left: auto; margin-right: auto; }
        .svh-cta h2 { color: var(--color-white); }
        .svh-cta p { color: rgba(255, 255, 255, 0.8); }
    </style>`;

const blogCategories = [
    { name: 'Gifting Guides', image: 'https://i.pinimg.com/1200x/7a/1c/d7/7a1cd7dd22d20c3a73d62b27e767a6de.jpg', delay: '0s' },
    { name: 'Weddings', image: 'https://i.pinimg.com/736x/a5/1a/73/a51a7361b4cdef20d2ee34af744f968c.jpg', delay: '0.08s' },
    { name: 'Corporate', image: 'https://i.pinimg.com/736x/b9/4a/a7/b94aa77419c8cf859bebfa101c7e1426.jpg', delay: '0.16s' },
    { name: 'Festivals', image: 'https://i.pinimg.com/736x/52/cb/83/52cb837ddff7494e78afd9070c5740ab.jpg', delay: '0.24s' },
    { name: 'Behind The Scenes', image: 'https://i.pinimg.com/736x/57/20/6c/57206cd17a0af6cecb8032e05b2bede1.jpg', delay: '0.32s' },
    { name: 'Interviews', image: 'https://i.pinimg.com/736x/2e/f3/18/2ef3188e91c655f46a9f797afa2325bd.jpg', delay: '0.4s' },
];

const blogCategoryCards = blogCategories.map((c, i) => {
    const count = posts.filter(p => p.category === c.name).length;
    const label = count > 0 ? `${count} ${count === 1 ? 'Story' : 'Stories'}` : 'Coming Soon';
    const num = String(i + 1).padStart(2, '0');
    const delayAttr = c.delay !== '0s' ? ` style="transition-delay: ${c.delay};"` : '';
    return `                <a href="blog.html" class="bcat-card reveal"${delayAttr}>
                    <img src="${c.image}" alt="${c.name}">
                    <span class="bcat-num">${num}</span>
                    <div class="bcat-info"><h3>${c.name}</h3><span>${label}</span></div>
                    <span class="bcat-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
                </a>`;
}).join('\n');

const blogStyles = `
    <style>
        /* ===== Blog: Browse By Category (premium, lighter than Home 2) ===== */
        .bcat-eyebrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            padding: 0.45rem 1.15rem;
            border: 1px solid rgba(212, 175, 55, 0.55);
            border-radius: 999px;
            background: rgba(212, 175, 55, 0.12);
            color: var(--color-accent);
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
            white-space: normal;
            max-width: 100%;
        }

        .bcat-eyebrow::before {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-accent);
            flex-shrink: 0;
        }

        .section-title .bcat-eyebrow {
            display: flex;
            width: fit-content;
            margin: 0 auto 1rem auto;
        }

        @media (max-width: 640px) {
            .bcat-eyebrow {
                font-size: 0.68rem;
                letter-spacing: 1.2px;
                padding: 0.4rem 0.9rem;
                gap: 0.4rem;
                line-height: 1.5;
            }
        }

        .bcat-card {
            position: relative;
            height: 220px;
            border-radius: var(--radius-md);
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            transition: all var(--transition-normal);
        }

        .bcat-card img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .bcat-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(26, 10, 10, 0.1) 30%, rgba(26, 10, 10, 0.85) 100%);
            transition: background 0.4s ease;
        }

        .bcat-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border: 2px solid transparent;
            border-radius: var(--radius-md);
            z-index: 3;
            transition: border-color 0.4s ease;
            pointer-events: none;
        }

        .bcat-card:hover {
            box-shadow: 0 22px 44px rgba(59, 37, 37, 0.25);
            transform: translateY(-6px);
        }
        .bcat-card:hover img { transform: scale(1.09); }
        .bcat-card:hover::before { border-color: rgba(212, 175, 55, 0.75); }

        .bcat-info {
            position: relative;
            z-index: 2;
            padding: 1.3rem 1.4rem;
            width: 100%;
        }

        .bcat-info h3 {
            color: var(--color-white);
            font-size: 1.2rem;
            margin-bottom: 0.15rem;
            text-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
        }

        .bcat-info span {
            color: var(--color-accent);
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .bcat-num {
            position: absolute;
            top: 1rem;
            right: 1.25rem;
            z-index: 2;
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 2rem;
            line-height: 1;
            color: transparent;
            -webkit-text-stroke: 1px rgba(212, 175, 55, 0.8);
        }

        .bcat-arrow {
            position: absolute;
            right: 1.4rem;
            bottom: 1.3rem;
            z-index: 2;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--color-accent);
            color: var(--color-primary);
            opacity: 0;
            transform: translateX(-8px);
            transition: all 0.4s ease;
        }

        .bcat-card:hover .bcat-arrow {
            opacity: 1;
            transform: translateX(0);
        }

        .bcat-card.bcat-active::before { border-color: var(--color-accent); }
        .bcat-card.bcat-active {
            box-shadow: 0 22px 44px rgba(212, 175, 55, 0.3);
            transform: translateY(-6px);
        }
        .bcat-card.bcat-active .bcat-num { -webkit-text-stroke-color: var(--color-accent); }

        .ig-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }

        .ig-item {
            position: relative;
            height: 210px;
            border-radius: var(--radius-md);
            overflow: hidden;
            display: block;
        }

        .ig-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .ig-item::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(26, 10, 10, 0.35), rgba(26, 10, 10, 0.75));
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 1;
        }

        .ig-item::after {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border: 1px solid rgba(212, 175, 55, 0.7);
            border-radius: calc(var(--radius-md) - 6px);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 2;
            pointer-events: none;
        }

        .ig-ov {
            position: absolute;
            inset: 0;
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .ig-ov .ig-ico {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--color-accent);
            color: var(--color-primary);
            transform: translateY(8px);
            transition: transform 0.4s ease;
        }

        .ig-ov span {
            color: var(--color-white);
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transform: translateY(8px);
            transition: transform 0.4s ease;
        }

        .ig-item:hover img { transform: scale(1.09); }
        .ig-item:hover::before { opacity: 1; }
        .ig-item:hover::after { opacity: 1; }
        .ig-item:hover .ig-ov { opacity: 1; }
        .ig-item:hover .ig-ov .ig-ico,
        .ig-item:hover .ig-ov span { transform: translateY(0); }

        .ig-follow {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            margin-top: 2.2rem;
            padding: 0.7rem 1.6rem;
            border: 1px solid rgba(212, 175, 55, 0.6);
            border-radius: 999px;
            background: rgba(212, 175, 55, 0.12);
            color: var(--color-accent);
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transition: all var(--transition-normal);
        }

        .ig-follow:hover {
            background: var(--color-accent);
            color: var(--color-primary);
            box-shadow: 0 14px 30px rgba(212, 175, 55, 0.35);
        }

        /* ===== Blog: Featured Story (premium, lighter than Home 2) ===== */
        .bfeat {
            position: relative;
            border: 1px solid rgba(212, 175, 55, 0.4);
            padding: 2.5rem;
            background: linear-gradient(160deg, #120c0a 0%, #1e1410 100%);
        }

        .bfeat::before {
            content: '';
            position: absolute;
            inset: 8px;
            border: 1px solid rgba(212, 175, 55, 0.22);
            pointer-events: none;
        }

        .bfeat-img {
            position: relative;
            overflow: hidden;
        }

        .bfeat-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s ease;
        }

        .bfeat:hover .bfeat-img img { transform: scale(1.05); }

        .bfeat-corner {
            position: absolute;
            width: 22px;
            height: 22px;
            border-color: var(--color-accent);
            border-style: solid;
            z-index: 2;
        }
        .bfeat-corner.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .bfeat-corner.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
        .bfeat-corner.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
        .bfeat-corner.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        .bfeat h2 { color: var(--color-white); }

        .bfeat .bfeat-meta {
            display: flex;
            align-items: center;
            gap: 0.9rem;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.8rem;
            letter-spacing: 0.5px;
        }

        .bfeat .bfeat-meta span {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        .bfeat .bfeat-meta span::before {
            content: '';
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--color-accent);
        }

        .bfeat .btn-gold {
            background: var(--color-accent);
            border-color: var(--color-accent);
            color: #17100d;
        }
        .bfeat .btn-gold:hover { background: #e3b95a; border-color: #e3b95a; }

        /* ===== Blog: Recent Posts (premium cards) ===== */
        .bpost {
            position: relative;
            background: var(--color-white);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: all var(--transition-normal);
        }

        .bpost::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent), transparent);
            z-index: 2;
        }

        .bpost:hover {
            transform: translateY(-6px);
            border-color: rgba(212, 175, 55, 0.5);
            box-shadow: 0 20px 44px rgba(59, 37, 37, 0.14);
        }

        .bpost-img {
            position: relative;
            height: 200px;
            overflow: hidden;
        }

        .bpost-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .bpost:hover .bpost-img img { transform: scale(1.08); }

        .bpost-num {
            position: absolute;
            top: 0.9rem;
            right: 1rem;
            z-index: 2;
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 1.8rem;
            line-height: 1;
            color: transparent;
            -webkit-text-stroke: 1px rgba(212, 175, 55, 0.85);
        }

        .bpost-cat {
            display: inline-block;
            color: var(--color-accent);
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .bpost-arrow {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--color-accent);
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: all 0.3s ease;
        }

        .bpost-arrow svg {
            width: 16px;
            height: 16px;
            transition: transform 0.3s ease;
        }

        .bpost:hover .bpost-arrow svg { transform: translateX(5px); }

        .bpost-hidden { display: none; }

        .bpost.bpost-shown {
            animation: bpostIn 0.5s ease both;
        }

        @keyframes bpostIn {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* ===== Blog: Newsletter (premium, lighter than Home 2 CTA) ===== */
        .bnews {
            position: relative;
            background:
                radial-gradient(ellipse at 85% 10%, rgba(212, 175, 55, 0.14), transparent 55%),
                linear-gradient(160deg, #0e0908 0%, #1c1210 60%, #2a1a12 100%);
            border: 1px solid rgba(212, 175, 55, 0.4);
            padding: clamp(3rem, 6vw, 4.5rem) 0;
            overflow: hidden;
        }

        .bnews::before {
            content: '';
            position: absolute;
            inset: 10px;
            border: 1px solid rgba(212, 175, 55, 0.22);
            pointer-events: none;
        }

        .bnews h2 { color: var(--color-white); }
        .bnews .subtitle { color: rgba(255, 255, 255, 0.85); }

        .bnews .newsletter-form {
            max-width: 460px;
            margin: 0 auto;
            border: 1px solid rgba(212, 175, 55, 0.35);
            border-radius: var(--radius-md);
            overflow: hidden;
            background: rgba(255, 255, 255, 0.05);
        }

        .bnews .newsletter-form input {
            background: transparent;
            border-radius: 0;
        }

        .bnews .btn-gold {
            background: var(--color-accent);
            border-color: var(--color-accent);
            color: #17100d;
            border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        .bnews .btn-gold:hover { background: #e3b95a; border-color: #e3b95a; }

        .bhero {
            position: relative;
            padding: 200px 0;
            background-image: linear-gradient(rgba(26, 10, 10, 0.62), rgba(26, 10, 10, 0.78)), url('https://i.pinimg.com/736x/25/86/3a/25863a0b1d1b63e04024622f3fc29173.jpg');
            background-size: cover;
            background-position: center;
            overflow: hidden;
        }

        .bhero::before {
            content: '';
            position: absolute;
            top: 18px;
            left: 18px;
            right: 18px;
            bottom: 18px;
            border: 1px solid rgba(212, 175, 55, 0.35);
            pointer-events: none;
        }

        .bhero h1 { color: var(--color-white); }

        .bhero .bcat-eyebrow {
            display: inline-flex;
            margin-left: auto;
            margin-right: auto;
        }

        .bhero h1 .text-gold-italic {
            font-style: italic;
            background: linear-gradient(120deg, #f5d97e 0%, var(--color-accent) 45%, #f9e9b3 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .bhero-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            margin: 0 auto 1.5rem;
        }
        .bhero-divider::before,
        .bhero-divider::after {
            content: '';
            width: 70px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8));
        }
        .bhero-divider::after { background: linear-gradient(90deg, rgba(212, 175, 55, 0.8), transparent); }
        .bhero-divider span {
            width: 8px;
            height: 8px;
            background: var(--color-accent);
            transform: rotate(45deg);
        }

        .bhero .subtitle { color: rgba(255, 255, 255, 0.9); }

        .bhero-stats {
            display: flex;
            justify-content: center;
            align-items: stretch;
            margin-top: 3rem;
        }

        .bhero-stat {
            padding: 0.5rem 2.5rem;
            text-align: center;
        }

        .bhero-stat + .bhero-stat {
            border-left: 1px solid rgba(255, 255, 255, 0.25);
        }

        .bhero-stat h3 {
            color: var(--color-accent);
            font-family: var(--font-heading);
            font-size: 1.9rem;
            margin-bottom: 0.1rem;
        }

        .bhero-stat span {
            color: rgba(255, 255, 255, 0.75);
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        @media (max-width: 640px) {
            .bhero-stat { padding: 0.5rem 1.2rem; }
            .bhero-stat h3 { font-size: 1.4rem; }
        }

        @media (max-width: 768px) {
            .bhero { padding: 130px 0; }
            .bhero::before { top: 12px; left: 12px; right: 12px; bottom: 12px; }
        }

        @media (max-width: 480px) {
            .bhero { padding: 90px 0; }
            .bhero-stat { padding: 0.4rem 0.8rem; }
            .bhero-stat + .bhero-stat { padding-left: 0.8rem; }
            .bhero-stat h3 { font-size: 1.2rem; }
            .bhero-stat span { font-size: 0.62rem; letter-spacing: 1px; }
            .bcat-card { height: 150px; }
            .ig-grid { grid-template-columns: repeat(2, 1fr); }
            .ig-item { height: 130px; }
        }

        @media (max-width: 768px) {
            .bcat-card { height: 190px; }
            .ig-grid { grid-template-columns: repeat(2, 1fr); }
            .ig-item { height: 160px; }
            .bfeat { padding: 1.5rem; }
            .bfeat-img { height: 260px !important; }
        }

        @media (max-width: 480px) {
            .bfeat { padding: 1rem; }
            .bfeat-img { height: 200px !important; }
            .bpost-img { height: 170px; }
        }
    </style>`;

const content = {
  'home-2.html': `
    <!-- Section 1: Hero -->
    <section class="h2-hero">
        <div class="container grid grid-2 align-center" style="gap: 4rem;">
            <div class="reveal fade-left">
                <span class="h2-eyebrow mb-4"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); display: inline-block;"></span> The Curio Maison · Est. 2010</span>
                <h1 class="mb-3">Gifts Crafted<br>With <span class="gold">Heart & Gold</span></h1>
                <p class="subtitle mb-4">A private world of gifting — seasonal drops, corporate commissions and bestsellers loved by thousands. Every order is wrapped by hand, engraved on request, and delivered with a handwritten card in champagne-gold wax.</p>
                <div class="flex gap-sm">
                    <a href="services.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent); color: #17100d;">Explore Services</a>
                    <a href="about.html" class="btn btn-outline" style="color: #f6ead2; border-color: rgba(246,234,210,0.5);">Our Story</a>
                </div>
                <div class="h2-stats reveal">
                    <div class="h2-stat"><h3>12,000+</h3><span>Gifts Delivered</span></div>
                    <div class="h2-stat"><h3>150+</h3><span>Partner Artisans</span></div>
                    <div class="h2-stat"><h3>40+</h3><span>Countries Served</span></div>
                </div>
            </div>
            <div class="reveal fade-right">
                <div class="h2-frame">
                    <span class="h2-frame-corner tl"></span><span class="h2-frame-corner tr"></span><span class="h2-frame-corner bl"></span><span class="h2-frame-corner br"></span>
                    <img src="https://i.pinimg.com/736x/95/21/1c/95211c86b36e999bcc00a7de384a7f57.jpg" alt="The Curio collection">
                </div>
                <div class="h2-badge" style="left: -2rem; bottom: -1.5rem;">
                    <div class="h2-seal"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></div>
                    <div><strong>Curator's Choice</strong><small>Hand-picked this season</small></div>
                </div>
                <div class="h2-badge" style="right: -1.5rem; top: 1rem; animation-delay: 2.4s;">
                    <div class="h2-seal"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"></path></svg></div>
                    <div><strong>4.9 / 5</strong><small>From 3,200+ clients</small></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 2: Marquee -->
    <div class="h2-marquee">
        <div class="h2-marquee-track">
            <span>Signature Silk Wrapping</span><span>Champagne-Gold Wax Seals</span><span>Handwritten Notes</span><span>Free Laser Engraving</span><span>Handmade By 150+ Artisans</span><span>Signature Silk Wrapping</span><span>Champagne-Gold Wax Seals</span><span>Handwritten Notes</span><span>Free Laser Engraving</span><span>Handmade By 150+ Artisans</span>
        </div>
    </div>

    <!-- Section 3: The Curio Difference -->
    <section class="section h2-dark-section">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Why Curio</h6>
                <h2>The Curio Difference</h2>
                <p class="subtitle">Four quiet obsessions that have guided every order since our first bow in 2010.</p>
            </div>
            <div class="grid grid-4 mt-4" style="gap: 1.5rem;">
                <div class="h2-feature reveal"><span class="h2-num">01</span><h3>Hand-Selected</h3><p>Every piece is chosen in person — from porcelain painters in Florence to silk weavers in Varanasi.</p></div>
                <div class="h2-feature reveal" style="transition-delay: 0.1s;"><span class="h2-num">02</span><h3>Made Personal</h3><p>Laser engraving, monograms and gilded calligraphy performed in our in-house studio.</p></div>
                <div class="h2-feature reveal" style="transition-delay: 0.2s;"><span class="h2-num">03</span><h3>Wrapped With Ritual</h3><p>Silk ribbon, wax seal and a handwritten card — the unwrapping is part of the gift.</p></div>
                <div class="h2-feature reveal" style="transition-delay: 0.3s;"><span class="h2-num">04</span><h3>Delivered With Care</h3><p>Tracked, insured and beautifully presented to more than forty countries.</p></div>
            </div>
        </div>
    </section>

    <!-- Section 4: Atelier Banner -->
    <section class="h2-banner">
        <div class="container text-center reveal">
            <span class="h2-eyebrow mb-4"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); display: inline-block;"></span> Inside The Atelier</span>
            <h2 class="mb-3">Every Box Leaves Our Hands, Not A Machine</h2>
            <p class="subtitle mb-4" style="color: rgba(246,234,210,0.75);">From the first cut of silk to the final press of the seal — watch the journey of a Curio order.</p>
            <a href="about.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent); color: #17100d;">Step Inside The Studio</a>
        </div>
    </section>

    <!-- Section 5: Craftsmanship Steps -->
    <section class="section h2-dark-section">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">The Ritual</h6>
                <h2>From Atelier To Doorstep</h2>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="h2-step reveal">
                    <div class="h2-step-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                    <h3>01 · Curate</h3>
                    <p>Our curators match the person, the occasion and the budget to the perfect piece.</p>
                </div>
                <div class="h2-step reveal" style="transition-delay: 0.15s;">
                    <div class="h2-step-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"></path></svg></div>
                    <h3>02 · Personalise</h3>
                    <p>Engraved names, dates and messages — every detail set by hand in our studio.</p>
                </div>
                <div class="h2-step reveal" style="transition-delay: 0.3s;">
                    <div class="h2-step-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                    <h3>03 · Present</h3>
                    <p>Silk-wrapped, wax-sealed and delivered with a note written in our hand.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 6: Bestsellers -->
    <section class="section h2-dark-section" style="padding-top: 0;">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Loved By Thousands</h6>
                <h2>This Season's Bestsellers</h2>
            </div>
            <div class="grid grid-4 mt-4" style="gap: 1.5rem;">
                <div class="h2-bestseller reveal"><div style="height: 200px; overflow: hidden;"><img src="https://i.pinimg.com/1200x/8b/aa/cc/8baacc4bf9698c95ccfa8eb99a43501d.jpg" alt="Surprise Crate" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--transition-slow);"></div><div class="card-body text-center"><h3>Surprise Crate</h3><p class="h2-price">$65.00 · Birthday</p></div></div>
                <div class="h2-bestseller reveal" style="transition-delay: 0.1s;"><div style="height: 200px; overflow: hidden;"><img src="https://i.pinimg.com/1200x/7b/f0/de/7bf0de1e76ce5ad0069516c4a3a1cc68.jpg" alt="Keepsake Gift Box" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--transition-slow);"></div><div class="card-body text-center"><h3>Keepsake Gift Box</h3><p class="h2-price">$120.00 · Wedding</p></div></div>
                <div class="h2-bestseller reveal" style="transition-delay: 0.2s;"><div style="height: 200px; overflow: hidden;"><img src="https://i.pinimg.com/736x/69/e9/46/69e9461098311d585176930e76f36d7e.jpg" alt="Gold Plated Pen Set" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--transition-slow);"></div><div class="card-body text-center"><h3>Gold Plated Pen Set</h3><p class="h2-price">$120.00 · Corporate</p></div></div>
                <div class="h2-bestseller reveal" style="transition-delay: 0.3s;"><div style="height: 200px; overflow: hidden;"><img src="https://i.pinimg.com/736x/de/c8/17/dec81790834f3b22177b47353482cf21.jpg" alt="Silk Scarf Box" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--transition-slow);"></div><div class="card-body text-center"><h3>Silk Scarf Box</h3><p class="h2-price">$95.00 · Luxury</p></div></div>
            </div>
        </div>
    </section>

    <!-- Section 7: Quote -->
    <section class="section h2-dark-section" style="padding-top: 0;">
        <div class="container">
            <div class="h2-quote reveal">
                <span class="h2-quote-mark">&ldquo;</span>
                <blockquote>We do not sell gifts. We wrap moments — the pause, the surprise, the gasp — and send them to people you love.</blockquote>
                <cite>Elena Rose · Founder, Curio</cite>
            </div>
        </div>
    </section>

    <!-- Section 8: CTA + Newsletter -->
    <section class="section h2-cta">
        <div class="container text-center reveal">
            <h2 class="mb-2">Make Every Gift Unforgettable</h2>
            <p class="subtitle mb-4">Free engraving, signature silk wrapping, and handwritten cards — included with every order from the Curio atelier.</p>
            <div class="flex gap-sm justify-center">
                <a href="services.html" class="btn btn-primary btn-dark">Our Services</a>
                <a href="about.html" class="btn btn-outline btn-ghost">Our Story</a>
            </div>
            <p class="text-sm mt-4" style="color: rgba(26,16,8,0.7);">Join The Private List — one letter a month, never more.</p>
            <form class="newsletter-form" style="max-width: 460px; margin: 1rem auto 0;" onsubmit="event.preventDefault(); this.querySelector('input').value='';">
                <input type="email" placeholder="Your email" required style="background: rgba(255,255,255,0.35); color: #1a1008;">
                <button type="submit" class="btn btn-primary btn-dark">Join</button>
            </form>
        </div>
    </section>`,

  'services.html': `
    <!-- Section 1: Hero -->
    <section class="svh-hero">
        <div class="container text-center reveal">
            <span class="sv-eyebrow mb-4"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); display: inline-block;"></span> Curio Atelier · Est. 2010</span>
            <h1 class="mb-3">Beyond The <span class="text-gold-italic">Gift</span> Itself</h1>
            <div class="svh-divider mb-4"><span></span></div>
            <p class="subtitle" style="color: rgba(255,255,255,0.9); max-width: 640px; margin-left: auto; margin-right: auto;">Every service is performed in-house, by hand, by people who have been doing it for decades.</p>
            <div class="flex gap-sm justify-center mt-4">
                <a href="#engraving" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent); color: #17100d;">Explore Services</a>
                <a href="contact.html" class="btn btn-outline" style="color: #f6ead2; border-color: rgba(246,234,210,0.5);">Book A Consultation</a>
            </div>
            <div class="svh-stats reveal">
                <div class="svh-stat"><h3>12,000+</h3><span>Gifts Delivered</span></div>
                <div class="svh-stat"><h3>4.9/5</h3><span>Client Rating</span></div>
                <div class="svh-stat"><h3>40+</h3><span>Countries Served</span></div>
            </div>
        </div>
    </section>

    <!-- Section 2: Engraving -->
    <section id="engraving" class="section bg-secondary" style="background: var(--bg-secondary);">
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

    <!-- Section 3: Signature Wrapping -->
    <section class="section sv-dark">
        <div class="container">
            <div class="text-center section-title reveal">
                <span class="sv-eyebrow mb-3">Studio Two · The Finishing Ritual</span>
                <h2>Signature Wrapping</h2>
                <p class="subtitle">The first impression is the one they remember — make it unforgettable. Every parcel leaves our atelier tied by hand, never by machine.</p>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="sv-card reveal">
                    <div class="sv-card-img">
                        <img src="https://i.pinimg.com/736x/40/88/38/4088383cc0c0215c512043e9acba66e7.jpg" alt="Curio Silk Wrap">
                        <span class="sv-num">01</span>
                    </div>
                    <div class="sv-card-body">
                        <h3>Curio Silk Wrap</h3>
                        <p>Hand-tied silk ribbons, champagne-gold wax seals and our embossed keepsake box, finished with a calligraphed cotton card.</p>
                        <span class="sv-tag">Complimentary</span>
                    </div>
                </div>
                <div class="sv-card reveal" style="transition-delay: 0.15s;">
                    <div class="sv-card-img">
                        <img src="https://i.pinimg.com/1200x/57/0e/dd/570eddd383bb65d27d9eca5fb84e809d.jpg" alt="Corporate Branding">
                        <span class="sv-num">02</span>
                    </div>
                    <div class="sv-card-body">
                        <h3>Corporate Branding</h3>
                        <p>Custom-printed boxes, branded ribbons and note cards for bulk programmes of 25 units or more — your logo, our craft.</p>
                        <span class="sv-tag">From $2.50 / unit</span>
                    </div>
                </div>
                <div class="sv-card reveal" style="transition-delay: 0.3s;">
                    <div class="sv-card-img">
                        <img src="https://i.pinimg.com/736x/89/46/5a/89465ae402076da33bc52d4dafcb822f.jpg" alt="Handwritten Cards">
                        <span class="sv-num">03</span>
                    </div>
                    <div class="sv-card-body">
                        <h3>Handwritten Cards</h3>
                        <p>A calligraphed message on cotton paper, sealed with champagne-gold wax — written in your own words, in our hand.</p>
                        <span class="sv-tag">Included</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 4: Corporate -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center section-title reveal">
                <span class="sv-eyebrow mb-3">For Business · Gifting At Scale</span>
                <h2>Corporate Gifting Programmes</h2>
            </div>
            <div class="grid grid-2 mt-4 align-start">
                <div class="svl-panel reveal fade-left">
                    <div class="card-body">
                        <h3>What We Manage</h3>
                        <ul class="mt-3">
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">01</span> Seasonal hampers for teams of 10 to 10,000</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">02</span> Client appreciation gifts with your logo engraved</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">03</span> Milestone awards — years of service, retirements, new joins</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">04</span> Direct-to-recipient delivery, worldwide, with gift notes</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">05</span> Dedicated account manager and quarterly reporting</li>
                        </ul>
                    </div>
                </div>
                <div class="svl-panel reveal fade-right" style="transition-delay: 0.15s;">
                    <div class="card-body">
                        <h3>How It Works</h3>
                        <ul class="mt-3">
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">01</span> Share your occasion, budget and recipient list</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">02</span> Receive a curated proposal within 48 hours</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">03</span> Approve samples, branding and wrapping</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">04</span> We produce, engrave, wrap and dispatch</li>
                            <li class="flex align-center gap-sm mb-2"><span class="svl-num">05</span> Delivery confirmations and photos on request</li>
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
                <span class="sv-eyebrow mb-3">From Our Hands To Theirs</span>
                <h2>Delivery Options</h2>
                <p class="subtitle">Tracked, insured and always beautifully presented — however fast you need it.</p>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="svl-card reveal">
                    <div class="card-body">
                        <div class="svl-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                        <h3>Same-Day</h3>
                        <p class="text-muted text-sm mb-3">Order before 2pm and it arrives the same evening, city-wide, in our signature wrap.</p>
                        <span class="sv-tag">Free over $150</span>
                    </div>
                </div>
                <div class="svl-card reveal" style="transition-delay: 0.15s;">
                    <div class="card-body">
                        <div class="svl-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg></div>
                        <h3>Express</h3>
                        <p class="text-muted text-sm mb-3">Next-day delivery across the country, with live tracking and a photo of the doorstep moment.</p>
                        <span class="sv-tag">From $12</span>
                    </div>
                </div>
                <div class="svl-card reveal" style="transition-delay: 0.3s;">
                    <div class="card-body">
                        <div class="svl-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                        <h3>International</h3>
                        <p class="text-muted text-sm mb-3">Duty-calculated, insured courier to 40+ countries. Gifts arrive with their card, not an invoice.</p>
                        <span class="sv-tag">From $25</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 6: Contact CTA -->
    <section class="section svh-cta">
        <div class="container reveal" style="position: relative; z-index: 2;">
            <span class="sv-eyebrow mb-4">A Curator Is One Message Away</span>
            <h2 class="mb-3">Not Sure Where To Start?</h2>
            <div class="svh-divider mb-4"><span></span></div>
            <p class="subtitle mb-4">Tell us the occasion and your budget — our curators will build the rest, from the object to the final bow.</p>
            <div class="flex gap-sm justify-center">
                <a href="contact.html" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent);">Talk to a Curator</a>
            </div>
        </div>
    </section>`,

  'blog.html': `
    <!-- Section 1: Hero -->
    <section class="bhero">
        <div class="container text-center reveal">
            <span class="bcat-eyebrow mb-4"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); display: inline-block;"></span> The Curio Journal · Since 2010</span>
            <h1 class="mb-3">Notes On The <span class="text-gold-italic">Art Of Giving</span></h1>
            <div class="bhero-divider mb-4"><span></span></div>
            <p class="subtitle" style="color: rgba(255,255,255,0.9); max-width: 640px; margin-left: auto; margin-right: auto;">Guides, stories and inspiration from our curators — written for people who give thoughtfully.</p>
            <div class="flex gap-sm justify-center mt-4">
                <a href="#categories" class="btn btn-primary" style="background: var(--color-accent); border-color: var(--color-accent); color: #17100d;">Browse Stories</a>
                <a href="contact.html" class="btn btn-outline" style="color: #f6ead2; border-color: rgba(246,234,210,0.5);">Submit A Story</a>
            </div>
            <div class="bhero-stats reveal">
                <div class="bhero-stat"><h3>120+</h3><span>Stories Published</span></div>
                <div class="bhero-stat"><h3>25k</h3><span>Monthly Readers</span></div>
                <div class="bhero-stat"><h3>4.9/5</h3><span>Reader Rating</span></div>
            </div>
        </div>
    </section>

    <!-- Section 2: Featured Post -->
    <section class="section" style="background: var(--color-primary);">
        <div class="container">
            <div class="bfeat grid grid-2 align-center reveal" style="gap: 2.5rem;">
                <div class="bfeat-img" style="height: clamp(240px, 38vw, 380px);">
                    <span class="bfeat-corner tl"></span><span class="bfeat-corner tr"></span><span class="bfeat-corner bl"></span><span class="bfeat-corner br"></span>
                    <img src="https://i.pinimg.com/736x/e6/30/f3/e630f3a32b324773812e8c3d3721739d.jpg" alt="The perfect wedding gift">
                </div>
                <div>
                    <span class="bcat-eyebrow mb-3"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); display: inline-block;"></span> Featured Story</span>
                    <h2 class="mb-2">The Complete Wedding Gift Guide</h2>
                    <p style="color: rgba(255,255,255,0.8); margin-bottom: 1.5rem;">From engagement parties to the final thank-you notes — how to choose, personalise and present a wedding gift they will treasure long after the confetti settles.</p>
                    <div class="bfeat-meta mb-4"><span>By Sarah Croft</span><span>8 min read</span><span>Weddings</span></div>
                    <a href="blog-details.html" class="btn btn-primary btn-gold">Read the Guide</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: Categories -->
    <section class="section">
        <div class="container">
            <div class="text-center section-title reveal">
                <span class="bcat-eyebrow mb-3">Explore The Journal</span>
                <h2>Browse By Category</h2>
                <p class="subtitle">Six shelves of stories — from wedding planning to the potters' studio. Pick a shelf and start reading.</p>
            </div>
            <div class="grid grid-3 mt-4">
${blogCategoryCards}
            </div>
        </div>
    </section>

    <!-- Section 4: Recent Posts Grid -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);" id="recent-posts">
        <div class="container">
            <div class="text-center section-title reveal">
                <h6 class="text-accent">Fresh From The Atelier</h6>
                <h2>Recent Posts</h2>
            </div>
            <div class="grid grid-3 mt-4">
                <div class="bpost reveal"><div class="bpost-img"><img src="https://i.pinimg.com/736x/b9/4a/a7/b94aa77419c8cf859bebfa101c7e1426.jpg" alt="Corporate gifting etiquette"><span class="bpost-num">01</span></div><div class="card-body"><span class="bpost-cat">Corporate</span><h3 class="card-title mb-2">Corporate Gifting Etiquette: 10 Rules</h3><p class="text-muted text-sm mb-3">What to give, what to avoid, and how to make it feel personal at scale.</p><a href="blog-corporate-etiquette.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost reveal" style="transition-delay: 0.1s;"><div class="bpost-img"><img src="https://i.pinimg.com/736x/57/20/6c/57206cd17a0af6cecb8032e05b2bede1.jpg" alt="Artisan spotlight"><span class="bpost-num">02</span></div><div class="card-body"><span class="bpost-cat">Behind The Scenes</span><h3 class="card-title mb-2">Meet The Artisans Behind Our Ceramics</h3><p class="text-muted text-sm mb-3">A visit to the potters' studio where every vase is thrown, glazed and fired by hand.</p><a href="blog-artisans-ceramics.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost reveal" style="transition-delay: 0.2s;"><div class="bpost-img"><img src="https://i.pinimg.com/736x/16/7b/3f/167b3f8866c05b16c2634f5c85ef5347.jpg" alt="Scented candle guide"><span class="bpost-num">03</span></div><div class="card-body"><span class="bpost-cat">Gifting Guides</span><h3 class="card-title mb-2">Choosing The Perfect Scented Candle</h3><p class="text-muted text-sm mb-3">Wax, wick and fragrance families — a short guide to gifting scent with confidence.</p><a href="blog-scented-candle.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost reveal"><div class="bpost-img"><img src="https://i.pinimg.com/736x/52/cb/83/52cb837ddff7494e78afd9070c5740ab.jpg" alt="Diwali gift guide"><span class="bpost-num">04</span></div><div class="card-body"><span class="bpost-cat">Festivals</span><h3 class="card-title mb-2">Diwali Gift Hampers: What To Include</h3><p class="text-muted text-sm mb-3">Our curator's favourite combination of light, sweet and keepsake for the festival of lights.</p><a href="blog-diwali-hampers.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost reveal" style="transition-delay: 0.1s;"><div class="bpost-img"><img src="https://i.pinimg.com/1200x/7a/1c/d7/7a1cd7dd22d20c3a73d62b27e767a6de.jpg" alt="Birthday gift guide"><span class="bpost-num">05</span></div><div class="card-body"><span class="bpost-cat">Gifting Guides</span><h3 class="card-title mb-2">The Psychology of a Great Birthday Gift</h3><p class="text-muted text-sm mb-3">Why the best gifts are remembered long after they are used — and how to pick one.</p><a href="blog-birthday-psychology.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost reveal" style="transition-delay: 0.2s;"><div class="bpost-img"><img src="https://i.pinimg.com/736x/b1/3b/1e/b13b1e25d4c387a5af47238e92adcca1.jpg" alt="Silk scarf styling"><span class="bpost-num">06</span></div><div class="card-body"><span class="bpost-cat">Gifting Guides</span><h3 class="card-title mb-2">Five Ways To Wear A Silk Scarf</h3><p class="text-muted text-sm mb-3">The gift that keeps on giving — styling notes to slip inside the box.</p><a href="blog-silk-scarf.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost bpost-hidden reveal"><div class="bpost-img"><img src="https://i.pinimg.com/736x/51/eb/28/51eb289cdabc0144ba1799b2b9d1d8cf.jpg" alt="Anniversary gift guide"><span class="bpost-num">07</span></div><div class="card-body"><span class="bpost-cat">Romance</span><h3 class="card-title mb-2">The Ultimate Anniversary Gift Cheat Sheet</h3><p class="text-muted text-sm mb-3">The traditional materials, modernised — the one page you will keep every single year.</p><a href="blog-anniversary-cheat-sheet.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost bpost-hidden reveal" style="transition-delay: 0.1s;"><div class="bpost-img"><img src="https://i.pinimg.com/736x/c6/d9/ea/c6d9ea274cb130c52ed82396c411f110.jpg" alt="Digital gifting etiquette"><span class="bpost-num">08</span></div><div class="card-body"><span class="bpost-cat">Gifting Guides</span><h3 class="card-title mb-2">Gifting Etiquette In The Digital Age</h3><p class="text-muted text-sm mb-3">The gift card killed the handwritten note — and most of us are breaking the new rules.</p><a href="blog-digital-etiquette.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost bpost-hidden reveal"><div class="bpost-img"><img src="https://i.pinimg.com/736x/a5/1a/73/a51a7361b4cdef20d2ee34af744f968c.jpg" alt="Bridal shower essentials"><span class="bpost-num">09</span></div><div class="card-body"><span class="bpost-cat">Weddings</span><h3 class="card-title mb-2">Bridal Shower Essentials</h3><p class="text-muted text-sm mb-3">Where practicality meets romance — everything she will actually use, beautifully wrapped.</p><a href="blog-bridal-shower.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost bpost-hidden reveal" style="transition-delay: 0.1s;"><div class="bpost-img"><img src="https://i.pinimg.com/736x/2e/f3/18/2ef3188e91c655f46a9f797afa2325bd.jpg" alt="Startup corporate gifts"><span class="bpost-num">10</span></div><div class="card-body"><span class="bpost-cat">Corporate</span><h3 class="card-title mb-2">Corporate Gifting For Startups</h3><p class="text-muted text-sm mb-3">Startups think they cannot afford meaningful gifting — and they are exactly wrong.</p><a href="blog-startup-gifting.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost bpost-hidden reveal" style="transition-delay: 0.2s;"><div class="bpost-img"><img src="https://i.pinimg.com/736x/e6/31/af/e631af8231d85e1558b26729c8b10c47.jpg" alt="Pro wrapping guide"><span class="bpost-num">11</span></div><div class="card-body"><span class="bpost-cat">Behind The Scenes</span><h3 class="card-title mb-2">How To Wrap Like A Pro</h3><p class="text-muted text-sm mb-3">Our atelier's five habits of beautiful wrapping — ribbon, wax and the perfect fold.</p><a href="blog-wrap-pro.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
                <div class="bpost bpost-hidden reveal"><div class="bpost-img"><img src="https://i.pinimg.com/736x/b2/2e/4b/b22e4b221b4184aa713dcf93ef34e4d8.jpg" alt="Holiday hampers guide"><span class="bpost-num">12</span></div><div class="card-body"><span class="bpost-cat">Festivals</span><h3 class="card-title mb-2">Hampers For The Holidays</h3><p class="text-muted text-sm mb-3">The layered hamper formula our clients request most — build one in an afternoon.</p><a href="blog-holiday-hampers.html" class="bpost-arrow">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div>
            </div>
            <div class="text-center mt-5">
                <a href="#categories" class="ig-follow" id="blog-view-more">View More Stories <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(-90deg);"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            </div>
            <script>
                (function () {
                    var btn = document.getElementById('blog-view-more');
                    if (!btn) return;
                    var cards = document.querySelectorAll('.bpost-hidden');
                    var expanded = false;
                    btn.addEventListener('click', function (e) {
                        e.preventDefault();
                        expanded = !expanded;
                        cards.forEach(function (c) {
                            if (expanded) {
                                c.style.display = 'flex';
                                void c.offsetWidth;
                                c.classList.add('bpost-shown');
                            } else {
                                c.classList.remove('bpost-shown');
                                c.style.display = 'none';
                            }
                        });
                        if (expanded) {
                            btn.innerHTML = 'View Less Stories <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(90deg);"><polyline points="6 9 12 15 18 9"></polyline></svg>';
                        } else {
                            btn.innerHTML = 'View More Stories <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(-90deg);"><polyline points="6 9 12 15 18 9"></polyline></svg>';
                            document.getElementById('recent-posts').scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                })();
            </script>
        </div>
    </section>

    <!-- Section 5: Newsletter -->
    <section class="section bnews">
        <div class="container text-center reveal">
            <span class="bcat-eyebrow mb-3"><span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); display: inline-block;"></span> The Private List</span>
            <h2 class="mb-2">Get The Journal In Your Inbox</h2>
            <p class="subtitle mb-4">A monthly letter from our curators — new guides, seasonal drops and stories from the atelier.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); this.querySelector('input').value='';">
                <input type="email" placeholder="Your email" required>
                <button type="submit" class="btn btn-primary btn-gold">Subscribe</button>
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
            <div class="ig-grid mt-4">
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="ig-item reveal"><img src="https://i.pinimg.com/736x/40/88/38/4088383cc0c0215c512043e9acba66e7.jpg" alt="Instagram post 1"><div class="ig-ov"><div class="ig-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span>@curiogifts</span></div></a>
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="ig-item reveal" style="transition-delay: 0.08s;"><img src="https://i.pinimg.com/1200x/57/0e/dd/570eddd383bb65d27d9eca5fb84e809d.jpg" alt="Instagram post 2"><div class="ig-ov"><div class="ig-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span>@curiogifts</span></div></a>
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="ig-item reveal" style="transition-delay: 0.16s;"><img src="https://i.pinimg.com/736x/89/46/5a/89465ae402076da33bc52d4dafcb822f.jpg" alt="Instagram post 3"><div class="ig-ov"><div class="ig-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span>@curiogifts</span></div></a>
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="ig-item reveal"><img src="https://i.pinimg.com/736x/b2/f1/c3/b2f1c33c61469521a5f90237fa006983.jpg" alt="Instagram post 4"><div class="ig-ov"><div class="ig-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span>@curiogifts</span></div></a>
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="ig-item reveal" style="transition-delay: 0.08s;"><img src="https://i.pinimg.com/736x/c3/fb/c4/c3fbc45c8917b868af6aee28267cffcb.jpg" alt="Instagram post 5"><div class="ig-ov"><div class="ig-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span>@curiogifts</span></div></a>
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="ig-item reveal" style="transition-delay: 0.16s;"><img src="https://i.pinimg.com/736x/68/fa/19/68fa19b3e64b7fd2623c9f6f90bb79d3.jpg" alt="Instagram post 6"><div class="ig-ov"><div class="ig-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span>@curiogifts</span></div></a>
            </div>
            <div class="text-center">
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="ig-follow">Follow @curiogifts</a>
            </div>
        </div>
    </section>`,

  'blog-details.html': `
    <!-- Section 1: Article Header -->
    <section class="section" style="padding: clamp(60px, 12vw, 100px) 0 60px;">
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
            <div class="reveal" style="aspect-ratio: 16/9; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 2.5rem;">
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
    <section class="section" style="padding: clamp(60px, 12vw, 100px) 0;">
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
    <section class="section" style="padding: clamp(60px, 12vw, 100px) 0;">
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
                <li class="mb-2"><a href="about.html" class="text-accent">About</a> — our story, values and artisans</li>
                <li class="mb-2"><a href="services.html" class="text-accent">Services</a> — engraving, wrapping, corporate and delivery</li>
                <li class="mb-2"><a href="contact.html" class="text-accent">Contact</a> — messages, bulk enquiries and FAQs</li>
            </ul>
        </div>
    </section>

    <!-- Section 3: Categories -->
    <section class="section">
        <div class="container" style="max-width: 820px;">
            <h2 class="mb-3 reveal">Our Services</h2>
            <ul class="reveal">
                <li class="mb-2"><a href="services.html" class="text-accent">Gift Wrapping</a> — signature silk and champagne-gold wax</li>
                <li class="mb-2"><a href="services.html" class="text-accent">Engraving Studio</a> — free personalisation on request</li>
                <li class="mb-2"><a href="services.html" class="text-accent">Corporate Gifting</a> — bulk programmes and branded gifts</li>
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
    <section class="section" style="padding: clamp(60px, 12vw, 100px) 0 40px;">
        <div class="container text-center reveal">
            <h1 style="font-size: clamp(4rem, 18vw, 7rem); line-height: 1; color: var(--color-accent);">404</h1>
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
            </div>
        </div>
    </section>

    <!-- Section 5: Popular Links -->
    <section class="section bg-secondary" style="background: var(--bg-secondary);">
        <div class="container" style="max-width: 820px;">
            <h2 class="text-center mb-4 reveal">Popular Destinations</h2>
            <div class="grid grid-3 text-center">
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
    <section class="section" style="padding: clamp(70px, 14vw, 120px) 0 20px;">
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
                <a href="https://www.instagram.com/curiogifts" target="_blank" rel="noopener" class="btn btn-outline">Instagram</a>
                <a href="https://www.facebook.com/curiogifts" target="_blank" rel="noopener" class="btn btn-outline">Facebook</a>
                <a href="https://www.pinterest.com/curiogifts" target="_blank" rel="noopener" class="btn btn-outline">Pinterest</a>
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

const template = (title, body, activeKey, extraHead = '') => `<!DOCTYPE html>
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
${extraHead}
</head>
<body>
${navbar(activeKey)}

${body}

${footer}

    <script src="../assets/js/main.js"></script>
</body>
</html>`;

pages.forEach(p => {
    const extraHead = p.name === 'home-2.html' ? home2Styles : p.name === 'services.html' ? servicesStyles : p.name === 'blog.html' ? blogStyles : '';
    fs.writeFileSync(path.join(pagesDir, p.name), template(p.title, content[p.name], p.active, extraHead));
    console.log(`Created ${p.name}`);
});

posts.forEach((post, i) => {
    if (i === 0) return;
    fs.writeFileSync(path.join(pagesDir, post.slug), template(`${post.title} | Curio`, renderPostDetail(post, i), 'blog'));
    console.log(`Created ${post.slug}`);
});
