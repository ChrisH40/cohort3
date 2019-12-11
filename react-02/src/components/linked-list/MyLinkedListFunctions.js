
// --- test functions for now ---

import React, { useState, useEffect } from 'react';

const LinkedListFunctions = {

    Example() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
            </button>
            </div>
        );
    },

    ExampleTwo() {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
            </button>
            </div>
        );
    }
}

export default LinkedListFunctions;