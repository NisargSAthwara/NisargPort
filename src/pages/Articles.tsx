
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";

const Articles = () => {
  const articles = [
    {
      title: "The Rise of Artificial Intelligence: Shaping the Future",
      description: "Artificial Intelligence (AI) is transforming the way we live, work, and interact with technology. At its core, AI refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions.",
      imageUrl: "/lovable-uploads/1c7468fd-56a3-410a-8ba4-20fa6281c289.png",
      tags: ["AI", "technology"],
    },
    {
      title: "Training a CNN with Keras: Image Classification Made Easy",
      description: "Dive into how convolutional neural networks work and build your first image classifier with Keras and TensorFlow.",
      imageUrl: "/lovable-uploads/489b7e4e-3a5c-4b94-aac8-1f63d523e2d4.png",
      tags: ["technology", "TensorFlow","Deep Learning", "CNN"],
    },
    {
      title: "Integrating a Machine Learning Model into a React App 🚀",
      description: "How to run predictions from a trained model using a React frontend and Flask or FastAPI backend. 🧠 ✨",
      imageUrl: "/lovable-uploads/1c7468fd-56a3-410a-8ba4-20fa6281c289.png",
      tags: ["technology", "development", "API Integration"],
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-4xl">📝</span>
          <h1 className="text-4xl font-bold">I write about technology</h1>
        </div>
        <p className="text-xl text-gray-600 mb-12">
          Ever since I was a kid, I've been fascinated by technology.
        </p>

        <div>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              tags={article.tags}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
