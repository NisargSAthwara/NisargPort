
import Layout from "@/components/Layout";
import ExperienceItem from "@/components/ExperienceItem";

const Resume = () => {
  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-4xl">💼</span>
            <h1 className="text-4xl font-bold">Work History</h1>
          </div>
          <p className="text-xl text-gray-600">
            I'm AI-ML developer that loves building products and web apps that
            can impact millions of lives.
          </p>
        </div>

        <div>
          <ExperienceItem
            timeframe="2025 - present"
            company="ADS"
            title="Student"
            subtitle="Mentoring junior students' learning."
            bullets={[
              "Learning focused on neural networks, CNNs, RNNs, and transformer architectures.",
              "Learned topics through deep learning projects using TensorFlow.",
              "Organized hands-on workshops on computer vision and model optimization..",
              "Covering advanced topics like backpropagation, overfitting, and fine-tuning pretrained models.",
            ]}
          />

          <ExperienceItem
            timeframe="2024 - 2025"
            company=""
            title="React.js"
            subtitle="Learning Full Stack Development with modern technologies."
            bullets={[
              "Built dynamic web applications using React.js.",
              "Developed backend APIs and integrated them with frontend interfaces.",
              "Deepened understanding of concepts through hands-on projects.",
              "Collaborated on building scalable Front-end applications .",
            ]}
          />

          <ExperienceItem
            timeframe="2023 - 2024"
            company=""
            title="HTML, CSS & Javascript Mastery"
            subtitle="Learning HTML, CSS, and Javascript."
            bullets={[
              "Created dynamic user interfaces using HTML, CSS, and js technologies.",
              "Focused on enhancing user experiences through clean, responsive designs.",
              "Developed aesthetically pleasing web applications to improve overall design.",
              "Applied js for optimized page and fast web performance.",
            ]}
          />

          {/* <ExperienceItem
            timeframe="2024 - 2024"
            company="Governor House Karachi"
            title="Senior Student at GIAC"
            subtitle="Advanced to senior role, mentoring peers."
            bullets={[
              "Advanced to a senior student role, mentoring peers in frontend development.",
              "Focused on frontend technologies like Next.js and Tailwind CSS for UI.",
              "Built responsive, user-friendly interfaces through practical projects and exercises.",
              "Assisted peers in understanding core frontend concepts and best practices.",
            ]}
          /> */}

          {/* <ExperienceItem
            timeframe="2023 — 2024"
            company="Governor House Karachi"
            title="JavaScript & TypeScript Proficiency"
            subtitle="Gained proficiency in JavaScript and TypeScript development."
            bullets={[
              "Developed CLI tools using JavaScript and TypeScript for various tasks.",
              "Published and managed packages on npm, enhancing package management skills.",
              "Optimized code for efficiency, scalability, and overall performance improvement.",
              "Implemented TypeScript features, ensuring code reliability and reducing errors.",
            ]}
          /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
