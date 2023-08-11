import { useState } from 'react'

export const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyClick = async () => {
    console.log('yeaha')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.error('Copy to clipboard failed:', error)
    }
  }

  return (
    <button className="copy-button" onClick={handleCopyClick}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
