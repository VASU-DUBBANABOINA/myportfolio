import { Moon, Sun, Menu } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode, toggleMobileMenu }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["ᴀʙᴏᴜᴛ", "ꜱᴋɪʟʟꜱ", "ᴘʀᴏᴊᴇᴄᴛꜱ", "ᴀᴄʜɪᴇᴠᴇᴍᴇɴᴛꜱ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
