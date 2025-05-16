import { FileDown } from "lucide-react";

const About = () => {
  return (
    // <section id="about" className="py-15 px-4 md:px-16 lg:px-48 bg-gray-200 dark:bg-gray-900">
      <section
  id="about"
  className="py-15 px-4 md:px-16 lg:px-48 bg-[rgba(160, 163, 169, 0.4)] dark:bg-[rgba(17,24,39,0.5)]"
>

      <div className="container mx-auto space-y-12"> 
        {/* About Me Heading */}
        <h2 className="text-4xl md:text-2xl font-bold text-center text-[rgba(186, 216, 111, 0.4)] dark:text-black">
        ᴀʙᴏᴜᴛ ᴍᴇ
        </h2>

        {/* Content Container */}
        <div className="max-w-2xl md:max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg leading-relaxed text-[rgba(235, 222, 222, 0.4)] dark:text-gray-300">
            I'm a passionate Python developer with a strong background in web development and a keen interest in AI/ML.
            My problem-solving skills and enthusiasm for learning new technologies drive me to create efficient and
            innovative solutions.
          </p>

          {/* Download Resume Button */}
          <a
            href="/vasu-resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FileDown className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
