const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'pages');
const generatePages = fs.readFileSync(path.join(__dirname, 'generate_pages.js'), 'utf8');

// Extract navbar template (the `return ` ... `;` inside the navbar function)
const navStart = generatePages.indexOf('<nav class="navbar">');
const navEnd = generatePages.indexOf('</nav>`;', navStart) + '</nav>'.length;
if (navStart === -1 || navEnd < navStart) {
    console.error('ERROR: Could not find navbar template in generate_pages.js');
    process.exit(1);
}
const navbarTemplate = generatePages.slice(navStart, navEnd);

// Extract footer template
const footerStart = generatePages.indexOf('const footer = `') + 'const footer = `'.length;
const footerEnd = generatePages.indexOf('`;', footerStart);
if (footerStart === -1 || footerEnd < footerStart) {
    console.error('ERROR: Could not find footer template in generate_pages.js');
    process.exit(1);
}
const footerTemplate = generatePages.slice(footerStart, footerEnd);

const filesToUpdate = ['about.html', 'contact.html'];

filesToUpdate.forEach(file => {
    const filePath = path.join(pagesDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace navbar
    const activeKey = file.replace('.html', '');
    const currentNavbar = navbarTemplate
        .replace(/\$\{links\}/g, () => {
            const navLinks = [
                { href: '../index.html', label: 'Home', key: 'home' },
                { href: 'home-2.html', label: 'Home 2', key: 'home-2' },
                { href: 'about.html', label: 'About', key: 'about' },
                { href: 'services.html', label: 'Services', key: 'services' },
                { href: 'blog.html', label: 'Blog', key: 'blog' },
                { href: 'contact.html', label: 'Contact', key: 'contact' }
            ];
            return navLinks.map(l => `                <a href="${l.href}" class="nav-link${l.key === activeKey ? ' active' : ''}">${l.label}</a>`).join('\n');
        });
        
    content = content.replace(/<nav class="navbar">[\s\S]*?<\/nav>/, currentNavbar);
    
    // Replace footer
    content = content.replace(/<footer class="footer"[^>]*>[\s\S]*?<\/footer>/, footerTemplate);
    
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
});
