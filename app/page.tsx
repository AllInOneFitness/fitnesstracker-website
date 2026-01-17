import Link from 'next/link';
import Image from 'next/image';
import { 
  ChartBarIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  DevicePhoneMobileIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';
import Logo from './components/Logo';

export default function Home() {
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
              <Link href="#features" className="text-slate-300 hover:text-white transition">Features</Link>
              <Link href="#science" className="text-slate-300 hover:text-white transition">Science</Link>
              <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition">Privacy</Link>
              <Link href="/support" className="text-slate-300 hover:text-white transition">Support</Link>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition">
                Download App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
            <SparklesIcon className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">AI-Powered Fitness Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            A New Lens on
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Strength Training
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Science-backed strength training intelligence. Track workouts, analyze progress, 
            and get AI-powered insights that adapt to your unique training journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg shadow-blue-500/25">
              Download for iOS
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700">
              Download for Android
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-slate-400">Exercises</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Offline</div>
              <div className="text-slate-400">First Logging</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Private</div>
              <div className="text-slate-400">By Default</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Serious Athletes
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade features designed to help you achieve your fitness goals faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <ChartBarIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
              <p className="text-slate-400 leading-relaxed">
                Visualize your progress with comprehensive charts tracking volume, strength gains, 
                and muscle group development over time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <SparklesIcon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Coaching</h3>
              <p className="text-slate-400 leading-relaxed">
                Get personalized workout recommendations and adaptive programs that evolve 
                based on your performance and recovery.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <BoltIcon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast Logging</h3>
              <p className="text-slate-400 leading-relaxed">
                Log complete workouts in under 2 minutes with smart auto-fill, 
                progressive overload suggestions, and intuitive UI.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-yellow-500/50 transition">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <DevicePhoneMobileIcon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Offline-First Design</h3>
              <p className="text-slate-400 leading-relaxed">
                Never lose data. Works perfectly offline and syncs seamlessly 
                when you're back online. Your data is always safe.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-red-500/50 transition">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <ClockIcon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Rest Timers</h3>
              <p className="text-slate-400 leading-relaxed">
                Automatic rest timers between sets with customizable durations. 
                Stay focused and optimize your workout efficiency.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-slate-400 leading-relaxed">
                Bank-level encryption, GDPR compliant, and built on enterprise-grade 
                infrastructure. Your data privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section with Real App Screenshots */}
      <section id="science" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Science-Backed Analytics
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Real-time insights powered by exercise science. Track every metric that matters 
              for strength and muscle development.
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              ⚠️ All insights are informational and not medical advice. AI suggestions adapt to your training logs—always train within safe limits and consult professionals for personalized guidance.
            </p>
          </div>

          {/* Methodology Strip */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 mb-16 max-w-5xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Our Methodology</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-blue-400 font-semibold mb-2 text-sm">1RM Estimation</div>
                <div className="text-slate-400 text-xs leading-relaxed">
                  Epley formula: weight × (1 + reps/30). Estimates only—not a max test.
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-purple-400 font-semibold mb-2 text-sm">Training Volume</div>
                <div className="text-slate-400 text-xs leading-relaxed">
                  Sets × reps × load per muscle group. Tracks weekly totals for optimal growth.
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-green-400 font-semibold mb-2 text-sm">RPE Tracking</div>
                <div className="text-slate-400 text-xs leading-relaxed">
                  Rate of Perceived Exertion (1-10 scale). Subjective intensity for fatigue management.
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-orange-400 font-semibold mb-2 text-sm">Progress Logic</div>
                <div className="text-slate-400 text-xs leading-relaxed">
                  Rolling averages detect trends. Adaptive algorithms suggest deloads when needed.
                </div>
              </div>
            </div>
          </div>

          {/* Strength Progress Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Track Your
                <br />
                <span className="text-blue-400">Strength Progression</span>
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Visualize your 1RM progression over time with detailed charts. See exactly 
                how much stronger you're getting with every workout session.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Estimated 1RM Tracking</div>
                    <div className="text-slate-400">Automatic calculation of your one-rep max for every exercise</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Interactive Charts</div>
                    <div className="text-slate-400">Tap any data point to see detailed workout information</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Progress Percentage</div>
                    <div className="text-slate-400">See your strength gains as a percentage increase</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-w-md mx-auto transform transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/images/screenshots/strength-progress.jpg"
                  alt="FitnessTracker Strength Progress Chart showing 81.6% increase in Barbell Back Squat from 160 to 267 lbs over 21 sessions"
                  width={975}
                  height={1227}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* AI Insights Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-w-md mx-auto transform transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/images/screenshots/coach-insights.jpg"
                  alt="FitnessTracker AI Coach Insights showing 82 recent PRs, strong volume averaging 2,918 lbs per session, and recovery recommendations"
                  width={1139}
                  height={1003}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white mb-6">
                AI-Powered
                <br />
                <span className="text-purple-400">Coach Insights</span>
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Get personalized feedback on your training consistency, volume, and recovery. 
                Our AI analyzes your patterns and provides actionable recommendations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Consistency Tracking</div>
                    <div className="text-slate-400">Visual calendar showing your workout adherence</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">PR Celebrations</div>
                    <div className="text-slate-400">Automatic detection and celebration of personal records</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Smart Recommendations</div>
                    <div className="text-slate-400">Context-aware advice on volume, recovery, and training balance</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Volume Tracking Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Volume Tracking
                <br />
                <span className="text-green-400">by Muscle Group</span>
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Monitor training volume per muscle group with weekly trends. Ensure balanced 
                development and optimal growth stimulus across all major muscle groups.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Weekly Volume Trends</div>
                    <div className="text-slate-400">Track volume progression for each muscle group over time</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Muscle Group Selection</div>
                    <div className="text-slate-400">Filter by specific muscles to see detailed volume data</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Percentage Breakdown</div>
                    <div className="text-slate-400">See what percentage of total volume each muscle receives</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-w-md mx-auto transform transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/images/screenshots/volume-trend.jpg"
                  alt="Back Volume Trend showing weekly volume progression from 1,000 lbs (1% of total) with muscle group tracking"
                  width={952}
                  height={1250}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RPE Distribution Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-w-md mx-auto transform transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/images/screenshots/rpe-distribution.jpg"
                  alt="RPE Intensity Distribution showing 140 total sets: 67% moderate (RPE 6-7), 29% max effort (RPE 9-10), with training zone recommendations"
                  width={1088}
                  height={1205}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white mb-6">
                RPE Intensity
                <br />
                <span className="text-orange-400">Distribution</span>
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Optimize your training intensity with RPE zone breakdown. Ensure you're training 
                in the right zones for your goals with detailed intensity analysis.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Zone Breakdown</div>
                    <div className="text-slate-400">See percentage of sets in each RPE zone (Easy to Max Effort)</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Training Recommendations</div>
                    <div className="text-slate-400">Get optimal intensity targets based on your goals</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Balance Insights</div>
                    <div className="text-slate-400">Maintain good intensity balance for sustainable progress</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Complete Training Hub
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to track, analyze, and optimize your fitness journey in one beautiful app
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-w-md mx-auto transform transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/images/screenshots/programs-list.jpg"
                  alt="FitnessTracker Programs List showing 3 active programs: Leg program, Upper Body Program, and upper body program with Start buttons"
                  width={1008}
                  height={1190}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Smart Program
                <br />
                <span className="text-blue-400">Management</span>
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Track multiple programs simultaneously with adherence metrics, consistency trends, 
                and AI-generated insights to keep you on track.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Adherence Tracking</div>
                    <div className="text-slate-400">Monitor your consistency with visual trends and weekly goals</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Multiple Programs</div>
                    <div className="text-slate-400">Run multiple training programs simultaneously</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Quick Start</div>
                    <div className="text-slate-400">One-tap access to start any workout from your programs</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join thousands of athletes using StrengthLens to reach their goals faster
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg shadow-blue-500/25">
                Download Now
              </button>
              <Link href="/support" className="px-8 py-4 text-lg font-semibold text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700">
                Learn More
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
                <li><Link href="#features" className="text-slate-400 hover:text-white transition">Features</Link></li>
                <li><Link href="#science" className="text-slate-400 hover:text-white transition">Science</Link></li>
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
