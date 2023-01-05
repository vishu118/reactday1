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
        <div className="container">
            <div>
                <p className="count">{count}</p>
            </div>
            <div className="button">
            <button onClick = {handleIncrement} className="btn">Increment</button>
            <button onClick = {handleDecrement} className="btn">Decrement</button>
            <button onClick = {handleReset} className="btn">Reset</button>
            </div>
        </div>
    )
}
