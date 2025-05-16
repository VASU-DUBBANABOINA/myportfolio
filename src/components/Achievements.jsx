import { Award, Code, Star } from "lucide-react";

const AchievementCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
    <div className="mb-4 text-blue-600 dark:text-blue-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

const Achievements = () => {
  const achievements = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Problem Solving",
      description: "Solved 500+ Data Structures and Algorithms problems across various platforms.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "HackerRank",
      description: "Achieved 5-star rating on HackerRank (@vasudubbanaboina).",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Certifications",
      description: "Completed multiple certifications in Python, Web Development, and Machine Learning.",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-32">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        ᴀᴄʜɪᴇᴠᴇᴍᴇɴᴛꜱ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
