import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import ScrollVideo from './components/ScrollVideo';
// import AnimatedPreview from './components/AnimatedPreview'; // Commented out for debugging
// import LottieRunningMan from './components/LottieRunningMan'; // Commented out for debugging

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-accent/10 to-neon-cyan/15 animate-gradient-x pointer-events-none"></div>
      {/* Navigation */}
      <nav className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="section-container flex justify-between items-center relative z-10">
          {/* Logo on the left */}
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="text-3xl sm:text-4xl font-bungee"
          >
            FitCom
          </motion.h1>

          {/* Contact Us on the right */}
          <motion.a
            href="mailto:contact@fitcom.com" // Replace with your actual contact email
            className="text-lg font-medium text-gray-300 hover:text-accent transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="section-container py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h2 className="text-7xl sm:text-8xl lg:text-9xl font-orbitron font-bold mb-6 sm:mb-8">
                Compete for the Title of #1
              </h2>
              <p className="text-2xl sm:text-3xl text-gray-300 mb-8 sm:mb-10 font-luckiest tracking-wider">
                Fitness meets competition. This is your shot at <span className="text-accent">local dominance</span>.
              </p>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="max-w-md mx-auto glassmorphism-card mt-8"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-4">
                    <p className="text-gray-300 mb-4">Join Our Waitlist - Get early access and exclusive updates when we launch.</p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      className="input-field w-full mb-4 bg-secondary/50 backdrop-blur-sm"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="btn-primary w-full shadow-glow font-bungee tracking-wide"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join the Waitlist
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center space-x-3 text-green-500 py-4"
                >
                  <CheckCircleIcon className="w-8 h-8" />
                  <span className="text-lg font-bungee">You're on the waitlist!</span>
                </motion.div>
              )}
              
              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-gray-400"
              >
                <p className="text-sm font-medium">1,248 already joined</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Preview Section */}
        <div className="bg-secondary py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-gradient-x"></div>
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6 sm:mb-8">Interactive Preview</h3>
              {/* <AnimatedPreview /> */}{/* Commented out for debugging */}
            </motion.div>
          </div>
        </div>

        {/* Scroll Video Section */}
        <div className="relative overflow-hidden">
          <ScrollVideo />
          {/* Add extra space for scrolling */}
          <div style={{ height: '200vh' }} />
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
        <footer className="py-8 bg-primary border-t border-accent">
          <div className="section-container text-center">
            <p className="text-gray-400">© 2023 FitCom. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
