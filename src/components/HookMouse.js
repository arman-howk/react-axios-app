import React,{ useState, useEffect } from 'react'

function HookMouse() {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    useEffect(() => {
        console.log("useEffect was run")
        window.addEventListener('mousemove', logMouseMove)
        return() => {
            console.log("useEffect returns and unmount eventlisteners")
            window.removeEventListener('mousemove', logMouseMove)
        }
    },[])

    const logMouseMove = (e) => {
        console.log('mouse event fired')
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            x: {x} _ y: {y}
        </div>
    )
}

export default HookMouse
