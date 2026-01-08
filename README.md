# FitnessTracker Marketing Website

A modern, science-focused marketing website for the FitnessTracker mobile app. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Overview

This website serves as the public-facing presence for FitnessTracker, providing:
- Marketing and feature showcase
- Legal documentation (Privacy Policy, Terms of Use)
- Support and FAQ resources
- Universal link infrastructure for iOS/Android deep linking

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
fitnesstracker-site/
├── app/
│   ├── page.tsx                    # Home page
│   ├── privacy-policy/page.tsx     # Privacy Policy
│   ├── terms-of-use/page.tsx       # Terms of Use
│   ├── support/page.tsx            # Support & FAQ
│   └── layout.tsx                  # Root layout
├── public/
│   └── .well-known/
│       ├── apple-app-site-association  # iOS Universal Links
│       └── assetlinks.json             # Android App Links
├── package.json
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd fitnesstracker-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔗 Universal Links Setup

### iOS Universal Links

The `apple-app-site-association` file is located at:
```
public/.well-known/apple-app-site-association
```

**Before deploying, you MUST update:**
1. Replace `TEAM_ID` with your Apple Developer Team ID
2. Replace `com.yourcompany.fitnesstracker` with your actual bundle identifier

**Supported paths:**
- `/reset-password/*` - Password reset deep links
- `/verify-email/*` - Email verification deep links
- `/open/*` - General app deep links

### Android App Links

The `assetlinks.json` file is located at:
```
public/.well-known/assetlinks.json
```

**Before deploying, you MUST update:**
1. Replace `com.yourcompany.fitnesstracker` with your actual package name
2. Replace `YOUR_APP_SHA256_FINGERPRINT_HERE` with your app's SHA-256 fingerprint

**To get your SHA-256 fingerprint:**
```bash
# For debug keystore
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

# For release keystore
keytool -list -v -keystore /path/to/your/keystore.jks -alias your-key-alias
```

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Environment Variables

No environment variables are required for the basic site. If you add features that need them:

1. Create `.env.local` for local development
2. Add variables in Vercel dashboard under Settings → Environment Variables

## 🔧 Configuration

### Custom Domain

Once deployed to Vercel:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `fitnesstracker.app`)
4. Update DNS records as instructed
5. SSL certificates are automatically provisioned

### Universal Links with Custom Domain

After setting up your domain, the universal link files will be accessible at:
- `https://yourdomain.com/.well-known/apple-app-site-association`
- `https://yourdomain.com/.well-known/assetlinks.json`

**Important:** These files must be served with the correct content-type:
- iOS: `application/json` or `application/pkcs7-mime`
- Android: `application/json`

Next.js/Vercel handles this automatically.

## 📝 Content Updates

### Updating Legal Pages

Edit the following files to update legal content:
- `app/privacy-policy/page.tsx` - Privacy Policy
- `app/terms-of-use/page.tsx` - Terms of Use

Remember to update the "Last updated" date at the top of each page.

### Updating FAQ

Edit `app/support/page.tsx` to add/modify FAQ items. Each FAQ is a `<details>` element.

### Updating Features

Edit `app/page.tsx` to modify:
- Hero section
- Feature cards
- Statistics
- Call-to-action sections

## 🎨 Design System

The site uses a consistent dark theme with:
- **Primary Colors:** Blue (#3B82F6) and Purple (#A855F7)
- **Background:** Slate-950 to Slate-900 gradient
- **Text:** White and Slate-400
- **Borders:** Slate-700/800

### Key Components

All pages share:
- Fixed navigation bar with blur effect
- Consistent footer with links
- Responsive design (mobile-first)
- Smooth transitions and hover effects

## 🔍 SEO Considerations

To improve SEO, consider adding:

1. **Metadata** in each page:
```typescript
export const metadata = {
  title: 'FitnessTracker - AI-Powered Fitness Intelligence',
  description: 'Track workouts, analyze progress...',
};
```

2. **Sitemap** (`app/sitemap.ts`)
3. **Robots.txt** (`app/robots.ts`)
4. **Open Graph images** for social sharing

## 🧪 Testing Universal Links

### iOS Testing

1. Deploy the site with correct Team ID and bundle identifier
2. Install your app on a physical device (simulators don't support universal links reliably)
3. Send yourself a link via Messages or Notes
4. Tap the link - it should open the app

### Android Testing

1. Deploy the site with correct package name and SHA-256 fingerprint
2. Install your app on a device
3. Use `adb` to test:
```bash
adb shell am start -a android.intent.action.VIEW -d "https://yourdomain.com/reset-password/test"
```

## 📦 Build & Production

### Build for production:
```bash
npm run build
```

### Test production build locally:
```bash
npm run start
```

### Analyze bundle size:
```bash
npm run build
# Check .next/analyze/ for bundle analysis
```

## 🤝 Integration with Mobile App

This website is designed to work seamlessly with the FitnessTracker mobile app located at:
```
/Users/innocent_kushal/Documents/Cline/FitnessTracker/
```

Both projects share the same workspace context, making it easy to:
- Reference app features accurately
- Maintain consistent branding
- Coordinate universal link paths
- Share documentation

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [iOS Universal Links Guide](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app)
- [Android App Links Guide](https://developer.android.com/training/app-links)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 🐛 Troubleshooting

### Universal Links Not Working

**iOS:**
- Verify Team ID and bundle identifier are correct
- Ensure the file is served over HTTPS
- Check that the domain is added in Xcode under Associated Domains
- Clear Safari cache and restart device

**Android:**
- Verify package name and SHA-256 fingerprint
- Ensure the file is served over HTTPS
- Check intent filters in AndroidManifest.xml
- Use `adb` to verify link handling

### Build Errors

If you encounter build errors:
1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Run `npm run build`

## 📄 License

This project is part of the FitnessTracker application suite.

## 📧 Contact

For questions or support:
- Email: support@fitnesstracker.app
- Website: [Your deployed URL]

---

Built with ❤️ for the FitnessTracker community
