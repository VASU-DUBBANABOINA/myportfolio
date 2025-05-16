import { Typewriter } from "react-simple-typewriter";
import { Linkedin, Mail, Instagram, MessageSquare } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full md:w-1/3 fixed left-2 top-4 h-screen bg-gray-200 dark:bg-gray-900 bg-opacity-90 backdrop-blur-lg flex items-center justify-center px-6"
    >
      <div className="text-center w-full max-w-sm">
        <img
          src="/vasu.webp"
          alt="Dubbanaboina Vasu"
          className="w-52 h-52 rounded-full border-4 border-blue-500 mx-auto shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6 text-gray-900 dark:text-white">
        ᴅᴜʙʙᴀɴᴀʙᴏɪɴᴀ ᴠᴀꜱᴜ
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mt-3 font-semibold">
          <Typewriter
            words={[
              "ℙ𝕪𝕥𝕙𝕠𝕟 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣",
              "𝐀𝐈/𝐌𝐋 𝐄𝐧𝐭𝐡𝐮𝐬𝐢𝐚𝐬𝐭",
              "𝒲𝑒𝒷 𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇",
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h2>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/vasu-dubbanaboina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:vasudubbanaboina@gmail.com"
            className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/_vasu_22?utm_source=qr&igsh=MXNuOWxhbjI2N2MzcA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/9398876367"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <MessageSquare className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
