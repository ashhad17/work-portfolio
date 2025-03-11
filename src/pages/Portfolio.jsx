import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import alrazack from './images/alrazack.png'
import { span } from 'framer-motion/client';
function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Tours and Travels Agency Website",
      description: "A full-featured tours and travels web application",
      client: "Al Razack Tours International.",
      date: "August 2024",
      category: "web",
      image: alrazack,
      isLive:true,
      url:"https://www.alrazacktours.com/",
      testimonial: {
        text: "Customers increased by 56% within three months of launching the website. Happy with Responsive Design",
        author: "Mohammed Hussain",
        role: "CEO, Alrazack Tours International",
        location: "Tumkur, India"
      }
    },{
      id: 2,
      title: "Tours and Travels Agency Website",
      description: "A full-featured tours and travels web application",
      client: "Kabatulla Tours International.",
      date: "February 2025",
      category: "web",
      image: alrazack,
      isLive:true,
      url:"https://www.kabatullatours.com/",
      testimonial: {
        text: "Customers intraction raised one month of launching the website. Happy with Responsive Design and SEO",
        author: "Noor Mohammed",
        role: "Co-Owner, Kabatulla Tours International",
        location: "Banglore, India"
      }
    },
    // {
    //   id: 1,
    //   title: "E-commerce Platform",
    //   description: "A full-featured online store with cart and payment integration",
    //   client: "RetailCo Inc.",
    //   date: "March 2024",
    //   category: "web",
    //   image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    //   testimonial: {
    //     text: "Our online sales increased by 156% within three months of launching the new platform. The mobile-first design and streamlined checkout process transformed how we do business online.",
    //     author: "Sarah",
    //     role: "E-commerce Manager",
    //     location: "Boston, MA"
    //   }
    // }
    // ... other projects remain the same ...
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ... rest of the code remains the same until the button ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg"
          >
            {/* ... other project content remains the same ... */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Client: {project.client}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Completed: {project.date}
                </p>
                {/* <img src={alrazack} alt="" className='h-full w-96 mr-5'/> */}
              </div>
              <blockquote className="border-l-4 border-primary pl-4 mb-4">
                <p className="italic text-gray-600 dark:text-gray-400 mb-2">{project.testimonial.text}</p>
                <footer className="text-sm text-gray-500 dark:text-gray-400">
                  {project.testimonial.author} - {project.testimonial.role}
                  <br />
                  {project.testimonial.location}
                </footer>
              </blockquote>
              <Link 
                to={`/case-study/${project.id}`}
                className="mt-2 mb-2 btn btn-primary w-full inline-block text-center transition-transform hover:scale-105 active:scale-95"
              >
                View Case Study
              </Link>
              
              
              {
                (project.isLive)?(<a 
                
                  href={project.url}
                  target='_blank'
                  className="mt-2 mb-2 btn btn-primary w-full inline-block text-center transition-transform hover:scale-105 active:scale-95"
                >
                  Live Preview
                </a>):( 
                  <p className="italic text-gray-600 dark:text-gray-400 mb-2">Live Preview Not Available</p>
                )
                
              }
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;