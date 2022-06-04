import React from 'react'

const TopicPage = (title) => {
    return (
        <>
            <p className="text-6xl mb-3">{title.title}</p>
            <div className="flex justify-center mb-8"></div>
        </>
    )
}

export default TopicPage