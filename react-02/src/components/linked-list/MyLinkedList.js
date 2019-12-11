
// --- subject to change ---

import React from 'react';
import LinkedListFunctions from './MyLinkedListFunctions.js'
import { LinkedList } from './linked-list';

class LinkedListDisplay extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <LinkedListFunctions.Example />
                </div>
                <div>
                    <LinkedListFunctions.ExampleTwo />
                </div>
            </div>
        )
    }
}

export default LinkedListDisplay;