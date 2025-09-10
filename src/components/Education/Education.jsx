import React from "react";

const educationData = [
  {
    year: "2023 - 2026",
    title: "UnderGraduate",
    description:
      "Bharathiyar University,\n Sri Ramakrishna College of Arts and Science,\n Bachelor’s Degree in Computer Science with Data Analytics",
    align: "left",
  },
  {
    year: "2022",
    title: "High School",
    description:
      "State Board of Tamil Nadu,\n Chandra Matric Higher Secondary School,\n Major: Computer Science.",
    align: "right",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] sm:px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Central Timeline Line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600 z-0"
        ></div>

        {/* Timeline Items */}
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`relative mb-16 flex flex-col md:flex-row items-center w-full ${
              item.align === "left"
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Dot - Centered per item */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div
                className="w-4 h-4 rounded-full shadow-md"
                style={{
                  backgroundColor: "#8245ec",
                  boxShadow: "0 0 8px #8245ec",
                }}
              ></div>
            </div>

            {/* Content Card */}
            <div className="relative w-full md:w-1/2 px-4">
              <div
                className="bg-black border rounded-xl p-6 shadow-lg"
                style={{
                  borderColor: "#8245ec",
                  boxShadow: "0 0 12px #8245ec",
                }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm mt-2 text-gray-300">{item.description}</p>
                <span
                  className="block mt-3 font-semibold"
                  style={{ color: "#8245ec" }}
                >
                  {item.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
