import React , {useState} from "react";



export default function Counter(){
    const [count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    function handleReset(){
        setCount(0)
    }
   
    return(
        <div>
            <div>
                <p class="count">{count}</p>
            </div>
            <button onClick = {handleIncrement} class="btn">Increment</button>
            <button onClick = {handleDecrement} class="btn">Decrement</button>
            <button onClick = {handleReset} class="btn">Reset</button>
        </div>
    )
}
