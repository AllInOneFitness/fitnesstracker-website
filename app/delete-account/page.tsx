import Link from 'next/link';
import Logo from '../components/Logo';

export default function DeleteAccount() {
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
          <h1 className="text-5xl font-bold text-white mb-4">Delete Your Account</h1>
          <p className="text-slate-400 mb-12">We're sorry to see you go. Here's how to delete your StrengthLens account and what happens to your data.</p>

          <div className="prose prose-invert prose-slate max-w-none">
            {/* Important Notice */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">⚠️ Important Notice</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Account deletion is <strong className="text-red-400">permanent and irreversible</strong>. Once your account is deleted:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>All your workout data, progress tracking, and analytics will be permanently deleted</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Your training programs and custom exercises will be lost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>You will not be able to recover your account or data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Any active subscriptions will be cancelled (no refunds for unused time)</span>
                </li>
              </ul>
            </div>

            {/* How to Request Deletion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">How to Request Account Deletion</h2>
              
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Option 1: In-App Deletion (Coming Soon)</h3>
                <p className="text-slate-300 mb-4">
                  We're currently developing an in-app account deletion feature. Once available, you'll be able to delete your account directly from the app:
                </p>
                <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                  <li>Open the StrengthLens app</li>
                  <li>Go to <strong className="text-white">Profile</strong> → <strong className="text-white">Settings</strong></li>
                  <li>Scroll to <strong className="text-white">Account Management</strong></li>
                  <li>Tap <strong className="text-white">Delete Account</strong></li>
                  <li>Confirm your decision and verify your identity</li>
                  <li>Your account will be scheduled for deletion within 24 hours</li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Option 2: Email Request (Current Method)</h3>
                <p className="text-slate-300 mb-4">
                  Until the in-app feature is available, please send an account deletion request via email:
                </p>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 mb-4">
                  <p className="text-slate-300 mb-3"><strong className="text-white">Send to:</strong></p>
                  <div className="space-y-2">
                    <p className="text-blue-400 font-mono text-lg">support@strengthlens.com</p>
                    <p className="text-slate-400 text-sm">or</p>
                    <p className="text-blue-400 font-mono text-lg">privacy@strengthlens.com</p>
                  </div>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                  <p className="text-slate-300 mb-3"><strong className="text-white">Include in your email:</strong></p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">1.</span>
                      <span><strong className="text-white">Subject line:</strong> "Account Deletion Request"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">2.</span>
                      <span><strong className="text-white">Your registered email address</strong> (the one you use to log into StrengthLens)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">3.</span>
                      <span><strong className="text-white">Confirmation statement:</strong> "I confirm that I want to permanently delete my StrengthLens account and all associated data."</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">4.</span>
                      <span><strong className="text-white">Optional:</strong> Brief reason for leaving (helps us improve)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-green-400">Response time:</strong> We typically process deletion requests within 2-3 business days. You'll receive a confirmation email once your account has been deleted.
                  </p>
                </div>
              </div>
            </section>

            {/* What Data Gets Deleted */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">What Data Gets Deleted</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  When you delete your account, the following data is <strong className="text-white">permanently removed</strong> from our systems:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="text-red-400 mr-2">🗑️</span>
                      Account Information
                    </h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Email address</li>
                      <li>• Profile information</li>
                      <li>• Account credentials</li>
                      <li>• User preferences</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="text-red-400 mr-2">🗑️</span>
                      Workout Data
                    </h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• All workout logs</li>
                      <li>• Exercise history</li>
                      <li>• Sets, reps, and weights</li>
                      <li>• RPE ratings</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="text-red-400 mr-2">🗑️</span>
                      Progress Tracking
                    </h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Body measurements</li>
                      <li>• Progress analytics</li>
                      <li>• Performance trends</li>
                      <li>• Achievement history</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="text-red-400 mr-2">🗑️</span>
                      Training Programs
                    </h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Custom programs</li>
                      <li>• Saved templates</li>
                      <li>• Exercise library</li>
                      <li>• Program history</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-blue-400">Note:</strong> Progress photos are stored locally on your device and are not uploaded to our servers. Deleting your account will not affect photos stored on your device.
                  </p>
                </div>
              </div>
            </section>

            {/* What Data May Be Retained */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">What Data May Be Retained</h2>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  For legal, security, and operational reasons, we may retain certain data for a limited time:
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="text-yellow-400 mr-2">⏱️</span>
                      Temporary Retention (30 days)
                    </h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span><strong>Backup copies:</strong> Your data may exist in backup systems for up to 30 days before being permanently purged</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span><strong>Recovery period:</strong> During this time, you can contact us to restore your account if you change your mind</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="text-orange-400 mr-2">📋</span>
                      Legal & Security Retention (up to 90 days)
                    </h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2">•</span>
                        <span><strong>Transaction records:</strong> Payment history and subscription records (required for accounting and tax purposes)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2">•</span>
                        <span><strong>Security logs:</strong> Authentication logs and security incident records (to prevent fraud and abuse)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2">•</span>
                        <span><strong>Support communications:</strong> Email correspondence with our support team (for quality assurance)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="text-green-400 mr-2">📊</span>
                      Anonymized Data (Indefinite)
                    </h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong>Aggregated analytics:</strong> Anonymized usage statistics that cannot be linked back to you (e.g., "users completed 10,000 workouts this month")</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong>Research data:</strong> De-identified data used to improve our AI recommendations and app features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Alternatives to Deletion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Alternatives to Account Deletion</h2>
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  Before deleting your account, consider these alternatives:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">📤 Export Your Data</h4>
                    <p className="text-slate-300 text-sm">
                      Download a copy of your workout history and progress data before deleting. Contact <a href="mailto:support@strengthlens.com" className="text-blue-400 hover:text-blue-300">support@strengthlens.com</a> to request a data export.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">⏸️ Take a Break</h4>
                    <p className="text-slate-300 text-sm">
                      Simply stop using the app. Your data will remain safe and you can return anytime. No need to delete your account.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">🔕 Disable Notifications</h4>
                    <p className="text-slate-300 text-sm">
                      Turn off all notifications in your device settings or app preferences if you want to reduce distractions.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">💬 Contact Support</h4>
                    <p className="text-slate-300 text-sm">
                      Having issues? Our support team is here to help. Email <a href="mailto:support@strengthlens.com" className="text-blue-400 hover:text-blue-300">support@strengthlens.com</a> before deciding to delete.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
                <p className="text-slate-300 mb-6">
                  If you have questions about account deletion or need assistance, we're here to help:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">📧 Email Support</h4>
                    <p className="text-slate-300 text-sm mb-2">For account deletion requests:</p>
                    <a href="mailto:support@strengthlens.com" className="text-blue-400 hover:text-blue-300 font-mono">support@strengthlens.com</a>
                    <p className="text-slate-300 text-sm mt-2 mb-2">For privacy-related inquiries:</p>
                    <a href="mailto:privacy@strengthlens.com" className="text-blue-400 hover:text-blue-300 font-mono">privacy@strengthlens.com</a>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">📚 Additional Resources</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
                        <span className="text-slate-500"> - How we handle your data</span>
                      </li>
                      <li>
                        <Link href="/terms-of-use" className="text-blue-400 hover:text-blue-300">Terms of Use</Link>
                        <span className="text-slate-500"> - User agreement</span>
                      </li>
                      <li>
                        <Link href="/support" className="text-blue-400 hover:text-blue-300">Support Center</Link>
                        <span className="text-slate-500"> - FAQs and help articles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Note */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
              <p className="text-slate-300 text-lg mb-4">
                We're sorry to see you go, but we respect your decision.
              </p>
              <p className="text-slate-400">
                Thank you for being part of the StrengthLens community. We hope to see you again in the future! 💪
              </p>
            </div>
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
                <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="text-slate-400 hover:text-white transition">Terms of Use</Link></li>
                <li><Link href="/delete-account" className="text-white font-medium">Delete Account</Link></li>
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
