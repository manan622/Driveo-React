import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, Link as LinkIcon, Eye, Download, Search, Zap, Shield, Smartphone } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Eye,
      title: 'File Preview',
      description: 'Preview images, videos, and documents directly in your browser'
    },
    {
      icon: Download,
      title: 'Easy Download',
      description: 'Download files with a single click, no authentication required'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find files quickly with our intelligent search and filtering'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'No data is stored, files are accessed directly from Google Drive'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern React and optimized for performance'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Beautiful responsive design that works on all devices'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <div className="mb-8">
          <Cloud className="w-20 h-20 text-primary-600 mx-auto mb-6 animate-bounce-gentle" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            View Google Drive Files
            <span className="block text-primary-600">Without Signing In</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Share your Google Drive files with anyone using a simple link. 
            Recipients can view, preview, and download files instantly - no Google account required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shared"
              className="btn-success text-lg px-8 py-3 inline-flex items-center space-x-2"
            >
              <LinkIcon className="w-5 h-5" />
              <span>View Shared Files</span>
            </Link>
            <a
              href="#how-it-works"
              className="btn-secondary text-lg px-8 py-3 inline-flex items-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>Learn How</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary-600 mb-4">
                <Icon className="w-12 h-12" />
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

      {/* How It Works */}
      <div id="how-it-works" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Link</h3>
            <p className="text-gray-600">
              Copy the shared link from your Google Drive file or folder
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Paste & View</h3>
            <p className="text-gray-600">
              Paste the link in our viewer and instantly see your files
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse & Download</h3>
            <p className="text-gray-600">
              Preview files, browse folders, and download what you need
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white p-12 mb-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Share Your Files?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          No more emailing large files or asking people to create Google accounts. 
          Just share a link and they can access everything instantly.
        </p>
        <Link
          to="/shared"
          className="bg-white text-primary-600 hover:bg-gray-100 text-lg font-semibold px-8 py-3 rounded-lg inline-flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <LinkIcon className="w-5 h-5" />
          <span>Start Viewing Files</span>
        </Link>
      </div>

      {/* Supported Formats */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Supported File Types
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl mb-2">📄</div>
            <div className="font-medium text-gray-900">Documents</div>
            <div className="text-sm text-gray-600">PDF, Word, Google Docs</div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">🖼️</div>
            <div className="font-medium text-gray-900">Images</div>
            <div className="text-sm text-gray-600">JPG, PNG, GIF, WebP</div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">🎥</div>
            <div className="font-medium text-gray-900">Videos</div>
            <div className="text-sm text-gray-600">MP4, AVI, MOV, WebM</div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">📁</div>
            <div className="font-medium text-gray-900">Folders</div>
            <div className="text-sm text-gray-600">Browse entire directories</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
