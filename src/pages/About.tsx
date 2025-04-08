
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
            src="/lovable-uploads/anime.jpg" 
            alt="Aesthetic photo 1" 
            className="w-full h-56 object-cover rounded-lg"
          />
          <img 
            src="/lovable-uploads/robot.jpg" 
            alt="Aesthetic photo 2" 
            className="w-full h-56 object-cover rounded-lg"
          />
          <img 
            src="/lovable-uploads/underwater.jpg" 
            alt="Aesthetic photo 3" 
            className="w-full h-56 object-cover rounded-lg"
          />
          <img 
            src="/lovable-uploads/nightlife.jpg" 
            alt="Aesthetic photo 4" 
            className="w-full h-56 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Hey there, I'm Nisarg Sathwara - an innovative AI-ML Developer, a creative thinker, and a passionate
            student leader at GECM. Welcome to my corner of the tech universe!
          </p>

          <p className="text-lg">
            From crafting seamless web experiences using React to exploring the realms of AI integration, I
            thrive on merging creativity with technology. My mission is to build solutions that not only function
            flawlessly but also leave a lasting impression.
          </p>

          <p className="text-lg">
          Beyond coding, I'm constantly driven by a desire to explore and try new things—whether it's experimenting with creative ideas, diving into new technologies, or stepping out of my comfort zone to grow both personally and professionally.
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
