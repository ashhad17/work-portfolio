import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
// import ChatBot from '../components/ChatBot';
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Full-Stack Developer Building Modern Web Solutions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Transforming ideas into elegant, scalable, and user-friendly applications
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/portfolio" className="btn btn-primary">
            View Portfolio
          </Link>
          <Link to="/contact" className="btn bg-gray-200 dark:bg-dark-light hover:bg-gray-300 dark:hover:bg-gray-700">
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="section-title">Featured Projects</h2>
        <Portfolio/>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-dark-light">
            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creating responsive and interactive user interfaces using modern frameworks
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-dark-light">
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building robust and scalable server-side applications and APIs
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-dark-light">
            <h3 className="text-xl font-bold mb-4">Full-Stack Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              End-to-end development of web applications with seamless integration
            </p>
          </div>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
  );
}

export default Home;