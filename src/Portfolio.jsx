import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Terminal, Server, Code, Mail, Linkedin, Github, Cpu, Coffee, Sparkles } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1a1b2e]">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradientes animados */}
        <div className="absolute w-[800px] h-[800px] bg-purple-600/20 rounded-full filter blur-3xl -top-1/2 -right-1/4 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full filter blur-3xl top-1/4 -left-1/4 animate-pulse delay-1000" />
        <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 rounded-full filter blur-3xl bottom-[-20%] right-[-10%] animate-pulse delay-2000" />
        
        {/* Grid de puntos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:30px_30px]" />
        
        {/* Líneas flotantes */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, y: Math.random() * window.innerHeight }}
              animate={{ 
                x: window.innerWidth + 100,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
              }}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[200px]"
            />
          ))}
        </div>

        {/* Elementos de móvil flotantes */}
        <div className="hidden md:block">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -100,
                rotate: Math.random() * 360
              }}
              animate={{ 
                y: window.innerHeight + 100,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 5,
              }}
              className="absolute w-16 h-32 border-2 border-white/10 rounded-2xl opacity-20"
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/20 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
        <span className="text-sm">Scroll</span>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen"
      >
        <div className="container mx-auto py-20 px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/3 relative flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Marco de móvil decorativo */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-[3rem] opacity-75 animate-pulse" />
                <div className="absolute -inset-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-[4rem] opacity-30 animate-reverse-spin" />
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 h-full backdrop-blur-sm bg-[#1a1b2e]/80">
                  {/* Notch del móvil */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/10 rounded-full backdrop-blur-md z-20" />
                  {/* Botones laterales */}
                  <div className="absolute right-[-4px] top-20 w-1 h-8 bg-white/20 rounded-l-lg" />
                  <div className="absolute right-[-4px] top-32 w-1 h-8 bg-white/20 rounded-l-lg" />
                  <div className="absolute left-[-4px] top-24 w-1 h-12 bg-white/20 rounded-r-lg" />
                  <img
                    src="/api/placeholder/500/500"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Indicador de apps */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1 h-1 bg-white/50 rounded-full" />
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                  </div>
                </div>
                {/* Elementos flotantes */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-60 blur-sm"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60 blur-sm"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 space-y-8 text-center"
            >
              <h1 className="text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Android Senior
                </span>
                <br />
                <span className="text-white">Dev</span>
              </h1>
              <p className="text-xl text-gray-300">
                Transformando ideas en experiencias móviles excepcionales
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'Kotlin', icon: '🎯' },
                  { name: 'Android', icon: '🤖' },
                  { name: 'JNI', icon: '🔧' },
                  { name: 'C', icon: '⚡' }
                ].map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transition: { duration: 0.2 }
                    }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-gray-300 cursor-pointer transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Mi Trayectoria
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "Custos Mobile",
                period: "2023 - Actual",
                role: "Android Senior Developer",
                description: "Desarrollo de soluciones de pago POS en Android",
                skills: ["C/JNI", "AIDL", "Jetpack Compose"],
                icon: <Terminal className="w-6 h-6" />,
                gradient: "from-purple-500 to-blue-500"
              },
              {
                title: "ICP",
                period: "2022 - 2023",
                role: "Android & iOS Developer",
                description: "Desarrollo de apps para gestión de almacenes",
                skills: ["Android Room", "SDK", "Testing"],
                icon: <Smartphone className="w-6 h-6" />,
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${job.gradient} shrink-0`}>
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <p className="text-cyan-400">{job.period}</p>
                      <p className="text-gray-300 mt-2">{job.description}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {job.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Stack Tecnológico
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <Smartphone />, title: "Android Nativo", gradient: "from-purple-500 to-blue-500" },
              { icon: <Terminal />, title: "C / JNI", gradient: "from-blue-500 to-cyan-500" },
              { icon: <Coffee />, title: "Kotlin", gradient: "from-cyan-500 to-purple-500" },
              { icon: <Cpu />, title: "POS", gradient: "from-purple-500 to-cyan-500" },
              { icon: <Server />, title: "Backend", gradient: "from-blue-500 to-purple-500" },
              { icon: <Sparkles />, title: "UI/UX", gradient: "from-cyan-500 to-blue-500" }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-lg bg-gradient-to-br ${skill.gradient}`}>
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg text-white">{skill.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-8 text-white"
          >
            ¿Hablamos?
          </motion.h2>
          
          <div className="flex justify-center gap-6">
            {[
              { icon: <Mail />, href: "#", gradient: "from-purple-500 to-blue-500" },
              { icon: <Linkedin />, href: "#", gradient: "from-blue-500 to-cyan-500" },
              { icon: <Github />, href: "#", gradient: "from-cyan-500 to-purple-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                className={`p-4 rounded-full bg-gradient-to-r ${social.gradient} hover:shadow-lg hover:shadow-white/10 transition-all duration-300`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;