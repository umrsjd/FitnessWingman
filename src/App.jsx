import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(0);

  useEffect(() => {
    // Fetch initial count
    fetch('https://fitnesswingman.onrender.com/api/waitlist/count')
      .then(res => res.json())
      .then(data => setWaitlistCount(data.count))
      .catch(error => console.error('Error fetching count:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fitnesswingman.onrender.com/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setWaitlistCount(data.count);
        setIsSubmitted(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Top Section with Background */}
      <div className="relative z-10">
        {/* Background image and overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/736x/40/e6/c5/40e6c5f5681473f4914d7a5b98245cdd.jpg")',
            filter: 'brightness(0.9)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="py-4 sm:py-11 px-4 sm:px-6">
            <div className="section-container flex justify-between items-center">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                className="text-2xl sm:text-4xl font-bungee text-white"
              >
                FitCom
              </motion.h1>
              
              {/* Mobile Menu Button */}
              <motion.button
                className="block sm:hidden p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>

              {/* Desktop Menu */}
              <div className="hidden sm:flex items-center gap-6">
                <motion.a
                  href="/"
                  className="text-base sm:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="/about"
                  className="text-base sm:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="mailto:contact@fitcom.com"
                  className="text-base sm:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={{
                height: isMenuOpen ? 'auto' : 0,
                opacity: isMenuOpen ? 1 : 0
              }}
              className="sm:hidden overflow-hidden backdrop-blur-sm bg-black/10"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                <motion.a
                  href="/"
                  className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="/about"
                  className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="mailto:contact@fitcom.com"
                  className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </nav>

          {/* Hero Section - Adjusted for mobile */}
          <main className="section-container min-h-[80vh] flex items-start sm:items-center py-12 sm:py-32">
            <div className="flex justify-start sm:justify-end w-full px-4 sm:px-0">
              <div className="max-w-4xl w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="text-left"
                >
                  <h2 className="text-5xl sm:text-8xl lg:text-6xl font-orbitron font-bold mb-4 sm:mb-8 text-white drop-shadow-lg">
                    Fitness Wingman
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-200 mb-6 sm:mb-10 font-luckiest tracking-wider">
                    Fitness meets competition. This is your shot at <span className="text-emerald-400">local dominance</span>.
                  </p>
                </motion.div>
                {/* Waitlist Form */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="w-full text-left"
                >
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="max-w-xl w-full">
                      <h3 className="text-xl sm:text-1xl font-bold mb-2 sm:mb-3 text-white">Join Our Waitlist</h3>
                      <p className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-4">Get early access and exclusive updates when we launch.</p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full sm:w-[450px] px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 text-sm"
                          required
                        />
                        <motion.button
                          type="submit"
                          className="w-full sm:w-auto px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Join Now
                        </motion.button>
                      </div>
                      {/* Waitlist count display */}
                      <p className="text-sm sm:text-base text-gray-300 mt-3 sm:mt-4">{waitlistCount} already joined</p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center space-x-3 text-green-400"
                    >
                      <CheckCircleIcon className="w-6 h-6" />
                      <span className="text-lg">You're on the waitlist!</span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </main>
            {/* Image Container */}
            <div className="flex-1 grid grid-cols-3 gap-1">
              {/* ... existing code ... */}
            </div>
            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-gray-300"
            >
              <p className="text-sm font-medium"></p>
            </motion.div>
          
        </div>
      </div>
       {/* Animated Preview Section */}
       <div className="bg-secondary py-16 relative overflow-hidden">
          <div className="absolute inset-0 animate-gradient-x"></div>
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6 sm:mb-8 text-center">Progress Tracking & Leaderboard</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Progress Chart */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4">Your Weekly Progress</h4>
                  <div className="space-y-4">
                    {/* Workout Progress */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Workouts</span>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="font-bold text-white"
                        >
                          85%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          whileHover={{ filter: "brightness(1.2)" }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-white relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                    {/* Strength Goals */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Strength Goals</span>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="font-bold text-white"
                        >
                          70%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '70%' }}
                          whileHover={{ filter: "brightness(1.2)" }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-white relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                    {/* Consistency */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Consistency</span>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="font-bold text-white"
                        >
                          90%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          whileHover={{ filter: "brightness(1.2)" }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-white relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Leaderboard */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4 text-white">Local Leaderboard</h4>
                  <div className="space-y-3">
                    {/* Top performers */}
                    <motion.div 
                      className="flex items-center justify-between p-2 bg-black/40 rounded-lg hover:bg-black/50 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-xl font-bold text-white"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          1
                        </motion.span>
                        <span className="text-white">Alex M.</span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="font-bold text-white"
                      >
                        2,450 pts
                      </motion.span>
                    </motion.div>

                    <motion.div 
                      className="flex items-center justify-between p-2 bg-black/40 rounded-lg hover:bg-black/50 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-xl font-bold text-white"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          2
                        </motion.span>
                        <span className="text-white">Sarah K.</span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="font-bold text-white"
                      >
                        2,280 pts
                      </motion.span>
                    </motion.div>

                    <motion.div 
                      className="flex items-center justify-between p-2 bg-black/40 rounded-lg hover:bg-black/50 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-xl font-bold text-white "
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          3
                        </motion.span>
                        <span className="text-white">Mike R.</span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="font-bold text-white"
                      >
                        2,150 pts
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* What is Fitcom Section */}
        <div className="py-16">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-4 sm:mb-6">What is Fitcom?</h3>
              <p className="text-xl sm:text-2xl mb-6 sm:mb-8 font-bungee">Fitcom is where fitness meets community.</p>
              
              <p className="text-base sm:text-lg mb-4 sm:mb-6 font-luckiest tracking-wide">Whether you're grinding solo or sharing gains with the world, Fitcom helps you:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
                <motion.div 
                  initial={{ rotateY: 2, rotateX: -2 }}
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                  className="glassmorphism-card shadow-neon"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 font-orbitron">City Leaderboards</h4>
                  <p className="text-sm sm:text-base">Compete locally, rank globally.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ rotateY: -2, rotateX: -2 }}
                  whileHover={{ scale: 1.05, rotateY: -5, rotateX: -5 }}
                  className="glassmorphism-card shadow-neon"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 font-orbitron">Fitness Reels & Threads</h4>
                  <p className="text-sm sm:text-base">Share wins, rants, and raw moments.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ rotateY: 2, rotateX: -2 }}
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                  className="glassmorphism-card shadow-neon"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 font-orbitron">Progress Tracking</h4>
                  <p className="text-sm sm:text-base">See real results, not just reps.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ rotateY: -2, rotateX: -2 }}
                  whileHover={{ scale: 1.05, rotateY: -5, rotateX: -5 }}
                  className="glassmorphism-card shadow-neon"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 font-orbitron">Influencer Marketplace</h4>
                  <p className="text-sm sm:text-base">Sell plans. Buy motivation.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* What Makes Fitcom Different */}
        <div className="bg-secondary py-16">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What Makes Fitcom Different</h3>
              <p className="text-lg sm:text-xl italic mb-6 sm:mb-8">"We're not a fitness tracker. We're a movement."</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-3 sm:p-4"
                >
                  <p className="font-bold">Built by athletes</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4"
                >
                  <p className="font-bold">Designed for creators</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4"
                >
                  <p className="font-bold">Rooted in community</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4"
                >
                  <p className="font-bold">Fueled by competition</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="py-16">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Join the Movement</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary p-4 sm:p-6 rounded-lg text-left"
                >
                  <p className="text-base sm:text-lg italic mb-3 sm:mb-4">"I've been waiting for something like this - finally a platform that combines real progress tracking with community motivation!"</p>
                  <p className="font-bold">- Sarah K., Fitness Creator</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary p-6 rounded-lg text-left"
                >
                  <p className="text-base sm:text-lg italic mb-3 sm:mb-4">"The local leaderboards are a game-changer. It's not just about posting workouts anymore - it's about proving you're the best."</p>
                  <p className="font-bold">- Mike R., Powerlifter</p>
                </motion.div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Join the Waitlist Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Creator Hub Section */}
        <div className="bg-secondary py-16">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Built for Creators</h3>
              <p className="text-lg sm:text-xl mb-8 sm:mb-12">Join us early and shape the future of fitness content</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="bg-primary p-4 sm:p-6 rounded-lg"
                >
                  <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-4">Early Monetization</h4>
                  <p className="text-sm sm:text-base">Start earning from day one with our creator-first tools</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="bg-primary p-6 rounded-lg"
                >
                  <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-4">Community Building</h4>
                  <p className="text-sm sm:text-base">Grow your following with built-in engagement features</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="bg-primary p-6 rounded-lg"
                >
                  <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-4">Creator Support</h4>
                  <p className="text-sm sm:text-base">Get priority access to new features and dedicated support</p>
                </motion.div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Apply as a Creator Partner
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* About the Founder */}
        <div className="py-16">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">About the Founder</h3>
              
              <div className="bg-secondary p-8 rounded-lg text-left">
                <p className="text-lg mb-6">
                  "I'm a college student, powerlifter, and community builder — and I was tired of how empty fitness apps felt… I wanted something that tracked progress, rewarded consistency, and built community — so I built it."
                </p>
                <p className="font-bold text-xl">— Devraj Patel</p>
                <p className="text-gray-400">Founder</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 bg-primary border-t border-grey-500">
          <div className="section-container text-center">
            <p className="text-gray-400">© 2023 FitCom. All rights reserved.</p>
          </div>
        </footer>
      
    </div>
  );
}

export default App;