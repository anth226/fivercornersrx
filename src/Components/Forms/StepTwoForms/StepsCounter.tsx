import React from 'react'

interface Props {
    step: string;
}
const StepsCounter: React.FC<Props> = ({ step }) => {
    return (<div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Question {String(step)}</p>
        <p><span style={{ color: "#2563EB" }}>{String(step)}</span>/17</p>
    </div>);
}

export default StepsCounter;