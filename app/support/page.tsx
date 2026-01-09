import Link from 'next/link';
import { 
  EnvelopeIcon, 
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';

export default function Support() {
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
              <Link href="/support" className="text-white font-medium">Support</Link>
            </div>
            <Link href="/" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">How Can We Help?</h1>
          <p className="text-xl text-slate-400 mb-8">
            Get support, find answers, or reach out to our team
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Email Support */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Email Support</h3>
              <p className="text-slate-400 mb-6">
                Get help from our support team. We typically respond within 24 hours.
              </p>
              <a 
                href="mailto:support@strengthlens.com" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                support@strengthlens.com
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* In-App Support */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">In-App Support</h3>
              <p className="text-slate-400 mb-6">
                Access help directly from the app. Go to Settings → Help & Support.
              </p>
              <div className="text-slate-500 font-medium">
                Available in the mobile app
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                <QuestionMarkCircleIcon className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl font-bold text-white">Common Questions</h2>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {/* FAQ Item 1 */}
              <details className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 group">
                <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>How do I create a custom workout program?</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-300 leading-relaxed">
                  <p className="mb-3">To create a custom workout program:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Go to the Programs tab</li>
                    <li>Tap the "+" button in the top right</li>
                    <li>Choose "Create Custom Program"</li>
                    <li>Add exercises, sets, reps, and rest periods</li>
                    <li>Save your program and start tracking!</li>
                  </ol>
                  <p className="mt-3 text-sm text-slate-400">
                    Note: Custom programs are available on the Free tier with a limit of 3 programs. 
                    Upgrade to Plus for unlimited custom programs.
                  </p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 group">
                <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>How does the AI workout recommendation work?</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-300 leading-relaxed">
                  <p className="mb-3">
                    Our AI analyzes your workout history, performance trends, and recovery patterns to provide 
                    personalized recommendations:
                  </p>
                  <ul className="space-y-2 ml-2">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Progressive Overload:</strong> Suggests weight increases when you're ready</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Volume Management:</strong> Balances training volume across muscle groups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Recovery Optimization:</strong> Adjusts intensity based on RPE trends</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Exercise Variety:</strong> Recommends alternative exercises to prevent plateaus</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-slate-400">
                    AI features are available on Plus and Pro tiers.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 group">
                <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>Can I use StrengthLens offline?</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-300 leading-relaxed">
                  <p className="mb-3">
                    Yes! StrengthLens is designed with an offline-first architecture:
                  </p>
                  <ul className="space-y-2 ml-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Log workouts without internet connection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>View your workout history and programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Access all core features offline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Data automatically syncs when you're back online</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-slate-400">
                    Note: AI features and cloud sync require an internet connection.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 group">
                <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>How do I track my progress over time?</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-300 leading-relaxed">
                  <p className="mb-3">
                    StrengthLens provides comprehensive progress tracking through the Analytics tab:
                  </p>
                  <ul className="space-y-2 ml-2">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Strength Charts:</strong> Visualize weight progression for each exercise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Volume Tracking:</strong> Monitor total training volume per muscle group</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Workout Frequency:</strong> Track consistency and adherence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Personal Records:</strong> Celebrate PRs and milestones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>RPE Trends:</strong> Monitor fatigue and recovery patterns</span>
                    </li>
                  </ul>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 group">
                <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>What's the difference between Free, Plus, and Pro tiers?</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-300 leading-relaxed">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Free Tier</h4>
                      <ul className="space-y-1 ml-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-slate-500 mr-2">•</span>
                          <span>Core workout tracking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-slate-500 mr-2">•</span>
                          <span>Up to 3 custom programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-slate-500 mr-2">•</span>
                          <span>Basic progress charts</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Plus Tier ($9.99/month)</h4>
                      <ul className="space-y-1 ml-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Everything in Free</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Unlimited custom programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Advanced analytics and insights</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>All pre-built workout programs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Pro Tier ($19.99/month)</h4>
                      <ul className="space-y-1 ml-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Everything in Plus</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>AI-powered adaptive programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>AI coach chat for personalized advice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Nutrition tracking (coming soon)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 group">
                <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>Is my data secure and private?</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-300 leading-relaxed">
                  <p className="mb-3">
                    Absolutely. We take your privacy and security seriously:
                  </p>
                  <ul className="space-y-2 ml-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span><strong>End-to-end encryption:</strong> All data encrypted in transit and at rest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span><strong>Enterprise infrastructure:</strong> Hosted on Supabase with SOC 2 compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span><strong>GDPR compliant:</strong> Full control over your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span><strong>No data selling:</strong> We never sell your personal information</span>
                    </li>
                  </ul>
                  <p className="mt-3">
                    <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 font-medium">
                      Read our full Privacy Policy →
                    </Link>
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 text-center">
            <DocumentTextIcon className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive documentation or reach out to our support team. 
              We're here to help you succeed on your fitness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@strengthlens.com"
                className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg shadow-blue-500/25"
              >
                Contact Support
              </a>
              <Link 
                href="/"
                className="px-8 py-4 text-lg font-semibold text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <li><Link href="/support" className="text-white font-medium">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/support" className="text-white font-medium">About</Link></li>
                <li><Link href="/support" className="text-white font-medium">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="text-slate-400 hover:text-white transition">Terms of Use</Link></li>
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
