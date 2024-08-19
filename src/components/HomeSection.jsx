import React from 'react';

function HomeSection() {
  return (
    <section id="home" className="p-5">
      <div className="text-center text-white animate-textBlink">
        <h1 className="text-3xl">Welcome</h1>
        <p className="text-xl text-red-600 animate-fadeInOut">Hi, I’m Abhishek. I’m a continuous learner and innovator.</p>
        <p className="text-lg">
          Hi, I'm <span className="text-red-500">Abhishek Dhakal</span>, an Electronics and Communication student with a passion for technology and innovation.
        </p>
        <p className="text-lg">
          Currently pursuing my Bachelor's in Electronics, Communication, and Information Engineering, focusing on web development and exploring the world of embedded systems.
        </p>
      </div>
    </section>
  );
}

export default HomeSection;
