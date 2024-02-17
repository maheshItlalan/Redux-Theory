import { useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import { increment,decrement,incrementByAmount } from "../state/counter/counterSlice";

const Counter = () =>{
    const count = useSelector((state:RootState)=> state.counter.value);
    const dispatch = useDispatch();

    return(<div>
        <div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(incrementByAmount(10))}>Increment By Amount</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    </div>);
}

export default Counter;