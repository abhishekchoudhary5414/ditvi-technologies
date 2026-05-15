"use client"
import { useState, useEffect } from 'react'
import GetQuotePopup from './GetQuotePopup'

const PopupTrigger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show the popup 4 seconds after a full page load or refresh.
    // This component is mounted in `layout.tsx`, so it persists across
    // client-side navigation and will only remount on full reloads.
    const timer = setTimeout(() => setIsOpen(true), 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <GetQuotePopup
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  )
}

export default PopupTrigger
