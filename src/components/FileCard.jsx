import React from 'react'
import { Eye, Download, Folder, File, Image, Video, FileText, Archive, Code } from 'lucide-react'

const FileCard = ({ 
  file, 
  viewMode, 
  isSelected, 
  onClick, 
  getFileIcon, 
  formatFileSize, 
  formatDate 
}) => {
  const isFolder = file.isFolder || file.mimeType === 'application/vnd.google-apps.folder'

  if (viewMode === 'list') {
    return (
      <div 
        className={`card p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
          isSelected ? 'ring-2 ring-primary-500 bg-primary-50' : 'hover:bg-gray-50'
        }`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {getFileIcon ? getFileIcon(file.mimeType, isFolder) : (
              isFolder ? <Folder className="w-8 h-8 text-blue-500" /> : <File className="w-8 h-8 text-gray-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 truncate" title={file.name}>
              {file.name}
            </h4>
            <p className="text-sm text-gray-500">
              {isFolder ? 'Folder' : file.mimeType || 'File'}
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-sm text-gray-500">
              {formatFileSize ? formatFileSize(file.size) : 'N/A'}
            </div>
            <div className="text-sm text-gray-500">
              {formatDate ? formatDate(file.modifiedTime) : 'N/A'}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex space-x-2">
              <button 
                className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                title="Preview"
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle preview
                }}
              >
                <Eye className="w-4 h-4" />
              </button>
              <button 
                className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                title="Download"
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle download
                }}
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`card cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-primary-500 bg-primary-50' : ''
      }`}
      onClick={onClick}
    >
      {/* File Preview/Icon */}
      <div className="aspect-square bg-gray-100 flex items-center justify-center p-6">
        {file.thumbnailLink && !isFolder ? (
          <img 
            src={file.thumbnailLink} 
            alt={file.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-center">
            {getFileIcon ? getFileIcon(file.mimeType, isFolder) : (
              isFolder ? <Folder className="w-16 h-16 text-blue-500" /> : <File className="w-16 h-16 text-gray-500" />
            )}
          </div>
        )}
        
        {/* File Type Badge */}
        {isFolder && (
          <div className="absolute top-2 right-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
              Folder
            </span>
          </div>
        )}
        
        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-2 left-2">
            <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              Selected
            </span>
          </div>
        )}
      </div>
      
      {/* File Info */}
      <div className="p-4">
        <h4 className="font-medium text-gray-900 truncate mb-1" title={file.name}>
          {file.name}
        </h4>
        <p className="text-sm text-gray-500 mb-2">
          {isFolder ? 'Folder' : file.mimeType || 'File'}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{formatFileSize ? formatFileSize(file.size) : 'N/A'}</span>
          <span>{formatDate ? formatDate(file.modifiedTime) : 'N/A'}</span>
        </div>
      </div>
    </div>
  )
}

export default FileCard
