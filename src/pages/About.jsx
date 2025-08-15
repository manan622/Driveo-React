import React from 'react'
import { Cloud, Shield, Zap, Heart, Github, Mail, Globe } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Built for the cloud era with modern web technologies and best practices'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No data is stored on our servers. Files are accessed directly from Google Drive'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for performance with React 18, Vite, and Tailwind CSS'
    }
  ]

  const techStack = [
    { name: 'React 18', description: 'Latest React with hooks and modern patterns' },
    { name: 'Vite', description: 'Fast build tool and development server' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'Lucide React', description: 'Beautiful, customizable icons' },
    { name: 'React Router', description: 'Declarative routing for React' }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <Cloud className="w-20 h-20 text-primary-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Driveo
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern, open-source Google Drive file viewer built with React and Tailwind CSS. 
          Share your files with anyone using simple links.
        </p>
      </div>

      {/* Mission */}
      <div className="card p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Driveo was created to solve a simple problem: sharing Google Drive files with people 
          who don't have Google accounts or don't want to sign in. We believe file sharing should 
          be simple, fast, and accessible to everyone.
        </p>
        <p className="text-gray-600">
          By focusing on shared links and removing the complexity of authentication, 
          we've created a tool that's perfect for teams, educators, content creators, 
          and anyone who needs to share files quickly and easily.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="card p-6 text-center">
              <div className="text-primary-600 mb-4">
                <Icon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Tech Stack */}
      <div className="card p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium text-gray-900">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Source */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white p-8 mb-12">
        <div className="text-center">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Open Source</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Driveo is completely open source and free to use. We believe in transparency, 
            community collaboration, and making great tools accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/yourusername/driveo-react"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg inline-flex items-center space-x-2 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
            <a
              href="https://github.com/yourusername/driveo-react/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-6 py-3 rounded-lg inline-flex items-center space-x-2 transition-all duration-200"
            >
              <span>Report Issues</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <Github className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">GitHub</h4>
            <p className="text-sm text-gray-600">View source code and contribute</p>
          </div>
          <div className="p-4">
            <Mail className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Email</h4>
            <p className="text-sm text-gray-600">hello@driveo.app</p>
          </div>
          <div className="p-4">
            <Globe className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Website</h4>
            <p className="text-sm text-gray-600">https://driveo.app</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500">
        <p>&copy; 2024 Driveo. Built with ❤️ and open source.</p>
      </div>
    </div>
  )
}

export default About
