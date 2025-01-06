import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Briefcase, Book, Code, User } from 'lucide-react';

const Portfolio = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="w-full px-6">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-blue-600">GR</span>
            <div className="flex gap-8">
              {[
                { ref: aboutRef, icon: User, label: 'Sobre mí' },
                { ref: experienceRef, icon: Briefcase, label: 'Experiencia' },
                { ref: skillsRef, icon: Code, label: 'Habilidades' },
                { ref: educationRef, icon: Book, label: 'Educación' }
              ].map(({ ref, icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => scrollToSection(ref)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-blue-100 hover:text-blue-600"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full width */}
      <motion.header 
        className="w-full pt-32 pb-16 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-6 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <span className="text-4xl font-bold text-white">GR</span>
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
          Gonzalo Racero Galán
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 mb-8 text-center">
          Desarrollador Android Senior en Custos Mobile
        </h2>
        <div className="flex gap-6">
          {[
            { href: "mailto:gonzalo.racero.galan@icloud.com", icon: Mail },
            { href: "tel:671309164", icon: Phone },
            { href: "#", icon: Github },
            { href: "#", icon: Linkedin }
          ].map(({ href, icon: Icon }, index) => (
            <motion.a
              key={href}
              href={href}
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
              whileHover={{ y: -5 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Icon className="w-6 h-6 text-blue-600" />
            </motion.a>
          ))}
        </div>
      </motion.header>

      {/* Content Sections - Full width with padding */}
      <div className="w-full px-6">
        {/* About Section */}
        <motion.section 
          ref={aboutRef}
          className="mb-16 scroll-mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-blue-600" />
              Sobre mí
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>Me he especializado en el mundo Android, dedicando gran parte de mi trayectoria profesional en él. 
                 Sin embargo, también cuento con experiencia en el ecosistema iOS.</p>
              <p>A través de los años, he explorado herramientas como Retrofit, ROOM, DaggerHilt, Flow & Coroutines, 
                 Socket, Datastore Manager y cameraX. Recientemente, me he sumergido en Jetpack Compose.</p>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          ref={experienceRef}
          className="mb-16 scroll-mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Desarrollador Android Senior",
                company: "Custos Mobile",
                period: "Oct 2023 - Presente",
                description: "Desarrollo en Android de medios de pago POS y todo lo que ello implica (Programación en C, JNI, Servicios...)",
                technologies: ["Android", "Kotlin", "C", "JNI", "AIDL"]
              },
              {
                title: "Android & iOS Native Developer",
                company: "ICP",
                period: "Mar 2022 - Oct 2023",
                description: "Desarrollo de aplicaciones orientadas a la gestión de almacenes, testing, mejoras y mantenimiento.",
                technologies: ["Android", "iOS", "Kotlin", "Swift", "Room"]
              }
            ].map((job, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                    <p className="text-blue-600">{job.company}</p>
                  </div>
                  <span className="text-gray-500">{job.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          ref={skillsRef}
          className="mb-16 scroll-mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-600" />
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Kotlin', level: 90 },
                { name: 'Android', level: 95 },
                { name: 'Jetpack Compose', level: 85 },
                { name: 'Clean Architecture', level: 80 },
                { name: 'MVVM', level: 85 },
                { name: 'Testing', level: 75 },
                { name: 'JNI', level: 70 },
                { name: 'C', level: 65 }
              ].map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{tech.name}</span>
                    <span className="text-blue-600">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          ref={educationRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32 scroll-mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
              school: "IES Villablanca",
              period: "2020 - 2022",
              grade: "10"
            },
            {
              title: "Sistemas Microinformáticos y Redes (SMR)",
              school: "IES Villablanca",
              period: "2018 - 2020",
              grade: "9"
            }
          ].map((edu, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{edu.title}</h4>
                  <p className="text-blue-600">{edu.school}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500">{edu.period}</span>
                  <p className="text-green-600 font-semibold">Nota: {edu.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Footer */}
        <footer className="w-full py-8 text-center border-t border-gray-200 mt-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl font-bold text-blue-600">GR</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">Desarrollador Android Senior</span>
            </motion.div>
            <div className="flex gap-6">
              <a href="mailto:gonzalo.racero.galan@icloud.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:671309164" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Gonzalo Racero Galán. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;