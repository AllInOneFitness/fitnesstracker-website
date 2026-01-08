import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-white">FitnessTracker</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#features" className="text-slate-300 hover:text-white transition">Features</Link>
              <Link href="/#science" className="text-slate-300 hover:text-white transition">Science</Link>
              <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition">Privacy</Link>
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
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-400 mb-12">Last updated: January 8, 2026</p>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                By accessing or using the FitnessTracker mobile application and services, you agree to be bound 
                by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  These Terms of Use constitute a legally binding agreement between you and FitnessTracker. 
                  By creating an account or using our services, you acknowledge that you have read, understood, 
                  and agree to be bound by these terms.
                </p>
                <p className="text-slate-300">
                  We reserve the right to modify these terms at any time. Continued use of the service after 
                  changes constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">2. Eligibility</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You must be at least 13 years old to use FitnessTracker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Users under 18 must have parental or guardian consent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You must provide accurate and complete registration information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You are responsible for maintaining the security of your account credentials</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">3. User Accounts</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-3">Account Responsibilities</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>You are responsible for all activities under your account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Keep your password secure and confidential</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Notify us immediately of any unauthorized access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>One account per person; no account sharing</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">4. Acceptable Use</h2>
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">You agree NOT to:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Use the service for any illegal or unauthorized purpose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Attempt to gain unauthorized access to our systems or other users' accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Reverse engineer, decompile, or disassemble the application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Use automated systems (bots, scrapers) to access the service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Upload malicious code, viruses, or harmful content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Harass, abuse, or harm other users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Violate any applicable laws or regulations</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">5. Medical Disclaimer</h2>
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                <p className="text-slate-300 mb-4 font-semibold">
                  ⚠️ IMPORTANT: FitnessTracker is NOT a medical device or medical advice service.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Our app provides fitness tracking and informational content only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Always consult a healthcare professional before starting any fitness program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>We are not responsible for injuries or health issues resulting from app use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Stop exercising and seek medical attention if you experience pain or discomfort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>AI recommendations are suggestions, not medical advice</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">6. Intellectual Property</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  All content, features, and functionality of FitnessTracker, including but not limited to:
                </p>
                <ul className="space-y-2 text-slate-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Software code, algorithms, and AI models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Text, graphics, logos, and visual designs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Exercise databases and workout programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Trademarks and brand assets</span>
                  </li>
                </ul>
                <p className="text-slate-300">
                  are owned by FitnessTracker and protected by copyright, trademark, and other intellectual 
                  property laws. You may not copy, modify, distribute, or create derivative works without 
                  our express written permission.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">7. User Content</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  You retain ownership of content you create (workout logs, notes, etc.). By using our service, 
                  you grant us a license to:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span>Store and process your data to provide the service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span>Use anonymized, aggregated data for analytics and improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span>Display your content back to you across devices</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">8. Subscription and Payments</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-3">Free and Paid Tiers</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span><strong>Free Tier:</strong> Core workout tracking features available at no cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>Plus/Pro Tiers:</strong> Premium features require paid subscription</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Subscriptions auto-renew unless cancelled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Prices subject to change with 30 days notice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Refunds handled according to App Store/Play Store policies</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">9. Termination</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  We reserve the right to suspend or terminate your account if you:
                </p>
                <ul className="space-y-2 text-slate-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Violate these Terms of Use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Engage in fraudulent or illegal activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Abuse or harm other users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Fail to pay subscription fees</span>
                  </li>
                </ul>
                <p className="text-slate-300">
                  You may delete your account at any time through the app settings. Upon termination, 
                  your data will be deleted according to our Privacy Policy.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">10. Disclaimers and Limitations of Liability</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-3">Service Provided "AS IS"</h3>
                <p className="text-slate-300 mb-4">
                  FitnessTracker is provided "as is" without warranties of any kind, express or implied. 
                  We do not guarantee:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span>Uninterrupted or error-free service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span>Accuracy of AI recommendations or data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span>Specific fitness results or outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2">•</span>
                    <span>Compatibility with all devices</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h3>
                <p className="text-slate-300">
                  To the maximum extent permitted by law, FitnessTracker shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to loss of 
                  profits, data, or other intangible losses resulting from your use of the service.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">11. Indemnification</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300">
                  You agree to indemnify and hold harmless FitnessTracker, its officers, directors, employees, 
                  and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) 
                  arising from your use of the service or violation of these terms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">12. Governing Law</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300">
                  These Terms of Use shall be governed by and construed in accordance with the laws of the 
                  jurisdiction in which FitnessTracker operates, without regard to conflict of law principles.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">13. Changes to Terms</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300">
                  We reserve the right to modify these Terms of Use at any time. Material changes will be 
                  communicated via email or in-app notification. Continued use of the service after changes 
                  constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">14. Contact Information</h2>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
                <p className="text-slate-300 mb-4">
                  Questions about these Terms of Use? Contact us:
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong className="text-white">Email:</strong> legal@fitnesstracker.app</p>
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-lg font-bold text-white">FitnessTracker</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI-powered fitness intelligence for serious athletes
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
                <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="text-white font-medium">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 FitnessTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
