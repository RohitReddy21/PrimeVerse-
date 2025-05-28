import { motion } from "framer-motion";
// import { fadeIn } from "@/utils/motion";

const ServiceDetailWebDevelopment = () => {
  return (
    <section className="min-h-screen py-20 px-6 md:px-16 bg-white text-gray-900">
      <motion.h1
        // variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
      >
        Web-Development
      </motion.h1>

      <motion.p
        // variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 text-center mb-12"
      >
        Empower your online presence with our end-to-end Web Development services. From responsive designs to robust backend systems, we build solutions that scale with your business.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          // variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-6 bg-gray-100 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Custom website design & development</li>
            <li>Responsive, mobile-first layouts</li>
            <li>Modern front-end frameworks (React, Vue, etc.)</li>
            <li>Back-end integration (Node.js, Express, MongoDB)</li>
            <li>Performance optimization & SEO best practices</li>
          </ul>
        </motion.div>

        <motion.div
          // variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-6 bg-gray-100 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>User-first approach to design</li>
            <li>Agile development with regular updates</li>
            <li>SEO-friendly architecture</li>
            <li>Cross-browser & cross-device compatibility</li>
            <li>Secure and scalable solutions</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        // variants={fadeIn("up", 1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mt-16 text-center"
      >
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          Get a Free Quote
        </a>
      </motion.div>
    </section>
  );
};

export default ServiceDetailWebDevelopment;
