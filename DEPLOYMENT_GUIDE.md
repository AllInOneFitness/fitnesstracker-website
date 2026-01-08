# 🚀 FitnessTracker Website Deployment Guide

Complete step-by-step guide to deploy your FitnessTracker marketing website to production.

## ✅ Current Status

- [x] Git repository initialized
- [x] Initial commit created
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Universal links configured
- [ ] Deployed to Vercel
- [ ] Custom domain configured

---

## 📋 Step 1: Create GitHub Repository

### 1.1 Create New Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name:** `fitnesstracker-website` (or your preferred name)
   - **Description:** "Marketing website for FitnessTracker - AI-powered fitness intelligence"
   - **Visibility:** Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### 1.2 Copy the Repository URL

After creating, GitHub will show you a page with setup instructions. Copy the repository URL, which looks like:
```
https://github.com/YOUR_USERNAME/fitnesstracker-website.git
```

---

## 📤 Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
# Navigate to the project directory
cd /Users/innocent_kushal/Documents/Cline/fitnesstracker-site

# Add the remote repository (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/fitnesstracker-website.git

# Push the code
git branch -M main
git push -u origin main
```

**Note:** If prompted for credentials, you may need to use a Personal Access Token instead of your password. See [GitHub's guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

---

## 🔧 Step 3: Configure Universal Links (IMPORTANT!)

Before deploying, you MUST update the universal link configuration files with your actual app credentials.

### 3.1 Update iOS Universal Links

**File:** `public/.well-known/apple-app-site-association`

**What to update:**
1. Replace `TEAM_ID` with your Apple Developer Team ID
   - Find it at: [Apple Developer Account](https://developer.apple.com/account) → Membership
2. Replace `com.yourcompany.fitnesstracker` with your actual bundle identifier
   - Find it in your Xcode project settings

**Example:**
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "ABC123XYZ.com.mycompany.fitnesstracker",
        "paths": ["/reset-password/*", "/verify-email/*", "/open/*"]
      }
    ]
  }
}
```

### 3.2 Update Android App Links

**File:** `public/.well-known/assetlinks.json`

**What to update:**
1. Replace `com.yourcompany.fitnesstracker` with your actual package name
2. Replace `YOUR_APP_SHA256_FINGERPRINT_HERE` with your app's SHA-256 fingerprint

**To get your SHA-256 fingerprint:**

For debug builds:
```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep SHA256
```

For release builds:
```bash
keytool -list -v -keystore /path/to/your/release.keystore -alias your-key-alias | grep SHA256
```

**Example:**
```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.mycompany.fitnesstracker",
    "sha256_cert_fingerprints": [
      "14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"
    ]
  }
}]
```

### 3.3 Commit and Push Changes

After updating both files:
```bash
cd /Users/innocent_kushal/Documents/Cline/fitnesstracker-site
git add public/.well-known/
git commit -m "Configure universal links with production credentials"
git push
```

---

## 🌐 Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Authorize Vercel to access your GitHub account if needed
5. Select your `fitnesstracker-website` repository
6. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)
7. Click **"Deploy"**

Vercel will build and deploy your site. This takes 2-3 minutes.

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd /Users/innocent_kushal/Documents/Cline/fitnesstracker-site

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? fitnesstracker-website
# - In which directory is your code located? ./
# - Want to override settings? No
```

---

## 🌍 Step 5: Configure Custom Domain

### 5.1 Purchase a Domain

Popular domain registrars:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

**Recommended domain names:**
- `fitnesstracker.app`
- `fitnesstracker.io`
- `getfitnesstracker.com`
- `myfitnesstracker.app`

### 5.2 Add Domain to Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `fitnesstracker.app`)
4. Click **"Add"**

### 5.3 Configure DNS Records

Vercel will show you the DNS records you need to add. There are two options:

#### Option A: Using Nameservers (Recommended - Easiest)

Vercel will provide nameservers like:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

In your domain registrar:
1. Go to DNS settings
2. Change nameservers to Vercel's nameservers
3. Save changes

**Propagation time:** 24-48 hours (usually faster)

#### Option B: Using A/CNAME Records

Add these records in your domain registrar's DNS settings:

For root domain (`fitnesstracker.app`):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

For www subdomain (`www.fitnesstracker.app`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Propagation time:** 1-24 hours

### 5.4 Verify Domain

1. After configuring DNS, return to Vercel dashboard
2. Click **"Refresh"** next to your domain
3. Once verified, Vercel will automatically provision an SSL certificate
4. Your site will be live at your custom domain! 🎉

---

## 🔗 Step 6: Update Mobile App Configuration

After your domain is live, update your mobile app to use the production domain.

### 6.1 Update iOS Associated Domains

In Xcode:
1. Select your project → Target → **Signing & Capabilities**
2. Find **Associated Domains**
3. Update the domain to your production URL:
   ```
   applinks:fitnesstracker.app
   applinks:www.fitnesstracker.app
   ```

### 6.2 Update Android Intent Filters

In `AndroidManifest.xml`:
```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" />
    <data android:host="fitnesstracker.app" />
    <data android:host="www.fitnesstracker.app" />
</intent-filter>
```

### 6.3 Update Supabase Auth Configuration

In your Supabase dashboard:
1. Go to **Authentication** → **URL Configuration**
2. Update **Site URL** to: `https://fitnesstracker.app`
3. Add to **Redirect URLs**:
   - `https://fitnesstracker.app/reset-password/*`
   - `https://fitnesstracker.app/verify-email/*`
   - `fitnesstracker://reset-password/*` (fallback)
   - `fitnesstracker://verify-email/*` (fallback)

---

## ✅ Step 7: Test Everything

### 7.1 Test Website

1. Visit your domain: `https://fitnesstracker.app`
2. Check all pages:
   - Home page
   - Privacy Policy
   - Terms of Use
   - Support/FAQ
3. Verify mobile responsiveness
4. Check browser console for errors

### 7.2 Test Universal Links

#### iOS Testing:
1. Install your app on a physical iOS device (TestFlight or development build)
2. Send yourself a test link via Messages or Notes:
   ```
   https://fitnesstracker.app/reset-password/test123
   ```
3. Tap the link - it should open your app (not Safari)
4. Verify the deep link is handled correctly in your app

#### Android Testing:
1. Install your app on an Android device
2. Use `adb` to test:
   ```bash
   adb shell am start -a android.intent.action.VIEW \
     -d "https://fitnesstracker.app/reset-password/test123"
   ```
3. Verify the app opens and handles the deep link

### 7.3 Verify Universal Link Files

Check that these URLs are accessible:
- `https://fitnesstracker.app/.well-known/apple-app-site-association`
- `https://fitnesstracker.app/.well-known/assetlinks.json`

Both should return JSON (not 404).

---

## 🔄 Step 8: Continuous Deployment

Good news! Vercel automatically sets up continuous deployment:

- **Every push to `main` branch** → Automatically deploys to production
- **Every pull request** → Creates a preview deployment
- **Every commit** → Gets a unique preview URL

To deploy updates:
```bash
cd /Users/innocent_kushal/Documents/Cline/fitnesstracker-site
# Make your changes
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically build and deploy within 2-3 minutes.

---

## 📊 Step 9: Monitor and Analytics (Optional)

### Add Vercel Analytics

1. In Vercel dashboard, go to **Analytics**
2. Click **"Enable Analytics"**
3. Add the analytics script to your site (Vercel provides instructions)

### Add Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to your site in `app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🐛 Troubleshooting

### Issue: Universal Links Not Working

**iOS:**
- Clear Safari cache and restart device
- Verify Team ID and bundle identifier are correct
- Check that domain is added in Xcode Associated Domains
- Ensure file is served over HTTPS with correct content-type
- Try deleting and reinstalling the app

**Android:**
- Verify package name and SHA-256 fingerprint
- Check intent filters in AndroidManifest.xml
- Clear app data and cache
- Use `adb` to test link handling
- Verify `assetlinks.json` is accessible

### Issue: Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Common fixes:
   - Ensure all dependencies are in `package.json`
   - Check for TypeScript errors
   - Verify Next.js version compatibility
3. Test build locally:
   ```bash
   npm run build
   ```

### Issue: Domain Not Verifying

1. Wait 24-48 hours for DNS propagation
2. Use [DNS Checker](https://dnschecker.org) to verify propagation
3. Ensure DNS records are correct
4. Try using Vercel nameservers instead of A/CNAME records

### Issue: SSL Certificate Not Provisioning

1. Ensure domain is verified in Vercel
2. Wait up to 24 hours for certificate provisioning
3. Check that DNS is correctly configured
4. Contact Vercel support if issue persists

---

## 📝 Quick Reference Commands

```bash
# Navigate to project
cd /Users/innocent_kushal/Documents/Cline/fitnesstracker-site

# Check git status
git status

# Add and commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel (if using CLI)
vercel --prod
```

---

## 🎯 Next Steps After Deployment

1. **Update App Store Listings:**
   - Add website URL to app descriptions
   - Link to Privacy Policy and Terms of Use

2. **Set Up Email:**
   - Configure email forwarding for support@fitnesstracker.app
   - Update contact email in website footer

3. **SEO Optimization:**
   - Submit sitemap to Google Search Console
   - Add meta descriptions to all pages
   - Create Open Graph images for social sharing

4. **Marketing:**
   - Share website on social media
   - Add to Product Hunt
   - Create blog posts about features

5. **Monitoring:**
   - Set up uptime monitoring (e.g., UptimeRobot)
   - Configure error tracking (e.g., Sentry)
   - Review analytics regularly

---

## 📞 Support

If you encounter any issues:

1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Review this guide's troubleshooting section
4. Contact Vercel support (available in dashboard)

---

## ✨ Congratulations!

Once you complete all these steps, your FitnessTracker marketing website will be:
- ✅ Live on the internet
- ✅ Accessible via your custom domain
- ✅ Secured with HTTPS
- ✅ Configured for universal links
- ✅ Automatically deploying on every push

**Your website will be at:** `https://fitnesstracker.app` (or your chosen domain)

Good luck with your launch! 🚀
