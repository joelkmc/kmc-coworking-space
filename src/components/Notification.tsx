import React from 'react'

interface NotificationProps {
  type: 'success' | 'warning' | 'danger' | 'info';
}

export const NotificationComp: React.FC<NotificationProps> = ({ type, children }) => {

  // Success Alert
  if (type === 'success'){
    return (
      <div className="my-3 bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
        { children }
      </div>
    )
  }

  // Danger Alert
  if (type === 'danger'){
    return (
      <div className="my-3 bg-red-200 border-l-4 border-red-600 text-red-800 p-4" role="alert">
        { children }
      </div>
    )
  }

  // Warning Alert
  if (type === 'warning'){
    return (
      <div className="my-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
        { children }
      </div>
    )
  }

  // Info Alert
  if (type === 'info'){
    return (
      <div className="my-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
        { children }
      </div>
    )
  }

  return null
}
