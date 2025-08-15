import React, { useState } from 'react'
import { Link as LinkIcon, Loader2 } from 'lucide-react'

const SharedLinkInput = ({ value, onChange, onLoad, loading }) => {
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!value.trim()) {
      setError('Please enter a shared link')
      return
    }

    if (!isValidGoogleDriveLink(value)) {
      setError('Please enter a valid Google Drive shared link')
      return
    }

    setError('')
    onLoad()
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  const isValidGoogleDriveLink = (link) => {
    const patterns = [
      /drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+/,
      /drive\.google\.com\/drive\/folders\/[a-zA-Z0-9_-]+/,
      /drive\.google\.com\/open\?id=[a-zA-Z0-9_-]+/,
      /docs\.google\.com\/[a-z]+\/d\/[a-zA-Z0-9_-]+/
    ]
    return patterns.some(p => p.test(link))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="url"
              className={`input pl-10 ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="Paste your Google Drive shared link here..."
              value={value}
              onChange={(e) => {
                onChange(e.target.value)
                setError('')
              }}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="btn-success px-6 py-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                View Content
              </>
            )}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="mt-2 text-sm text-red-600 flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export default SharedLinkInput
