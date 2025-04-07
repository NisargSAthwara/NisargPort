
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
            I'm a full-stack developer that loves building products and web apps that
            can impact millions of lives.
          </p>
        </div>

        <div>
          <ExperienceItem
            timeframe="2024 - present"
            company="Governor House Karachi"
            title="Student Leader"
            subtitle="Mentoring peers and supporting junior students' learning."
            bullets={[
              "Led frontend development projects, mentoring peers on best practices.",
              "Provided guidance on complex concepts related to Next.js and Tailwind CSS.",
              "Collaborated with faculty and students to improve learning outcomes.",
              "Organized and facilitated study sessions to support junior students.",
            ]}
          />

          <ExperienceItem
            timeframe="2024 - 2025"
            company="Governor House Karachi"
            title="Full Stack Developer"
            subtitle="Learning Full Stack Development with modern technologies."
            bullets={[
              "Built dynamic web applications using Next.js, MongoDB, and Node.js.",
              "Developed backend APIs and integrated them with frontend interfaces.",
              "Deepened understanding of full-stack concepts through hands-on projects.",
              "Collaborated on building scalable full-stack applications with peers.",
            ]}
          />

          <ExperienceItem
            timeframe="2024 - 2024"
            company="Governor House Karachi"
            title="HTML, CSS & Next.js Mastery"
            subtitle="Learning HTML, CSS, and Next.js development."
            bullets={[
              "Created dynamic user interfaces using HTML, CSS, and Next.js technologies.",
              "Focused on enhancing user experiences through clean, responsive designs.",
              "Developed aesthetically pleasing web applications to improve overall design.",
              "Applied Next.js for optimized page routing and fast web performance.",
            ]}
          />

          <ExperienceItem
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
          />

          <ExperienceItem
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
          />
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
