import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 mb-4">
          I am a passionate and results-driven third-year Informatics student at Universitas Islam Indonesia,
          actively involved in various leadership and technical roles within the field of Information Technology. 
          With strong expertise in software development, system design, and web and mobile application development, 
          I have hands-on experience in modern frameworks such as React Native, Next.js, Java Spring Boot, and Node.js, supported by PostgreSQL and MySQL databases.
        </p>
        <p className="text-gray-700 mb-4">
          I currently serve as the Leader of the Programming Study Club and UKM Football,
          as well as a Teaching Assistant at the Information System Development Laboratory,
          where I guide system design projects integrating BPMN and Large Language Models (LLM).
        </p>
        <p className="text-gray-700">
           I have contributed to projects on stunting prevention, creating a system for myopia therapy using glasses, and agricultural monitoring. 
           Honored with national recognition from the Ministry of Education, I am passionate about using technology to create practical and real solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
