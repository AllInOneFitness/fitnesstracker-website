import Link from 'next/link';
import Logo from '../components/Logo';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold text-white">StrengthLens</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#features" className="text-slate-300 hover:text-white transition">Features</Link>
              <Link href="/#science" className="text-slate-300 hover:text-white transition">Science</Link>
              <Link href="/privacy-policy" className="text-white font-medium">Privacy</Link>
              <Link href="/support" className="text-slate-300 hover:text-white transition">Support</Link>
            </div>
            <Link href="/" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 mb-12">Last updated: January 8, 2026</p>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-slate-300 leading-relaxed">
                At StrengthLens, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our mobile application and services. 
                We are committed to protecting your personal data and being transparent about our practices.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
              
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">1.1 Information You Provide</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Account Information:</strong> Name, email address, password (encrypted)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Profile Data:</strong> Age, gender, fitness goals, experience level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Workout Data:</strong> Exercise logs, sets, reps, weights, RPE ratings, workout duration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Progress Data:</strong> Body measurements, progress photos (stored locally on your device)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">1.2 Automatically Collected Information</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span><strong>Device Information:</strong> Device type, operating system, unique device identifiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span><strong>Usage Data:</strong> App features used, session duration, interaction patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span><strong>Performance Data:</strong> Crash reports, error logs (anonymized)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Your Information</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Provide Core Services:</strong> Enable workout tracking, progress analytics, and program recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Personalization:</strong> Deliver AI-powered workout recommendations tailored to your goals and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Improve Our Services:</strong> Analyze usage patterns to enhance features and user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Communication:</strong> Send important updates, security alerts, and feature announcements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Security:</strong> Detect and prevent fraud, abuse, and security incidents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">3. Data Storage and Security</h2>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">🔒 Enterprise-Grade Security</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Infrastructure:</strong> Hosted on Supabase with enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Access Controls:</strong> Strict role-based access controls and authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Backups:</strong> Automatic daily backups with point-in-time recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Monitoring:</strong> 24/7 security monitoring and incident response</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">4. Data Sharing and Disclosure</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-3">We DO NOT sell your personal data.</h3>
                <p className="text-slate-300 mb-4">We may share your information only in the following circumstances:</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span><strong>Service Providers:</strong> Third-party services that help us operate (e.g., cloud hosting, analytics, AI services) under strict data protection agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law, court order, or government request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to you)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span><strong>With Your Consent:</strong> When you explicitly authorize us to share your data</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">5. Your Rights and Choices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Access & Export</h3>
                  <p className="text-slate-300 text-sm">Request a copy of your personal data in a portable format</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Correction</h3>
                  <p className="text-slate-300 text-sm">Update or correct inaccurate information in your profile</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Deletion</h3>
                  <p className="text-slate-300 text-sm">Request deletion of your account and associated data</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Opt-Out</h3>
                  <p className="text-slate-300 text-sm">Unsubscribe from marketing communications at any time</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">6. Data Retention</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  We retain your personal data only as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span><strong>Active Accounts:</strong> Data retained while your account is active</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span><strong>Deleted Accounts:</strong> Most data deleted within 30 days; some data retained for legal/security purposes (up to 90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span><strong>Anonymized Data:</strong> Aggregated, anonymized analytics may be retained indefinitely</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">7. Children's Privacy</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300">
                  StrengthLens is not intended for children under 9 years of age. We do not knowingly collect 
                  personal information from children under 9. If you believe we have collected information from 
                  a child under 9, please contact us immediately.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">8. International Data Transfers</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300">
                  Your data may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy 
                  Policy and applicable data protection laws.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">9. Changes to This Privacy Policy</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                  you to review this Privacy Policy periodically.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">10. Contact Us</h2>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
                <p className="text-slate-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong className="text-white">Email:</strong> privacy@strengthlens.com</p>
                  <p><strong className="text-white">Support:</strong> <Link href="/support" className="text-blue-400 hover:text-blue-300">Visit our Support page</Link></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4 inline-flex">
                <Logo className="w-8 h-8" />
                <span className="text-lg font-bold text-white">StrengthLens</span>
              </Link>
              <p className="text-slate-400 text-sm">
                Science-backed strength training intelligence
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="text-slate-400 hover:text-white transition">Features</Link></li>
                <li><Link href="/#science" className="text-slate-400 hover:text-white transition">Science</Link></li>
                <li><Link href="/support" className="text-slate-400 hover:text-white transition">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/support" className="text-slate-400 hover:text-white transition">About</Link></li>
                <li><Link href="/support" className="text-slate-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-white font-medium">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="text-slate-400 hover:text-white transition">Terms of Use</Link></li>
                <li><Link href="/delete-account" className="text-slate-400 hover:text-white transition">Delete Account</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 StrengthLens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
