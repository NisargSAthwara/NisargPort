
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const featuredProjects = [
    {
      title: "ShopKaro",
      description: "ShopKaro provides a smooth shopping experience with effortless scrolling, secure COD checkout, and email notifications for order updates.",
      imageUrl: "/lovable-uploads/ea9efcd7-87db-4bfe-a5f3-69c07770eb02.png",
      technologies: ["Next.js", "TailwindCSS", "Sanity"],
    },
    {
      title: "Free Resume Builder",
      description: "FreeResumeBuilder allows users to create professional resumes with customizable templates, instant preview, and free downloads.",
      imageUrl: "/lovable-uploads/efb2cb6c-e9cd-4f52-9c6f-deb67567ce8d.png",
      technologies: ["Next.js", "TailwindCSS", "MongoDB"],
    },
    {
      title: "Blogafay",
      description: "Blogafay is a full-stack blog website with admin controls for post management and an interactive comment system for readers, hosted on Vercel for seamless performance.",
      imageUrl: "/lovable-uploads/9561c7e8-0602-4193-9583-d7fa097e8890.png",
      technologies: ["Next.js", "TailwindCSS", "MongoDB"],
    },
  ];

  return (
    <Layout>
      <section className="mb-16">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-4xl">👋</span>
            <h1 className="text-4xl font-bold">Hello there! I'm Your Name</h1>
          </div>
          <p className="text-xl text-gray-600 mb-3">
            I'm a full-stack developer that loves building products and web apps that
            can impact millions of lives
          </p>
          <p className="text-xl text-gray-600">
            I'm a student leader at GIAC with a strong passion for innovation, building
            scalable and user-centric web apps that blend performance optimization
            with stunning design.
          </p>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">⚡</span>
            <h2 className="text-3xl font-bold">What I've been working on</h2>
          </div>

          <div>
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="text-gray-700">Next.js</div>
            <div className="text-gray-700">AWS</div>
            <div className="text-gray-700">Firebase</div>
            <div className="text-gray-700">Motion</div>
            <div className="text-gray-700">Node.js</div>
            <div className="text-gray-700">TailwindCSS</div>
            <div className="text-gray-700">Vercel</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
