"use client"
import { X } from "lucide-react"

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex flex-col items-center">
        <a href="#home" className="text-white text-xl py-2" onClick={onClose}>
          Home
        </a>
        <a href="#about" className="text-white text-xl py-2" onClick={onClose}>
          About
        </a>
        <a href="#skills" className="text-white text-xl py-2" onClick={onClose}>
          Skills
        </a>
        <a href="#projects" className="text-white text-xl py-2" onClick={onClose}>
          Projects
        </a>
        <a href="#achievements" className="text-white text-xl py-2" onClick={onClose}>
          Achievements
        </a>
        {/* <a href="#contact" className="text-white text-xl py-2" onClick={onClose}>
          Contact
        </a> */}
      </nav>
    </div>
  )
}

export default MobileMenu

