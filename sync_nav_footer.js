const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const generatePages = fs.readFileSync('generate_pages.js', 'utf8');

// Extract navbar template
const navStart = generatePages.indexOf('const navbar = (activeKey) => `') + 'const navbar = (activeKey) => `'.length;
const navEnd = generatePages.indexOf('`;', navStart);
const navbarTemplate = generatePages.slice(navStart, navEnd);

// Extract footer template
const footerStart = generatePages.indexOf('const footer = `') + 'const footer = `'.length;
const footerEnd = generatePages.indexOf('`;', footerStart);
const footerTemplate = generatePages.slice(footerStart, footerEnd);

const filesToUpdate = ['about.html', 'shop.html', 'contact.html'];

filesToUpdate.forEach(file => {
    const filePath = path.join(pagesDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace navbar
    const activeKey = file.replace('.html', '');
    const currentNavbar = navbarTemplate
        .replace(/\$\{navLinks\.map.*?join\('\\n'\)\}/s, () => {
            const navLinks = [
                { href: '../index.html', label: 'Home', key: 'home' },
                { href: 'home-2.html', label: 'Home 2', key: 'home-2' },
                { href: 'shop.html', label: 'Shop', key: 'shop' },
                { href: 'about.html', label: 'About', key: 'about' },
                { href: 'services.html', label: 'Services', key: 'services' },
                { href: 'contact.html', label: 'Contact', key: 'contact' }
            ];
            return navLinks.map(l => `                <a href="${l.href}" class="nav-link${l.key === activeKey ? ' active' : ''}">${l.label}</a>`).join('\n');
        });
        
    content = content.replace(/<nav class="navbar">.*?<\/nav>/s, currentNavbar);
    
    // Replace footer
    content = content.replace(/<footer class="footer".*?<\/footer>/s, footerTemplate);
    
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
});
