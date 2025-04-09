
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI vs Real - Image Classification Web App",
      description: "AI vs Real is an intelligent image classification platform that detects whether an image is AI-generated or real. Built with deep learning and a modern UI, the app enables users to upload images and instantly get classification results using a trained convolutional neural network (CNN) model.",
      imageUrl: "/lovable-uploads/49bab6f1-576c-462c-870b-297fb1a309b0.png",
      technologies: ["React", "TensorFlow", "CNN", "Vite"],
    },
    {
      title: "IPL Match Win Predictor",
      description: "IPL Match Win Predictor is a machine learning-based web app that forecasts the winning team of an IPL match based on live or pre-match data. Using team stats, venue history, toss outcome, and key performance indicators, the model delivers accurate and insightful predictions.",
      imageUrl: "/lovable-uploads/c0d7f362-69c3-46f1-b972-d238d0e09939.png",
      technologies: ["Python", "XGBoost", "React", "Pandas"],
    },
    {
      title: "House Price Predictor",
      description: "House Price Predictor is a data-driven web app that estimates property prices based on key features like location, area, number of rooms, and amenities. It uses a trained regression model to deliver accurate and real-time predictions for buyers and real estate professionals.",
      imageUrl: "/lovable-uploads/ea9efcd7-87db-4bfe-a5f3-69c07770eb02.png",
      technologies: ["Python", "Flask", "Regression"],
    },
    {
        title: "Cloud Forecast - Weather Visualizer",
        description: "Cloud Forecast is a lightweight React app that visualizes cloud cover and weather conditions using live API data. With a clean UI and real-time updates, users can check cloud forecasts for any location instantly—no backend required.",
        imageUrl: "/lovable-uploads/ea9efcd7-87db-4bfe-a5f3-69c07770eb02.png", 
        technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"],
    },  
    {
        title: "SecureAuth Dashboard",
        description: "SecureAuth Dashboard is a React-based authentication system designed for admin panels and dashboards. It features protected routes, role-based access control, and session management—all built without a backend for demo purposes.",
        imageUrl: "/lovable-uploads/ea9efcd7-87db-4bfe-a5f3-69c07770eb02.png",
        technologies: ["React", "CSS", "React Router", "Context API"],
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
