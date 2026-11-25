
import { useState } from "react";

function App() {
    const [count, setCount] = useState<number>(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>React Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>증가</button>
        </div>
    );
}

export default App;
