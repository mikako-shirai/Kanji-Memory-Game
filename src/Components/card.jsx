import React, { useState, useEffect, useRef } from 'react'

export function flashcard({card}) {
    const [flipped, setFlipped] = useState(false);
    const front = useRef();
    const back = useRef();
return (
    <div className={`card ${flipped ? flipped : ''}`} onClick={() => setFlipped(!flipped)}
)
}