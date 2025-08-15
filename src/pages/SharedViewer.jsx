import React, { useState } from 'react'
import { Link as LinkIcon, Eye, Download, Folder, File, Image, Video, FileText, Archive, Code } from 'lucide-react'
import FileCard from '../components/FileCard'
import SharedLinkInput from '../components/SharedLinkInput'

const SharedViewer = () => {
  const [sharedLink, setSharedLink] = useState('')
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [viewMode, setViewMode] = useState('grid')

  const handleLoadSharedContent = async () => {
    if (!sharedLink.trim()) {
      setError('Please enter a shared link')
      return
    }

    try {
      setLoading(true)
      setError('')
      setFiles([])
      setSelectedFile(null)

      // For demo purposes, we'll simulate loading files
      // In a real app, this would call your backend API
      setTimeout(() => {
        const mockFiles = [
          {
            id: '1',
            name: 'Sample Document.pdf',
            mimeType: 'application/pdf',
            size: 2048576,
            modifiedTime: new Date().toISOString(),
            isFolder: false,
            thumbnailLink: null
          },
          {
            id: '2',
            name: 'Project Images',
            mimeType: 'application/vnd.google-apps.folder',
            size: 0,
            modifiedTime: new Date().toISOString(),
            isFolder: true,
            thumbnailLink: null
          },
          {
            id: '3',
            name: 'Presentation.pptx',
            mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            size: 1048576,
            modifiedTime: new Date().toISOString(),
            isFolder: false,
            thumbnailLink: null
          }
        ]
        setFiles(mockFiles)
        setLoading(false)
      }, 2000)

    } catch (error) {
      console.error('Error loading shared content:', error)
      setError('Failed to load shared content. Please check the link and try again.')
      setLoading(false)
    }
  }

  const handleFileClick = (file) => {
    setSelectedFile(file)
  }

  const getFileIcon = (mimeType, isFolder) => {
    if (isFolder) return <Folder className="w-8 h-8 text-blue-500" />
    
    if (mimeType.startsWith('image/')) return <Image className="w-8 h-8 text-green-500" />
    if (mimeType.startsWith('video/')) return <Video className="w-8 h-8 text-purple-500" />
    if (mimeType.startsWith('text/') || mimeType.includes('document')) return <FileText className="w-8 h-8 text-orange-500" />
    if (mimeType.includes('archive') || mimeType.includes('zip')) return <Archive className="w-8 h-8 text-red-500" />
    if (mimeType.includes('json') || mimeType.includes('xml')) return <Code className="w-8 h-8 text-indigo-500" />
    
    return <File className="w-8 h-8 text-gray-500" />
  }

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return 'N/A'
    
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          View Shared Google Drive Content
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Paste a Google Drive shared link to view and browse files without signing in
        </p>
      </div>

      {/* Shared Link Input */}
      <div className="card p-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <SharedLinkInput
            value={sharedLink}
            onChange={setSharedLink}
            onLoad={handleLoadSharedContent}
            loading={loading}
          />
          <p className="text-sm text-gray-500 mt-3 text-center">
            Supports Google Drive file links, folder links, and Google Docs/Sheets/Slides links
          </p>
        </div>
      </div>

      {/* Content Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Files List */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Shared Content
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="text-sm text-gray-500 ml-2">
                    {files.length} files
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-red-800">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{error}</span>
                  </div>
                </div>
              )}

              {loading ? (
                <div className="text-center py-12">
                  <div className="loading-spinner w-8 h-8 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading shared content...</p>
                </div>
              ) : files.length === 0 && sharedLink ? (
                <div className="text-center py-12">
                  <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No shared content found</h3>
                  <p className="text-gray-600">Try a different shared link or check the link permissions</p>
                </div>
              ) : files.length > 0 ? (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
                  {files.map((file) => (
                    <FileCard
                      key={file.id}
                      file={file}
                      viewMode={viewMode}
                      isSelected={selectedFile?.id === file.id}
                      onClick={() => handleFileClick(file)}
                      getFileIcon={getFileIcon}
                      formatFileSize={formatFileSize}
                      formatDate={formatDate}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <LinkIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Enter a Shared Link</h3>
                  <p className="text-gray-600">Paste a Google Drive shared link above to view its contents</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          {selectedFile && (
            <div className="card">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    {selectedFile.name}
                  </h3>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  {getFileIcon(selectedFile.mimeType, selectedFile.isFolder)}
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-medium text-gray-900">
                      {selectedFile.isFolder ? 'Folder' : selectedFile.mimeType}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-medium text-gray-900">
                      {formatFileSize(selectedFile.size)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Modified</p>
                    <p className="font-medium text-gray-900">
                      {formatDate(selectedFile.modifiedTime)}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <button className="btn-primary w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </button>
                  <button className="btn-secondary w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          How to use shared links
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Supported Link Formats:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 mt-1">•</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">https://drive.google.com/file/d/FILE_ID/view</code>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 mt-1">•</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">https://drive.google.com/drive/folders/FOLDER_ID</code>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 mt-1">•</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">https://docs.google.com/document/d/DOC_ID/edit</code>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Tips:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Make sure the link is set to "Anyone with the link can view"</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>For folders, you'll see files in a gallery or table</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Click a card to preview on the right</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharedViewer
