import React from 'react'

const Alert = ({ title, color, text }) => {

    return (
        <div className={`p-4 mb-4 text-sm text-${color}-700 bg-${color}-100 rounded-lg`} role="alert">
            <span className="font-medium">{title}</span> {text}
        </div>
    )
}

export default Alert