import Tinashe2 from "../pictures/Java.png";
import Tinashe3 from "../pictures/Visual Studio.png";
import Tinashe4 from "../pictures/Coffee1.jpg";
import Tinashe5 from "../pictures/5.jpg";
import BodyInfo from "./BodyInfo";
import "./BodyStyles.css";

const Body = () => {
  return (
    <div className="body">
      <h1>Hey there!!</h1>
      <p>
        This is awesome, I hope you enjoy my page as much as I enjoyed making
        it.
      </p>

      <BodyInfo
        /*className="first-body"
        heading="Why I want to be a Developer at SovTech"
        text="My love for problem solving and using technology to create solutions to complex problems are the main reasons why I want to be a developer at SovTech. Software developers have the ability to turn their ideas into tangible products that can have a significant impact on people's lives.
        Another reason is the fast pace of change and growth in the tech industry. Technology is constantly evolving, providing opportunities for developers to continuously learn and improve their skills.
        Working as a software developer can also be a very rewarding career, both financially and in terms of job satisfaction. Finally, the development process itself is often a collaborative and creative experience, with the potential to work on a wide range of projects and with a diverse team.
        In conclusion, being a developer at SovTech is so cool, I mean it’s the number one software company in Africa and is headed to the world. I would love to be part of a progressive family that is paving the way to put South Africa and Africa as a whole on the map in the tech world.
        "*/
        className="first-body"
        heading="Why I want to be an Engineer"
        /*text="
        As an Electrical and Electronic Engineer, my passion lies in utilizing my knowledge and skills to develop innovative solutions to complex problems. 
        I believe that joining Deloitte Consulting will offer me an opportunity to work in a collaborative and dynamic environment, where I can bring my ideas to life and make a real impact. 
        The Deloitte Consulting InfinityX Graduate Programme provides an immersive boot camp experience that will expose me to the diverse services, and industries that the company serves. 
        The 20% interactive learning and 80% on-the-job learning approach of the Consulting InfinityX graduate programme will provide me with a well-rounded skillset, allowing me to work effectively with leaders and clients in the consulting field.
        The chance to work with a well-recognized brand like Deloitte and contribute to their goal of making an impact that matters is a unique opportunity that I am excited to explore.
        "*/
        text="As an Engineer, I have always been drawn to the idea of using my knowledge and skills to solve real-world problems and make a difference in people's lives. 
        From an early age, I was fascinated by the ways in which technology and innovation could improve the world around us, and I knew that I wanted to be a part of that process. 
        To me, being an Engineer means being a problem-solver, a creative thinker, and a lifelong learner. 
        It means having the ability to design and build solutions that are both efficient and effective, and being able to collaborate with others to bring those solutions to life. 
        One of the things I love most about engineering is the constant challenge it provides. Every problem is unique, and every solution requires a new approach. 
        It requires critical thinking, attention to detail, and a willingness to learn from both successes and failures.
        In addition to the technical aspects of engineering, I am also drawn to the field for its potential to create positive change in the world. 
        Whether it's developing renewable energy technologies, designing more efficient transportation systems, or creating new medical devices, engineering has the power to make a real impact on people's lives.
        Overall, my passion for engineering stems from a desire to use my skills and knowledge to make a meaningful contribution to society. 
        I believe that engineering is not just a career, but a calling, and I am excited to continue learning and growing in this field for years to come.
        "
        img1={Tinashe2}
        img2={Tinashe3}
      />

      <BodyInfo
        className="first-body-switch"
        heading="Brief History of my Passion"
        /*text="The story begins when I was 15 years old, I was still a bit stupid, careless and still waiting for my first kiss, lol. I still remember the day my brother and I were playing “Need For Speed: Most Wanted” on his old PC. We were loosing like crazy and he suddenly closed the game, looked at a few videos from the internet and then did something in the files  of the game. Apparently, he increased the radius of the wheels. We started winning and from there, my passion was born. 
        I started learning from scratch using YouTube’s Bucky videos. I have been getting my hands dirty in all the programming languages I could. Now I am at university and I am still in pursuit for more knowledge. Learning through the education system has also been fun but it limits an individual’s imagination and creativity. I had a chance to visit the Johannesburg SovTech offices in August 2023, I couldn’t help but first notice the foosball table and everyone was so kind, it was welcoming, and I fell in love.
        "*/
        text=" The story begins when I was 15 years old, I was still a bit stupid, careless and still waiting for my first kiss, lol. 
        I still remember the day my brother and I were playing “Need For Speed: Most Wanted” on his old PC. 
        We were loosing like crazy and he suddenly closed the game, looked at a few videos from the internet and then did something in the files  of the game. 
        Apparently, he increased the radius of the wheels. We started winning and from there, my passion was born. 
        I started learning from scratch using YouTube’s Bucky videos. 
        I have been getting my hands dirty in all the programming languages I could. 
        Now I am at university and I am still in pursuit for more knowledge. 
        Learning through the education system has also been fun but it limits an individual’s imagination and creativity.
        In conclusion, my interest in becoming an Electrical and Electronic Engineer at Deloitte Consulting stems from my desire to work in a collaborative and dynamic environment where I can utilize my skills to make an impact.
        "
        img1={Tinashe4}
        img2={Tinashe5}
      />
    </div>
  );
};

export default Body;
