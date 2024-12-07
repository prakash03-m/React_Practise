import {useState} from 'react'
import { ToggleSwitch } from '../toggleSwitch/ToggleSwitch';

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [countDisplay, setCountDisplay] = useState(true);
    const countChangeHandler= (e, action) => {
	    console.log(e);
	    action === 'increment' ? setCount((prevCount) => prevCount+=1) : setCount((prevCount) => prevCount-=1);
    }

    const toggleHandler = (status) => {
        console.log(status);
        setCountDisplay(status)
    }

    return (
        <div>
            {countDisplay && <h3>{count}</h3>}
            <button onClick={(e) => countChangeHandler(e, "increment")}>Increment</button>
            <button onClick={(e) => countChangeHandler(e, "decrement")}>Decrement</button>
            <ToggleSwitch displayHandler={(status) => toggleHandler(status)}/>
        </div>
    )
}