import { useState } from "react";

import './CountNumber.css';

const CountNumber = (props) => {
    const [count, setCount] = useState(parseInt(props.initValue));
    return (
        <div className="CountNumber">
            <div className="CountNumber__show">{count}</div>
            <div className="CountNumber__controls">
                <button className="CountNumber__control-btn"
                    onClick={() => setCount(count + 1)}
                >+</button>
                <button className="CountNumber__control-btn"
                    onClick={() => (count - 1) > -1 && setCount(count - 1)}
                >-</button>
            </div>
        </div>
    );
}

export default CountNumber;