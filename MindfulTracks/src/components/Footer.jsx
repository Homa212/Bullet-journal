import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="flex">
          <div className="xl:w-1/3 lg:w-1/3 md:w-1/2">
            <h6 className="font-bold mb-2">About Us</h6>
            <p className="hover:underline cursor-pointer">About</p>
            <p className="hover:underline cursor-pointer">Jobs</p>
            <p className="hover:underline cursor-pointer">Newsroom</p>
            <button className="mt-4 bg-green-800 hover:bg-green-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded-3xl inline-flex items-center">
              <p>Contact from</p>
            </button>
          </div>
          <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 mt-8 xl:mt-0">
            <h6 className="font-bold mb-2">Offers</h6>
            <p className="hover:underline cursor-pointer">Membership</p>
            <p className="hover:underline cursor-pointer">Features</p>
          </div>
          <div className="xl:w-1/3 lg:w-1/3 md:w-full mt-8 xl:mt-0 flex justify-between">
            <div>
              <h6 className="font-bold mb-2">Language</h6>
              <div className="flex">
                <button className="bg-green-800 hover:bg-green-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded mr-2">SV</button>
                <button className="bg-green-800 hover:bg-green-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded">EN</button>
              </div>
            </div>
            <div className="flex">
                <p>Social media</p>
              <a href="#" className="hover:text-gray-300 mr-4">Facebook</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-green-800 text-center py-8">
        <p>© 2024 Mindful Trackers AB</p>
      </div>
    </footer>
  );
};

export default Footer;