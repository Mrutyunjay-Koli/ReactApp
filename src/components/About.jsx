import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">Hello, I'am Mrutyunjay, a passionate Web developer with keen eye for MERN 
        Stack , with a background in IT, I strive to create a impactful and
        visually stunning Software solutions that leave a lasting impression. 
      </p>
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
        Education & Tranning
        </h1>
        <span className="text-justify">
          BCA- 2nd Year, DAV Velankar College, 2024. Under Gaduation,
          Solapur Univesity, 2022-2025, Web Developer, DSA, Fresher.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
        Skill & Expertise
        </h1>
        <span className="text-justify">
         Proficient in Java, Python, Experiance with Tailwindcss framworks, React,
         Python GUI etc, Strong grasp of DSA algorithms, java concepts, css, frameworks
         Excellent problem-solving skills Effective communicator and collaborator.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
        Professional & Experiance
        </h1>
        <span>
         Fresher, Under graduation BCA- 2nd year.
         {/* [job title], [Company/Orgnization], [Dates], [Brief desciption of 
         responsibilities and achievments], [job title],
         [Company/Orgnization], [Dates], [Brief desciption of 
          responsibilities and achievments],[Frelance/Contact Work], [Client/Orgnization],
          [Dates], [Brief desciption of projects and contributions] */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
        Achivments & Awards 
        </h1>
        <span>
          Nothing!
         {/* [Award/Recogition], [Orgnization/Institution], [Year], [Achivments],
         [Orgnization/Platform], [Year] */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
        Mission Statements
        </h1>
        <p className="text-justify">
        My mission is to leverage my skills and cretivity to deliver
        innovative in IT industry solutions that exceed client expections and
        contribute positively to the digital landscape. I am committed to
        continuos learing and growth, always seeking new challenges and
        opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
