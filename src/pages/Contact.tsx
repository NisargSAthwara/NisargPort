
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-4xl">✉️</span>
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </div>
        <p className="text-lg text-gray-600 mb-12">
          Reach out to me over email or fill up this contact form. I will get back to you
          ASAP - I promise.
        </p>

        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
