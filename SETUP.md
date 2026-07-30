# MLB Analytics Hub - Setup Guide

Welcome to your MLB Statistics and Analytics website! This guide will help you get started.

## 📁 Project Structure

```
MyProject/
├── index.html          # Home page with hero, features, and stats preview
├── stats.html          # Detailed statistics tables with filters
├── leaders.html        # Stat leaders (batting & pitching)
├── faq.html           # Frequently asked questions
├── styles.css         # All styling and responsive design
├── script.js          # Interactive functionality and charts
├── assets/            # Images and media files
│   └── README.md      # Assets documentation
└── SETUP.md           # This file
```

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **Navigate**: Use the top navigation menu to explore different pages
3. **Interact**: Try the search, filters, FAQ accordion, and interactive charts

## 🎨 Customization

### Change Colors

Edit the CSS variables in `styles.css` (lines 10-20):

```css
:root {
    --primary-color: #0051BA;      /* Main blue color */
    --secondary-color: #D50032;    /* Red accent color */
    --dark-bg: #0a1628;           /* Dark background */
    /* ... more variables ... */
}
```

### Add Your Own Images

1. Place images in the `assets/` folder
2. Name them according to `assets/README.md`
3. Images will automatically replace the fallback URLs

### Update Team Data

Edit the HTML files directly to update:
- Player statistics
- Team names
- Season information
- Leader boards

### Modify Videos

Replace YouTube video IDs in the iframe `src` attributes:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID">
```

## 🌐 Features

### Home Page (index.html)
- ✅ Hero section with call-to-action
- ✅ Featured video section
- ✅ About section with quick stats
- ✅ Feature cards (6 key features)
- ✅ Image gallery (4 images)
- ✅ Top performers preview
- ✅ Newsletter signup

### Statistics Page (stats.html)
- ✅ Filter controls (category, season, team)
- ✅ Player search functionality
- ✅ Sortable statistics table
- ✅ Interactive charts (Chart.js)
- ✅ Advanced metrics section
- ✅ WAR, wOBA, wRC+, ISO stats

### Stat Leaders Page (leaders.html)
- ✅ Batting leaders (HR, AVG, RBI, SB)
- ✅ Pitching leaders (ERA, Wins, K, Saves)
- ✅ Gold/Silver/Bronze highlighting
- ✅ Video highlights section
- ✅ Embedded YouTube videos

### FAQ Page (faq.html)
- ✅ Category filtering
- ✅ Accordion-style answers
- ✅ Basic stats explanations
- ✅ Advanced metrics guide
- ✅ Site usage help
- ✅ Contact information

## 📱 Responsive Design

The website is fully responsive and works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

## 🔧 Interactive Features

1. **Mobile Navigation**: Hamburger menu for small screens
2. **FAQ Accordion**: Click questions to expand/collapse
3. **Player Search**: Real-time filtering of statistics
4. **Table Sorting**: Click column headers to sort
5. **Charts**: Interactive data visualizations
6. **Smooth Scrolling**: Animated page transitions
7. **Back to Top**: Auto-appearing scroll button
8. **Newsletter**: Form submission handling

## 📊 Chart.js Integration

The website uses Chart.js for data visualization. Charts included:
- Bar chart: Home runs by team
- Line chart: Batting average trends

To customize charts, edit `script.js` starting at line 80.

## 🎯 Browser Support

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🚢 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in Settings
4. Your site will be live at `username.github.io/repository`

### Option 2: Netlify
1. Drag and drop the entire folder to Netlify
2. Your site will be live instantly
3. Free SSL and custom domain support

### Option 3: Traditional Web Hosting
1. Upload all files via FTP
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## 📝 Content Management

### Adding New Players

Edit the HTML table in `stats.html`:
```html
<tr>
    <td>Rank</td>
    <td>Player Name</td>
    <td>Team</td>
    <!-- ...stats... -->
</tr>
```

### Updating Stats

Statistics are currently static. For real-time data:
1. Consider using the MLB Stats API
2. Integrate with a backend service
3. Use JavaScript fetch to update dynamically

## 🔐 Security Notes

- No sensitive data is collected
- Newsletter form doesn't store emails (add backend)
- All external resources use HTTPS
- No cookies or tracking by default

## 🆘 Troubleshooting

**Charts not displaying?**
- Ensure Chart.js CDN is loading (check internet connection)
- Open browser console for error messages

**Images not loading?**
- Check that fallback URLs are accessible
- Add your own images to `assets/` folder

**Mobile menu not working?**
- Ensure `script.js` is loading
- Check browser console for JavaScript errors

**Styles not applying?**
- Clear browser cache
- Ensure `styles.css` is in the same directory

## 📚 Resources

- **Chart.js Documentation**: https://www.chartjs.org/docs/
- **Font Awesome Icons**: https://fontawesome.com/icons
- **CSS Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **MDN Web Docs**: https://developer.mozilla.org/

## 🤝 Contributing

To improve this website:
1. Add new statistical categories
2. Integrate real-time MLB API data
3. Add player comparison tools
4. Create team-specific pages
5. Add historical statistics

## 📄 License

This project is free to use and modify for personal or commercial purposes.

## 🎉 Enjoy!

Your MLB Analytics Hub is ready to use! Customize it to your needs and share your love of baseball statistics.

---

**Questions?** The FAQ page covers most common topics. For technical issues, check the browser console for error messages.
