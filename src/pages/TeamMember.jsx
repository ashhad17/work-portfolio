import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import abdul from './images/abdul.jpg'

import ashhad from './images/ashhad.jpg'

function TeamMember() {
  const { id } = useParams();

  // This would typically fetch member data based on the ID
  const member = {
    id: 1,
    name: "Mohammed Ashhad",
    role: "Software Developer",
    image: ashhad,
    bio: " Full-stack developer in web development.",
    background: "Created responsive applications , specializing in scalable web applications.",
    education: [
      {
        degree: "Bachelor of Computer Science and Engineering",
        institution: "CIT",
        year: "2024"
      }
    ],
    expertise: [
      "Full-stack Development",
      "Team Leadership"
    ],
    achievements: [
      "Led team to sucessfully complete the Cients project",
    ],
    contact: {
      email: "mohammedashhad.work.com",
      linkedin: "https://linkedin.com/in/mohammedashhad2105",
      github: "https://github.com/ashhad17"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="bg-white dark:bg-dark-light rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 bg-primary">
          <img
            src={member.image}
            alt={member.name}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white dark:border-dark-light object-cover"
          />
        </div>
        
        <div className="pt-20 px-6 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
            <p className="text-xl text-primary mb-4">{member.role}</p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {member.bio}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href={member.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            
            <a
              href={member.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${member.contact.email}`}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {member.background}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution}, {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
              <ul className="space-y-2">
                {member.expertise.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Notable Achievements</h2>
              <ul className="space-y-2">
                {member.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamMember;