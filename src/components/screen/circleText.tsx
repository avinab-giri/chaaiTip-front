import React from 'react'

interface circleTextProps {
    'classname'?: string;
    'text': string;
}

const CircleText: React.FC<circleTextProps> = ({ classname, text }) => {
    return (
        <div className={`circleText ${classname}`}>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CircleText