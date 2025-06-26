"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function VerifyPage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const url = searchParams.get('url')
    
    if (!url) {
      setStatus('error')
      setMessage('Missing or invalid magic link')
      return
    }

    try {
      // Decode the URL
      const decodedUrl = decodeURIComponent(url)
      
      // Validate that it's a safe URL (optional security check)
      if (!decodedUrl.startsWith('http://') && !decodedUrl.startsWith('https://')) {
        setStatus('error')
        setMessage('Invalid redirect URL')
        return
      }

      // Redirect to the decoded URL
      window.location.href = decodedUrl
      
    } catch (error) {
      setStatus('error')
      setMessage('Error processing magic link')
      console.error('Verification error:', error)
    }
  }, [searchParams])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying your link...</p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h1>
          <p className="text-gray-600 mb-6">{message}</p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    )
  }

  return null
} 