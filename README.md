# Noble's Art Portfolio Website

A stunning, professional, and interactive single-page portfolio website designed for an artist to showcase their work, profile, and contact information.

## ✨ Features

### 🎨 Design Elements
- **Modern & Interactive UI**: Beautiful animations and transitions throughout
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Colorful Gradients**: Each section has unique gradient backgrounds and color schemes
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **Custom Cursor**: Enhanced cursor effects on desktop for better UX
- **Parallax Effects**: Floating shapes and elements that move with scroll

### 📱 Sections

1. **Hero Section**
   - Logo and profile picture with animated ring
   - Dynamic greeting based on time of day
   - Floating background shapes with animations
   - Call-to-action button

2. **About Section**
   - Stylish introduction with decorative first letter
   - Animated skill cards
   - Statistics counters with animation
   - Gradient orb background effects

3. **Resume Section**
   - Clickable document cards
   - Modal popups for resume and cover letter
   - Wave animation backgrounds
   - Professional document layout

4. **Gallery Section**
   - Space for 10 artworks
   - Each artwork has unique color theme
   - Hover effects with overlay information
   - Full-screen artwork viewer modal
   - Color splash background animations

5. **Contact Section**
   - Interactive contact form with validation
   - Email functionality (opens default email client)
   - Social media links (Facebook, Instagram, Twitter, LinkedIn, Pinterest)
   - Contact information cards
   - Animated particle background

### 🔧 Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Advanced animations, gradients, flexbox, grid
- **JavaScript**: Interactive elements, modals, animations
- **Font Awesome**: Icon library
- **Google Fonts**: Playfair Display, Poppins, Abril Fatface

## 📂 File Structure

```
Noble's Website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── assets/             # Images folder
    ├── logo.png        # Your logo (add your file here)
    ├── profile.jpg     # Your profile picture (add your file here)
    ├── artwork1.jpg    # Gallery image 1 (add your file here)
    ├── artwork2.jpg    # Gallery image 2 (add your file here)
    ├── artwork3.jpg    # Gallery image 3 (add your file here)
    ├── artwork4.jpg    # Gallery image 4 (add your file here)
    ├── artwork5.jpg    # Gallery image 5 (add your file here)
    ├── artwork6.jpg    # Gallery image 6 (add your file here)
    ├── artwork7.jpg    # Gallery image 7 (add your file here)
    ├── artwork8.jpg    # Gallery image 8 (add your file here)
    ├── artwork9.jpg    # Gallery image 9 (add your file here)
    └── artwork10.jpg   # Gallery image 10 (add your file here)
```

## 🚀 Setup Instructions

### 1. Add Your Images
Place your images in the `assets` folder:
- **logo.png**: Your artist logo (recommended: 200x200px, transparent background)
- **profile.jpg**: Your profile photo (recommended: 600x600px, square format)
- **artwork1.jpg - artwork10.jpg**: Your artwork images (recommended: 800x800px or higher)

> **Note**: The website has fallback placeholder images, so it will work even without adding images immediately.

### 2. Customize Content

#### Update Personal Information
Edit `index.html` and replace the following:

**Contact Email** (appears in multiple places):
```html
<!-- Find and replace -->
noble@artportfolio.com
```

**Phone Number**:
```html
+1 (234) 567-890
```

**Location**:
```html
Art District, Creative City
```

**Social Media Links**:
```html
<!-- Update these href values -->
<a href="https://facebook.com/yourprofile" ...>
<a href="https://instagram.com/yourprofile" ...>
<a href="https://twitter.com/yourprofile" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="https://pinterest.com/yourprofile" ...>
```

#### Customize About Section
Edit the text in the About section to reflect your artistic journey:
- Introduction paragraph
- Description text
- Statistics (number of artworks, exhibitions, clients)

#### Update Resume and Cover Letter
Edit the content in the resume and cover letter modals:
- Professional summary
- Education
- Experience
- Awards
- Cover letter text

#### Customize Gallery
Update artwork titles and descriptions in the gallery section:
```html
<h3 class="artwork-title">Your Artwork Title</h3>
<p class="artwork-description">Medium/Technique</p>
```

### 3. Launch the Website

#### Option A: Local Viewing
1. Simply double-click `index.html` to open in your browser
2. All animations and features will work locally

#### Option B: Web Hosting
Upload all files to your web hosting service:
- **Free Options**: GitHub Pages, Netlify, Vercel
- **Paid Options**: Any web hosting provider

**For GitHub Pages**:
1. Create a new repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### 4. Testing

✅ **Checklist**:
- [ ] Test all navigation links
- [ ] Click "View Resume" and "View Cover Letter" buttons
- [ ] Click on gallery artworks to view full-screen
- [ ] Test contact form submission
- [ ] Check social media links
- [ ] Test on mobile devices
- [ ] Verify smooth scrolling works
- [ ] Ensure all images load correctly

## 🎨 Customization Tips

### Change Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6C5CE7;
    --secondary-color: #FF6B6B;
    --accent-color: #FFD93D;
    /* Add more colors as needed */
}
```

### Modify Animations
All animations are defined in `styles.css`. Look for:
- `@keyframes` declarations
- `transition` properties
- `animation` properties

### Add More Artworks
To add more than 10 artworks:
1. Copy an artwork card in `index.html`
2. Update the artwork number
3. Add a new color theme in `styles.css`

### Change Fonts
Update the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update font-family in `styles.css`.

## 📱 Browser Support
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Images not showing?
- Check file names match exactly (case-sensitive)
- Ensure images are in the `assets` folder
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### Animations not working?
- Ensure JavaScript is enabled in browser
- Check browser console for errors (F12)
- Try a different browser

### Form not working?
- The form opens your default email client
- Make sure you have an email client configured
- Update the email address in `script.js` if needed

## 📄 License
This website template is free to use for personal and commercial projects.

## 🤝 Support
For questions or customization help, feel free to reach out!

---

**Made with ❤️ and Creativity**

*Last Updated: October 2025*

