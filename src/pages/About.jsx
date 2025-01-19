import { motion } from 'framer-motion';

function About() {
  const team = [
    {
      name: "John Doe",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      bio: "10+ years of experience in web development"
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      bio: "Passionate about creating beautiful user experiences"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to create impactful digital solutions"
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to a team of 5 talented professionals"
    },
    {
      year: "2022",
      title: "50+ Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      year: "2023",
      title: "International Recognition",
      description: "Received multiple awards for excellence in web development"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Company Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Our Story</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          <p className="mb-4">
            Founded in 2020, we started with a simple mission: to create exceptional digital experiences that make a difference.
          </p>
          <p>
            Today, we're a team of passionate developers and designers working together to bring innovative solutions to businesses worldwide.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Constantly pushing boundaries and embracing new technologies
            </p>
          </div>
          <div className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Delivering excellence in every project we undertake
            </p>
          </div>
          <div className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Working closely with clients to achieve their goals
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg flex items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mr-6"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Company Milestones</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-primary text-white px-4 py-2 rounded-lg mr-4">
                {milestone.year}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;