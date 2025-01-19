import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function CaseStudy() {
  const { id } = useParams();

  // This would typically fetch case study data based on the ID
  // For now, we'll use static data
  const caseStudy = {
    title: "E-commerce Platform Case Study",
    client: "RetailCo Inc.",
    duration: "3 months",
    challenge: "The client needed a modern e-commerce platform that could handle high traffic and provide a seamless mobile shopping experience.",
    solution: "Implemented a React-based frontend with a Node.js backend, utilizing modern e-commerce best practices and mobile-first design principles.",
    results: [
      "156% increase in online sales",
      "45% improvement in mobile conversion rate",
      "65% reduction in cart abandonment",
      "98% positive user feedback"
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Stripe"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">{caseStudy.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <span className="font-bold">Client:</span> {caseStudy.client}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-bold">Duration:</span> {caseStudy.duration}
            </p>
          </div>
          
          <div className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 dark:text-gray-400">{caseStudy.challenge}</p>
          </section>

          <section className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600 dark:text-gray-400">{caseStudy.solution}</p>
          </section>

          <section className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {caseStudy.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default CaseStudy;