import '../asset/style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../component/animatedpage';
import { ClockIcon, CpuChipIcon, ChartBarIcon, WrenchScrewdriverIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <AnimatedPage>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
              Revolutionizing Tamiya Racing
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Precision-engineered solutions for competitive Mini 4WD racing enthusiasts worldwide
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition hover:scale-105 border border-blue-500/20">
              <ClockIcon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Millisecond Accuracy</h3>
              <p className="text-gray-400">
                Laser-guided timing systems with 0.001s resolution for professional-grade results
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition hover:scale-105 border border-blue-500/20">
              <CpuChipIcon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Smart Integration</h3>
              <p className="text-gray-400">
                IoT-enabled devices with real-time Bluetooth connectivity and cloud sync
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition hover:scale-105 border border-blue-500/20">
              <ChartBarIcon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Advanced Analytics</h3>
              <p className="text-gray-400">
                AI-powered race insights and performance prediction models
              </p>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="relative group mb-20 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-30 group-hover:opacity-40 transition"></div>
            <img
              src="https://images.topgear.com.ph/topgear/images/2019/10/15/tamiya-east-time-4wd-race-tournameny-01-1571127669.jpg"
              alt="Racing Setup"
              className="w-full h-96 object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center bg-gray-900/80 px-6 py-3 rounded-full backdrop-blur-sm border border-blue-500/30">
                  <RocketLaunchIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <span className="text-2xl font-semibold text-blue-200">Pro Series X2 Launch</span>
                </div>
                <h2 className="text-4xl font-bold text-white">Next-Gen Racing Ecosystem</h2>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-2xl border border-blue-500/20">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Modular Hardware</h3>
                <p className="text-gray-400">
                  Customizable sensor arrays with upgradeable components for evolving needs
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-blue-400">
                    <span className="mr-2">▹</span>
                    Water-resistant chassis
                  </li>
                  <li className="flex items-center text-blue-400">
                    <span className="mr-2">▹</span>
                    Multi-track compatibility
                  </li>
                  <li className="flex items-center text-blue-400">
                    <span className="mr-2">▹</span>
                    Wireless charging support
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-2xl border border-blue-500/20">
                <UserGroupIcon className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Community Driven</h3>
                <p className="text-gray-400">
                  Join 50,000+ racers in our global network with exclusive features:
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-xl border border-blue-500/20">
                    <div className="text-blue-400 text-2xl font-bold">150+</div>
                    <div className="text-gray-400 text-sm">Monthly Events</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-xl border border-blue-500/20">
                    <div className="text-blue-400 text-2xl font-bold">4.9/5</div>
                    <div className="text-gray-400 text-sm">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </AnimatedPage>
    </div>
  );
};

export default AboutUs;