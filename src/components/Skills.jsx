const SkillBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-900 dark:text-white">{skill}</span>
      <span className="text-sm font-medium text-gray-900 dark:text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: "Python", percentage: 90 },
    { name: "Java", percentage: 80 },
    { name: "MySQL", percentage: 85 },
    { name: "HTML/CSS", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "TensorFlow", percentage: 70 },
    { name: "Scikit-learn", percentage: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-2xl font-bold text-center text-gray-900 dark:text-black">ꜱᴋɪʟʟꜱ</h2>
        <div className="max-w-2xl">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
