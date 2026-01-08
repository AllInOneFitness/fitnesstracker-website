# 🚀 Deployment Checklist

Use this checklist to track your deployment progress. Check off each item as you complete it.

## Pre-Deployment Setup

- [x] Website development complete
- [x] Git repository initialized
- [x] Initial commit created
- [ ] All content reviewed and finalized

## GitHub Setup

- [ ] GitHub account ready
- [ ] New repository created: `fitnesstracker-website`
- [ ] Repository URL copied
- [ ] Remote added to local git: `git remote add origin [URL]`
- [ ] Code pushed to GitHub: `git push -u origin main`

## Universal Links Configuration

### iOS Configuration
- [ ] Apple Developer Team ID obtained
- [ ] Bundle identifier confirmed
- [ ] Updated `public/.well-known/apple-app-site-association`
- [ ] Changes committed and pushed

### Android Configuration
- [ ] Package name confirmed
- [ ] SHA-256 fingerprint obtained (debug or release)
- [ ] Updated `public/.well-known/assetlinks.json`
- [ ] Changes committed and pushed

## Vercel Deployment

- [ ] Vercel account created/logged in
- [ ] GitHub connected to Vercel
- [ ] Repository imported to Vercel
- [ ] Deployment successful
- [ ] Preview URL tested and working

## Domain Setup

- [ ] Domain name decided
- [ ] Domain purchased from registrar
- [ ] Domain added to Vercel project
- [ ] DNS records configured (nameservers or A/CNAME)
- [ ] DNS propagation complete (24-48 hours)
- [ ] Domain verified in Vercel
- [ ] SSL certificate provisioned
- [ ] Custom domain accessible

## Mobile App Updates

### iOS App
- [ ] Associated Domains updated in Xcode
- [ ] Production domain added
- [ ] App rebuilt with new configuration
- [ ] Uploaded to TestFlight/App Store

### Android App
- [ ] Intent filters updated in AndroidManifest.xml
- [ ] Production domain added
- [ ] App rebuilt with new configuration
- [ ] Uploaded to Play Console

### Supabase Configuration
- [ ] Site URL updated to production domain
- [ ] Redirect URLs updated with production paths
- [ ] Email templates updated with production links

## Testing

### Website Testing
- [ ] Home page loads correctly
- [ ] Privacy Policy page accessible
- [ ] Terms of Use page accessible
- [ ] Support/FAQ page accessible
- [ ] Mobile responsiveness verified
- [ ] All links working
- [ ] No console errors

### Universal Links Testing
- [ ] iOS universal links working (physical device)
- [ ] Android app links working (physical device)
- [ ] `.well-known/apple-app-site-association` accessible
- [ ] `.well-known/assetlinks.json` accessible
- [ ] Password reset links open app
- [ ] Email verification links open app

### Performance Testing
- [ ] Page load speed acceptable
- [ ] Images optimized and loading
- [ ] No broken links
- [ ] SEO meta tags present

## Post-Deployment

- [ ] App Store listing updated with website URL
- [ ] Play Store listing updated with website URL
- [ ] Privacy Policy link added to app stores
- [ ] Terms of Use link added to app stores
- [ ] Support email configured
- [ ] Analytics set up (optional)
- [ ] Monitoring set up (optional)

## Marketing & Launch

- [ ] Social media announcement prepared
- [ ] Product Hunt submission (optional)
- [ ] Press release (optional)
- [ ] Email to beta testers
- [ ] Update app screenshots with website URL

## Documentation

- [ ] Deployment guide reviewed
- [ ] Team members informed of new domain
- [ ] Documentation updated with production URLs
- [ ] Backup of configuration files created

---

## Quick Commands Reference

```bash
# Push to GitHub
cd /Users/innocent_kushal/Documents/Cline/fitnesstracker-site
git add .
git commit -m "Your message"
git push

# Test build locally
npm run build
npm run start

# Deploy to Vercel (CLI)
vercel --prod
```

---

## Important URLs to Save

- **GitHub Repository:** `https://github.com/YOUR_USERNAME/fitnesstracker-website`
- **Vercel Dashboard:** `https://vercel.com/dashboard`
- **Production Website:** `https://your-domain.com`
- **Vercel Preview:** `https://fitnesstracker-website.vercel.app`

---

## Notes & Issues

Use this space to track any issues or notes during deployment:

```
Date: ___________
Issue: 
Solution:

Date: ___________
Issue:
Solution:
```

---

**Last Updated:** January 8, 2026
**Status:** Ready for deployment
