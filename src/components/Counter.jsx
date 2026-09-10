 import { useState } from "react";
 function Counter(){
    const[count, setCount]=useState(0);
   
    function increament(){
        setCount(count+1);
    }
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={increament}>Increment</button>
        </div>
    )
}
export default Counter