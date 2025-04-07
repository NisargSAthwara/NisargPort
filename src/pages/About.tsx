
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-4xl">💬</span>
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-12">
          <img 
            src="/lovable-uploads/12f54e7c-c37a-41f9-a171-f9f977dbc61a.png" 
            alt="Aesthetic photo 1" 
            className="w-full h-56 object-cover rounded-lg"
          />
          <img 
            src="/lovable-uploads/118cbb20-90e6-45b9-92ec-04502a9d761b.png" 
            alt="Aesthetic photo 2" 
            className="w-full h-56 object-cover rounded-lg"
          />
          <img 
            src="/lovable-uploads/1ab2cc5f-6b56-4b37-8f9c-91d8083deff6.png" 
            alt="Aesthetic photo 3" 
            className="w-full h-56 object-cover rounded-lg"
          />
          <img 
            src="/lovable-uploads/2ba21c2b-425d-458b-ac34-676a58145e73.png" 
            alt="Aesthetic photo 4" 
            className="w-full h-56 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Hey there, I'm Your Name - an innovative Full Stack Developer, a creative thinker, and a passionate
            student leader at GIAC. Welcome to my corner of the tech universe!
          </p>

          <p className="text-lg">
            From crafting seamless web experiences using Next.js and React to exploring the realms of AI integration, I
            thrive on merging creativity with technology. My mission is to build solutions that not only function
            flawlessly but also leave a lasting impression.
          </p>

          <p className="text-lg">
            Beyond coding, I'm deeply inspired by user-centric design and storytelling. Whether it's shaping intuitive
            UIs or writing content that informs and inspires, I'm driven to make an impact through thoughtful innovation.
          </p>

          <p className="text-lg">
            Through this platform, I aim to share my journey, projects, and insights. Whether you're a fellow developer,
            a tech enthusiast, or someone who appreciates creativity, there's something here for you.
          </p>

          <p className="text-lg">
            Thank you for visiting, and I look forward to exploring the endless possibilities of technology and creativity
            with you.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
