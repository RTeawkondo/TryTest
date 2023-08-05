import React, { useState } from 'react'

export default function Greeting() {
    const [state,setState] = useState(false)
    const handlerState = () => {
        setState(prev=> !prev)
    }
  return (
    <>
    <h2>henho</h2>
    {state && <p>Ngu</p>}
    <button onClick={handlerState}>Change Text!</button>
    </>
  )
}
