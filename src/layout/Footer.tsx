// Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-[#0d0f08] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            We are the Igati Community Initiative
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We prioritize empowering communities, educating students, and
            driving global sustainability through beekeeping and its products.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-yellow-400">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-400">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Igati Community Initiative. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
