import React, {useState} from "react";
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0)
    return <div className="Counter">
             <button className="Counter-button"
                     onClick={()=> setCount(count+1)}>{count}
             </button>
           </div>
}

export default Counter;