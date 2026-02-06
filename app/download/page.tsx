import Link from 'next/link';
import { DevicePhoneMobileIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import Logo from '../components/Logo';

export default function DownloadPage() {
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
            <div className="flex space-x-4">
              <Link 
                href="/download"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition"
              >
                Download App
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <DevicePhoneMobileIcon className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Available on iOS & Android</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Download
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                StrengthLens
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the StrengthLens app on your device and start your science-backed strength training journey today.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* iOS Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">iOS</h3>
                    <p className="text-sm text-slate-400">iPhone & iPad</p>
                  </div>
                </div>
                <CheckCircleIcon className="w-6 h-6 text-green-400" />
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                Available now on the App Store. Works on iPhone and iPad running iOS 13.0 or later.
              </p>
              
              <a
                href="https://apps.apple.com/us/app/strengthlens/id6757731105"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-center text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg shadow-blue-500/25"
              >
                Download on the App Store
              </a>
            </div>

            {/* Android Card */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 11.03 1 14.22 1 17.8h22c0-3.58-1.92-6.77-5.4-8.32zM8.06 15.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm7.88 0c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Android</h3>
                    <p className="text-sm text-slate-400">Google Play</p>
                  </div>
                </div>
                <ClockIcon className="w-6 h-6 text-yellow-400" />
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                Coming soon! Expected in the next few days, pending Google Play Store review.
              </p>
              
              <button
                disabled
                className="block w-full px-6 py-4 text-center text-lg font-semibold text-slate-500 bg-slate-700/50 rounded-xl cursor-not-allowed"
              >
                Coming Soon
              </button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-slate-500">
                  We'll update this page as soon as it's available
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Full Feature Parity Across Platforms
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Both iOS and Android versions of StrengthLens include all features: advanced analytics, 
              AI-powered coaching, offline-first logging, RPE tracking, and more. Your data syncs 
              seamlessly across all your devices.
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center text-slate-400 hover:text-white transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
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
