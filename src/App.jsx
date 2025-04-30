import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-500/15 via-accent/10 to-black/15 animate-gradient-x pointer-events-none"></div>
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
        <div className="section-container py-10 sm:py-16 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:max-w-4xl text-left mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h2 className="text-4xl xs:text-5xl sm:text-7xl lg:text-7xl font-orbitron font-bold mb-4 sm:mb-8 leading-tight">
                Fitness Wingman
              </h2>
              <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-10 font-luckiest tracking-wider">
                Fitness meets competition. This is your shot at <span className="text-emerald-600">local dominance</span>.
              </p>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="w-full text-left pl-0 sm:pl-6"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-xl w-full">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Join Our Waitlist</h3>
                  <p className="text-gray-300 mb-4 text-base sm:text-lg">Get early access and exclusive updates when we launch.</p>
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 mb-2 sm:mb-0"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Join Now
                    </motion.button>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">1,248 already joined</p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-3 text-green-500"
                >
                  <CheckCircleIcon className="w-6 h-6" />
                  <span className="text-lg">You're on the waitlist!</span>
                </motion.div>
              )}
            </motion.div>
          </div>
          



          {/* Image Container */}
          <div className="flex-1 grid grid-cols-3 gap-1">
            {/* Top row images */}
            <img src="https://i.pinimg.com/736x/2f/c7/4b/2fc74b41277d39d228ef3dc81a88316d.jpg" alt="Description 1" className="w-full h-auto rounded-lg" style={{ width: '200px', height: '180px', objectFit: 'cover' }} />
            <img src="https://i.pinimg.com/736x/4a/a3/a3/4aa3a3505e8aa54c8542c2e9ed0eac41.jpg" alt="Description 2" className="w-full h-auto rounded-lg" style={{ width: '200px', height: '180px', objectFit: 'cover' }} />
            {/* Bottom row images */}
            <img src="https://i.pinimg.com/736x/9f/1b/35/9f1b3582acc6d525c821915138c46c68.jpg" alt="Description 3" className="w-full h-auto rounded-lg" style={{ width: '200px', height: '180px', objectFit: 'cover' }} />
            <img src="https://i.pinimg.com/736x/cd/26/61/cd2661b6167ea4b4242f319aa19c6d86.jpg" alt="Description 4" className="w-full h-full rounded-lg" style={{ width: '200px', height: '180px', objectFit: 'cover' }} />
            <img src="https://i.pinimg.com/736x/7f/46/2b/7f462ba0dcca38d4b2141c6a4d1aaba2.jpg" alt="Description 4" className="w-full h-full rounded-lg" style={{ width: '200px', height: '180px', objectFit: 'cover' }} />
            <img src="https://i.pinimg.com/736x/3c/1b/c3/3c1bc35c8f0eae5b4fe2992e062980d7.jpg" alt="Description 4" className="w-full h-full rounded-lg" style={{ width: '200px', height: '180px', objectFit: 'cover' }} />
            
            

          </div>
       {/* Social Proof */}
       <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-gray-400"
              >
                <p className="text-sm font-medium"></p>
              </motion.div>
            
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
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4">Your Weekly Progress</h4>
                  <div className="space-y-4">
                    {/* Workout Progress */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Workouts</span>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="font-bold"
                        >
                          85%
                        </motion.span>
                      </div>
                      <div className="h-4 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          whileHover={{ filter: "brightness(1.2)" }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-purple-500 relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-white/20 to-purple-500/0"
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
                        <span>Strength Goals</span>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="font-bold"
                        >
                          70%
                        </motion.span>
                      </div>
                      <div className="h-4 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '70%' }}
                          whileHover={{ filter: "brightness(1.2)" }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-blue-500 relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0"
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
                        <span>Consistency</span>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="font-bold"
                        >
                          90%
                        </motion.span>
                      </div>
                      <div className="h-4 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          whileHover={{ filter: "brightness(1.2)" }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-cyan-500 relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/20 to-cyan-500/0"
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
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4">Local Leaderboard</h4>
                  <div className="space-y-4">
                    {/* Top performers */}
                    <motion.div 
                      className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-xl font-bold text-yellow-500"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          1
                        </motion.span>
                        <span>Alex M.</span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="font-bold"
                      >
                        2,450 pts
                      </motion.span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-xl font-bold text-gray-300"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          2
                        </motion.span>
                        <span>Sarah K.</span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="font-bold"
                      >
                        2,280 pts
                      </motion.span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-xl font-bold text-amber-600"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          3
                        </motion.span>
                        <span>Mike R.</span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="font-bold"
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
      </main>
    </div>
  );
}

export default App;

