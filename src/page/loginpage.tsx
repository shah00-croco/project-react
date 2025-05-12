import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../component/animatedpage';
import Slider from 'react-slick';
import '../asset/style.css';

const LoginPage: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  const carouselItems = [
    {
      image: 'https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18103/18103_1.jpg',
      title: 'Complete Racing Ecosystem',
      text: 'Integrated timer hardware, mobile app, and desktop analytics',
    },
    {
      image: 'https://images.topgear.com.ph/topgear/images/2019/10/15/tamiya-east-time-4wd-race-tournameny-01-1571127669.jpg',
      title: 'Race Like a Pro',
      text: 'Real-time telemetry and performance analytics',
    },
    {
      image: 'https://sapling-inc.com/wp-content/uploads/Sapling-406-Countdown-with-4-Button-Elapsed-Timer.jpg',
      title: 'Precision Lap Timing',
      text: 'Millisecond-accurate tracking for competitive Mini 4WD racing',
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <AnimatedPage>
          <div className="w-full max-w-md space-y-6">
            <header className="text-center space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Dashlap Portal</h1>
              <p className="text-gray-500">Racing analytics platform</p>
            </header>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="racer@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                Sign In
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i className="bi bi-google text-blue-600 mr-2"></i>
                <span>Google</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i className="bi bi-github text-gray-800 mr-2"></i>
                <span>GitHub</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600">
              New to Dashlap?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                Create account
              </Link>
            </p>
          </div>
        </AnimatedPage>
      </div>

      {/* Right Side - Racing Carousel */}
      <div className="hidden md:block w-1/2 bg-gray-100">
        <Slider {...sliderSettings} className="h-full">
          {carouselItems.map((item, index) => (
            <div key={index} className="relative h-full">
              <img
                src={item.image}
                alt="Racing background"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <div className="mb-6">
                    <span className="bg-blue-600 text-xs font-semibold px-4 py-2 rounded-full">
                      DASHLAP TIMING SYSTEM
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                  <p className="text-xl max-w-2xl mx-auto">{item.text}</p>
                  <div className="mt-8 flex justify-center space-x-4">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>0.001s Resolution</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Live Telemetry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LoginPage;