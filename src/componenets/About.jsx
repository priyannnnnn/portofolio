import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 mb-4">
          I'm currently a student at the Islamic University of Indonesia, pursuing a degree in Informatics. I have experience in both backend and frontend development.
        </p>
        <p className="text-gray-700 mb-4">
          I have served as the leader of our university's programming study club, where I organized workshops and coding sessions.
        </p>
        <p className="text-gray-700">
          Recently, I achieved second place in the UI/UX competition organized by the Informatics Department, showcasing my skills in user-centered design.
        </p>
      </div>
    </section>
  );
};

export default About;
