import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: <FaCode className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.",
      features: [
        "Responsive Web Design",
        "Single Page Applications",
        "Progressive Web Apps",
        "Cross-browser Compatibility"
      ],
      price: "$80/hour",
      cta: "Start Project",
      testimonial: {
        text: "The new React dashboard reduced our data entry time by 65% and eliminated manual reporting tasks. The responsive design works flawlessly across all our devices.",
        author: "Alex",
        role: "Operations Manager",
        company: "TechFlow Solutions",
        location: "Austin, TX"
      }
    },
    // ... other services remain the same ...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ... rest of the code remains the same until the button ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-light rounded-lg p-8 shadow-lg"
          >
            <div className="text-primary mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-2xl font-bold text-primary mb-6">{service.price}</div>
            <blockquote className="border-l-4 border-primary pl-4 mb-6">
              <p className="italic text-gray-600 dark:text-gray-400 mb-2">{service.testimonial.text}</p>
              <footer className="text-sm text-gray-500 dark:text-gray-400">
                {service.testimonial.author} - {service.testimonial.role}
                <br />
                {service.testimonial.company}, {service.testimonial.location}
              </footer>
            </blockquote>
            <Link 
              to="/contact" 
              className="btn btn-primary w-full inline-block text-center transition-transform hover:scale-105 active:scale-95"
            >
              {service.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;