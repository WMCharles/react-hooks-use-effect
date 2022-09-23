import {useEffect, useState} from "react"
import DogPics from "./DogPics"

function Effect(){

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    useEffect(
        () => {document.title = text},
        [text]
    )

    useEffect (() => {
        setTimeout(() => setCount(0), 5000)
    }, [])

    useEffect(
        () => console.log("useEffect called!"),
        [count]
    )

    console.log("Component Rendering !!")

    return (
        <div>
          <DogPics/>
            <button onClick={() => setCount((count) => count + 1)}>Clicked {count} times</button>
            <input
                type="text"
                placeholder="Type away..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}

export default Effect;