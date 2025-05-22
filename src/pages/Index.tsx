
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const featuredProjects = [
    {
      title: "AI vs Real - Image Classification Web App",
      description: "AI vs Real is an intelligent image classification platform that detects whether an image is AI-generated or real. Built with deep learning and a modern UI, the app enables users to upload images and instantly get classification results using a trained convolutional neural network (CNN) model.",
      imageUrl: "/lovable-uploads/aureal.png",
      technologies: ["React", "TensorFlow", "CNN", "Vite"],
    },
    {
      title: "House Price Predictor",
      description: "House Price Predictor is a data-driven web app that estimates property prices based on key features like location, area, number of rooms, and amenities. It uses a trained regression model to deliver accurate and real-time predictions for buyers and real estate professionals.",
      imageUrl: "/lovable-uploads/Homeprice.png",
      technologies: ["Python", "Flask", "Regression"],
    },
    {
      title: "Cloud Forecast - Weather Visualizer",
      description: "Cloud Forecast is a lightweight React app that visualizes cloud cover and weather conditions using live API data. With a clean UI and real-time updates, users can check cloud forecasts for any location instantly—no backend required.",
      imageUrl: "/lovable-uploads/cloudf.png", 
      technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"],
    },
  ];

  return (
    <Layout>
      <section className="mb-16">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-4xl">👋</span>
            <h1 className="text-4xl font-bold">Hello there! I'm Nisarg Sathwara</h1>
          </div>
          <p className="text-xl text-gray-600 mb-3">
          I'm an AI/ML engineer passionate about building intelligent systems and machine learning solutions that can impact millions of lives.
          </p>
          <p className="text-xl text-gray-600">
            I'm a student at GECM with a strong passion for innovation, building
            scalable and user-centric web apps  and AI that blend performance optimization
            with real-world impact.
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
           {/* <div className="text-gray-700">AI-ML</div>
            <div className="text-gray-700">Python</div>
            <div className="text-gray-700">SQL</div>
            <div className="text-gray-700"></div>
            <div className="text-gray-700">Html/CSS/Javascript</div>
            <div className="text-gray-700">PowerBi(Basic)</div>
            <div className="text-gray-700">Vercel</div>  */}
            <img src="/lovable-uploads/Python.svg" alt="Python" className="h-8" />
            <img src="/lovable-uploads/MySQL.svg" alt="MySQL" className="h-8" />
            <img src="/lovable-uploads/React.svg" alt="React.js" className="h-8" />
            <img src="/lovable-uploads/HTML5.svg" alt="HTML" className="h-8" />
            <img src="/lovable-uploads/CSS3.svg" alt="CSS" className="h-8" />
            <img src="/lovable-uploads/JavaScript.svg" alt="JavaScript" className="h-8" />
            <img src="/lovable-uploads/Bootstrap.svg" alt="Bootstrap" className="h-8" />
            <img src="/lovable-uploads/power-bi.svg" alt="Power Bi(Basic)" className="h-8" />
            <img src="/lovable-uploads/Vercel.svg" alt="Vercel" className="h-8" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
