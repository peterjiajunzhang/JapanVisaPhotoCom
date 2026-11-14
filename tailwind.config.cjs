// Formerly the inline `tailwind.config` used with the cdn.tailwindcss.com runtime.
// Rebuild assets/tailwind.css after editing index.html: see README.md.
const siteConfig = {
    theme: {
        extend: {
            colors: {
                brand: '#bc002d',
                'brand-dark': '#8f0022',
                navy: '#0a1628',
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
        }
    }
};

module.exports = { content: ['./index.html'], ...siteConfig };
