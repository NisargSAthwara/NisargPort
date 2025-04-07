
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "SHOPCO - A Modern & Responsive E-commerce Platform",
      description: "SHOP.CO is a premium e-commerce platform built during a hackathon, featuring a sleek, responsive design and smooth user experience. With high-quality product listings, a shopping cart, and a secure checkout process, this platform ensures an effortless online shopping experience.",
      imageUrl: "/lovable-uploads/49bab6f1-576c-462c-870b-297fb1a309b0.png",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe"],
    },
    {
      title: "Introducing Reasonable AI",
      description: "Reasonable AI is a smart chatbot powered by Gemini 2.0 Flash, using iterative reasoning to refine responses in multiple steps. It analyzes queries, enhances prompts, and delivers highly accurate answers faster than standard AI chatbots.",
      imageUrl: "/lovable-uploads/c0d7f362-69c3-46f1-b972-d238d0e09939.png",
      technologies: ["Python", "Streamlit", "Gemini-2.0-flash"],
    },
    {
      title: "ShopKaro",
      description: "ShopKaro provides a smooth shopping experience with effortless scrolling, secure COD checkout, and email notifications for order updates.",
      imageUrl: "/lovable-uploads/ea9efcd7-87db-4bfe-a5f3-69c07770eb02.png",
      technologies: ["Next.JS", "TailwindCSS", "Sanity"],
    },
    {
      title: "Free Resume Builder",
      description: "FreeResumeBuilder allows users to create professional resumes with customizable templates, instant preview, and free downloads.",
      imageUrl: "/lovable-uploads/efb2cb6c-e9cd-4f52-9c6f-deb67567ce8d.png",
      technologies: ["Next.JS", "TailwindCSS", "MongoDB"],
    },
    {
      title: "Blogafay",
      description: "Blogafay is a full-stack blog website with admin controls for post management and an interactive comment system for readers, hosted on Vercel for seamless performance.",
      imageUrl: "/lovable-uploads/9561c7e8-0602-4193-9583-d7fa097e8890.png",
      technologies: ["Next.JS", "TailwindCSS", "MongoDB"],
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-4xl">⚡</span>
          <h1 className="text-4xl font-bold">What I've been working on</h1>
        </div>

        <div>
          {projects.map((project, index) => (
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
    </Layout>
  );
};

export default Projects;
