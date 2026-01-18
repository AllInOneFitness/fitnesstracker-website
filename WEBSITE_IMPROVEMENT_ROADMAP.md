# StrengthLens Website Improvement Roadmap
**Created:** January 17, 2026  
**Status:** Planning Phase

## Current State

✅ **Completed (Jan 17, 2026)**
- Vercel Analytics installed and configured (visitor tracking, page views, engagement)
- Vercel Speed Insights installed and configured (Core Web Vitals, performance metrics)
- Modern Next.js 16 site with App Router
- Core pages: Home, Privacy Policy, Terms of Use, Support
- Real app screenshots integrated with animations
- Universal links infrastructure (iOS & Android)
- Responsive design, optimized performance

## Vision

Transform the StrengthLens website from a basic marketing brochure into a high-converting, SEO-optimized product hub that:
1. **Attracts** the right audience (serious strength athletes)
2. **Converts** visitors into app users/waitlist signups
3. **Educates** users on science-backed training principles
4. **Builds trust** through transparency and authority

---

## Phase 1: Conversion & Clarity (High Priority)
**Timeline:** 1-3 working sessions  
**Goal:** Maximize conversion rate from existing traffic

### 1.1 Hero Section Optimization
**Problem:** Current hero is informative but lacks clear action path  
**Solution:**
- [ ] Add prominent **primary CTA** above the fold
  - Options: "Join Waitlist", "Download on App Store", "Get Early Access"
  - Large, gradient button matching brand (blue-purple)
  - Track clicks with custom event in Vercel Analytics
- [ ] Add **secondary CTA** for explorers
  - Options: "View Features", "See How It Works", "Watch Demo"
  - Subtle ghost button style
- [ ] Tighten hero copy to 1-2 lines
  - Current: Multiple value props
  - Proposed: "Science-Backed Strength Training for Serious Athletes"
  - Sub-line: "Track, analyze, and optimize your training with AI-powered insights"

### 1.2 Trust & Social Proof Strip
**Problem:** Visitors need immediate credibility signals  
**Solution:**
- [ ] Add trust section below hero (before features)
  - **Security badge**: "Enterprise-Grade Encryption"
  - **Privacy badge**: "Your Data Stays Private"
  - **Science badge**: "Evidence-Based Methodology"
- [ ] Reserve space for testimonials/reviews
  - Placeholder component ready for future quotes
  - Structure: Photo, name, achievement, quote
  - Example: "Added 60 lbs to my squat in 16 weeks"

### 1.3 "Who This Is For" Section
**Problem:** Visitors can't quickly self-identify  
**Solution:**
- [ ] Add 3-4 persona cards after hero
  - **Competitive Athletes**: Track PRs, optimize periodization
  - **Busy Professionals**: Efficient training, data-driven decisions
  - **Coaches**: Monitor multiple athletes, export reports
  - **Data Enthusiasts**: Deep analytics, custom visualizations

### 1.4 Event Tracking & Funnels
**Problem:** We can see page views but not intent/conversion  
**Solution:**
- [ ] Implement custom event tracking
  - Track all CTA clicks (primary, secondary, footer)
  - Track navigation clicks (features, pricing, support)
  - Track external links (email, social media when added)
- [ ] Create conversion funnels in Vercel Analytics
  - Home → CTA click → (external: app store)
  - Home → Features → CTA click
  - Support → Email click
- [ ] Set up weekly analytics review
  - Monitor conversion rates
  - Identify drop-off points
  - A/B test opportunities

**Expected Impact:**
- 20-40% increase in CTA click-through rate
- Clear data on what messaging resonates
- Foundation for continuous optimization

---

## Phase 2: SEO & Content Depth (Medium Priority)
**Timeline:** 1-2 weeks total work  
**Goal:** Increase organic traffic and establish authority

### 2.1 Technical SEO Foundation
- [ ] Add comprehensive metadata to all pages
  - Title tags (unique, keyword-optimized)
  - Meta descriptions (compelling, 150-160 chars)
  - Open Graph tags (social sharing)
  - Twitter Card tags
  - Canonical URLs
- [ ] Create `sitemap.xml` via Next.js app route
  - Auto-generate from page structure
  - Include lastmod dates
  - Submit to Google Search Console
- [ ] Create `robots.txt`
  - Allow all crawlers
  - Point to sitemap
  - Disallow admin/private paths (if any)
- [ ] Add structured data (JSON-LD)
  - Organization schema
  - SoftwareApplication schema
  - FAQ schema for support page

### 2.2 New Pages for Discovery

#### `/features` Page
**Purpose:** Deep dive into capabilities, rank for feature keywords  
**Structure:**
- [ ] Hero: "Everything You Need to Build Strength"
- [ ] Feature categories (6-8 sections):
  - **Workout Logging**: 1000+ exercises, offline-first, custom exercises
  - **Progress Analytics**: 1RM tracking, volume trends, muscle balance
  - **AI Coach**: Personalized insights, deload detection, recovery recommendations
  - **RPE Tracking**: Subjective intensity, fatigue management
  - **Program Builder**: Custom programs, periodization templates
  - **Data Export**: CSV export, backup, portability
- [ ] Each section: Icon, title, 2-3 bullet points, screenshot
- [ ] Bottom CTA: "Start Training Smarter Today"

#### `/pricing` Page
**Purpose:** Transparency, rank for pricing keywords, reduce support questions  
**Structure:**
- [ ] 3-tier comparison table
  - **Free**: Core logging, basic analytics, 1 active program
  - **Plus ($9.99/mo)**: AI insights, unlimited programs, advanced charts
  - **Pro ($19.99/mo)**: Priority support, data export, coach features
- [ ] FAQ section: "Can I switch plans?", "What payment methods?", etc.
- [ ] Highlight most popular tier (Plus)
- [ ] Annual discount callout (if applicable)

### 2.3 Educational Content Hub

#### `/learn` or `/blog` Section
**Purpose:** SEO traffic, establish authority, educate users  
**Initial Topics (5-7 articles):**
- [ ] "What is RPE and How to Use It in Your Training"
- [ ] "Understanding Progressive Overload: The Science of Getting Stronger"
- [ ] "How to Calculate Your 1RM (and Why It Matters)"
- [ ] "Training Volume: How Much Is Enough?"
- [ ] "Reading Your Training Data: 5 Key Metrics"
- [ ] "Deload Weeks: When and Why to Back Off"
- [ ] "Case Study: How [User] Added 60 lbs to Their Squat"

**Content Strategy:**
- 1000-1500 words per article
- Include real screenshots from app
- Link to relevant app features
- End with CTA to download app
- Optimize for long-tail keywords
- Share on social media (future)

**Expected Impact:**
- 50-100+ organic visitors/month within 3 months
- Establish StrengthLens as thought leader
- Reduce support questions (self-service education)

---

## Phase 3: Interactive & Advanced Features (Future)
**Timeline:** 2-4 weeks total work  
**Goal:** Differentiate from competitors, provide immediate value

### 3.1 Web-Based Tools

#### 1RM Calculator
**Purpose:** Provide immediate value, capture emails, demonstrate expertise  
**Features:**
- [ ] Simple form: Weight lifted, reps completed
- [ ] Calculate using Epley formula (matches app)
- [ ] Show result + explanation
- [ ] Optional: Email capture for "Save your results"
- [ ] CTA: "Track all your PRs in the app"

#### Volume Balance Visualizer
**Purpose:** Show power of analytics, drive app downloads  
**Features:**
- [ ] Input: Exercises done this week (simplified)
- [ ] Output: Muscle group volume chart (like app screenshot)
- [ ] Highlight imbalances (e.g., "Your back volume is 2x your chest")
- [ ] CTA: "Get automatic tracking in the app"

#### Interactive Analytics Tour
**Purpose:** Let visitors explore real analytics without downloading  
**Features:**
- [ ] Step-through demo of key charts
- [ ] Use anonymized real data or realistic mock data
- [ ] Tooltips explaining each metric
- [ ] "This is what you'll see in the app" messaging

### 3.2 Account-Adjacent Web Features (Post-Launch)

#### Web Dashboard (Read-Only)
**Purpose:** Convenience, cross-platform access  
**Features:**
- [ ] Login with same credentials as app
- [ ] View recent workouts (last 7 days)
- [ ] View current PRs
- [ ] View this week's volume summary
- [ ] View AI coach insights
- [ ] Link to "Open in app" for full features

**Technical Considerations:**
- Requires Supabase auth integration on web
- Read-only to keep mobile app as primary
- Responsive design for tablet/desktop
- Deep links to open specific screens in mobile app

### 3.3 Experimentation & Optimization

#### A/B Testing Framework
**Purpose:** Data-driven optimization  
**Tools:** Vercel Edge Config + Analytics, or Optimizely/VWO  
**Tests to Run:**
- [ ] Hero headline variations
  - "Science-Backed Strength Training" vs "AI-Powered Workout Tracker"
- [ ] CTA button text
  - "Get Started" vs "Download Now" vs "Join Waitlist"
- [ ] CTA button color
  - Blue-purple gradient vs solid blue vs solid purple
- [ ] Feature ordering on homepage
  - Analytics-first vs AI-first vs Logging-first
- [ ] Pricing page layout
  - Table vs cards vs list

**Process:**
1. Hypothesis: "Changing X will increase Y by Z%"
2. Set up test with 50/50 traffic split
3. Run for 2 weeks or 1000+ visitors
4. Analyze with Vercel Analytics
5. Implement winner, document learnings

---

## Phase 4: Growth & Distribution (Long-Term)
**Timeline:** Ongoing  
**Goal:** Drive consistent traffic and conversions

### 4.1 Content Marketing
- [ ] Publish 2-4 blog posts per month
- [ ] Guest posts on fitness/tech blogs
- [ ] Reddit AMAs (r/fitness, r/weightroom)
- [ ] YouTube videos (app tutorials, training tips)
- [ ] Podcast appearances (fitness, tech, startup)

### 4.2 SEO Expansion
- [ ] Keyword research (Ahrefs, SEMrush)
- [ ] Competitor analysis (what ranks for them?)
- [ ] Backlink building (guest posts, partnerships)
- [ ] Local SEO (if applicable)
- [ ] App store optimization (ASO) coordination

### 4.3 Social Proof & Community
- [ ] Testimonials section on homepage
- [ ] Case studies page (detailed user stories)
- [ ] User-generated content (share workout screenshots)
- [ ] Community forum or Discord
- [ ] Influencer partnerships (micro-influencers in strength training)

### 4.4 Conversion Rate Optimization (CRO)
- [ ] Heatmaps (Hotjar, Microsoft Clarity)
- [ ] Session recordings (identify friction points)
- [ ] Exit-intent popups (offer lead magnet)
- [ ] Live chat or chatbot (answer questions)
- [ ] Email capture for waitlist/newsletter
- [ ] Drip email campaign for nurturing leads

---

## Success Metrics

### Phase 1 (Conversion)
- **Primary:** CTA click-through rate (target: 5-10%)
- **Secondary:** Bounce rate (target: <50%), Time on page (target: >2 min)

### Phase 2 (SEO)
- **Primary:** Organic traffic (target: 100+ visitors/month by month 3)
- **Secondary:** Keyword rankings (target: top 10 for 5+ terms), Backlinks (target: 10+ quality links)

### Phase 3 (Interactive)
- **Primary:** Tool usage rate (target: 20% of visitors use calculator)
- **Secondary:** Email capture rate (target: 10% of tool users)

### Phase 4 (Growth)
- **Primary:** Monthly traffic growth (target: 20% MoM)
- **Secondary:** Conversion rate (target: 3-5% visitor → app install)

---

## Technical Debt & Maintenance

### Ongoing Tasks
- [ ] Monitor Vercel Analytics weekly
- [ ] Review Speed Insights monthly (maintain >90 performance score)
- [ ] Update screenshots when app UI changes
- [ ] Keep legal pages current (privacy policy, terms)
- [ ] Security updates (npm audit, dependency updates)
- [ ] Broken link checks (monthly)
- [ ] Mobile responsiveness testing (new devices)

### Future Considerations
- [ ] Internationalization (i18n) for non-English markets
- [ ] Dark mode toggle (if user preference)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Performance budget (keep bundle <200kb)
- [ ] CDN optimization (images, fonts)

---

## Resource Requirements

### Phase 1 (Immediate)
- **Development:** 8-12 hours
- **Design:** 4-6 hours (CTA buttons, trust badges)
- **Copywriting:** 2-4 hours (hero, CTAs, personas)

### Phase 2 (SEO & Content)
- **Development:** 12-16 hours (new pages, technical SEO)
- **Content Writing:** 20-30 hours (5-7 blog posts)
- **SEO Research:** 4-6 hours (keywords, competitors)

### Phase 3 (Interactive)
- **Development:** 20-30 hours (calculators, dashboard)
- **Design:** 8-12 hours (tool UIs, interactions)
- **Backend:** 8-12 hours (if web dashboard requires API)

### Phase 4 (Growth)
- **Ongoing:** 10-20 hours/month (content, optimization, community)

---

## Decision Points

Before starting each phase, decide:

1. **Phase 1:** Which CTA to prioritize?
   - App Store/Play Store links (if live)
   - Waitlist signup (if pre-launch)
   - Email capture for updates

2. **Phase 2:** Blog vs. Learn section?
   - Blog: More casual, broader topics, easier to share
   - Learn: More authoritative, focused on training science

3. **Phase 3:** Which tool to build first?
   - 1RM Calculator: Easiest, most universal
   - Volume Visualizer: More unique, shows app power
   - Interactive Tour: Most complex, highest engagement

4. **Phase 4:** Paid vs. organic growth?
   - Paid: Google Ads, Facebook Ads (faster, costly)
   - Organic: SEO, content, community (slower, sustainable)

---

## Next Steps

**Immediate (This Week):**
1. Review this roadmap and prioritize phases
2. Decide on primary CTA for Phase 1
3. Gather any existing testimonials or user quotes
4. Set up weekly analytics review cadence

**Short-Term (Next 2 Weeks):**
1. Implement Phase 1.1 (Hero optimization)
2. Implement Phase 1.2 (Trust signals)
3. Set up event tracking
4. Review initial conversion data

**Medium-Term (Next Month):**
1. Complete Phase 1 (all conversion improvements)
2. Start Phase 2.1 (Technical SEO)
3. Plan first 3 blog posts
4. Research keywords and competitors

---

## Notes

- This roadmap is flexible—adjust based on data and priorities
- Focus on one phase at a time to avoid spreading too thin
- Measure everything—let data guide decisions
- Quick wins (Phase 1) fund longer-term investments (Phase 3-4)
- The website should evolve with the app—keep them in sync

**Last Updated:** January 17, 2026  
**Next Review:** After Phase 1 completion
