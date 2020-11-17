import React from 'react'

interface BadgeProps {
  type: 'danger' | 'success' | 'warning' | 'info';
  title: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, children, title }) => {

    // Success Alert
    if (type === 'success'){
      return (
        <span className="bg-transparent text-green-700 bg-green-100 font-semibold py-2 px-5 border border-green-800 rounded">
          { title }
        </span>
      )
    }
  
    // Danger Alert
    if (type === 'danger'){
      return (
        <span className="bg-transparent text-red-800 bg-red-200 font-semibold py-2 px-5 border border-red-800 rounded">
          { title }
        </span>
      )
    }
  
    // Warning Alert
    if (type === 'warning'){
      return (
        <span className="bg-transparent text-yellow-600 bg-yellow-100 font-semibold py-2 px-5 border border-yellow-600 rounded">
          { title }
        </span>
      )
    }
  
    // Info Alert
    if (type === 'info'){
      return (
        <span className="bg-transparent text-blue-700 bg-blue-100 font-semibold py-2 px-5 border border-blue-700 rounded">
          { title }
        </span>
      )
    }
    

  return null
}