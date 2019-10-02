import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return (
        <div 
            className={`item${props.list.complete ? 'complete': ''}`}            
        >
            <p>{props.list.item}</p>
        </div>
    )
}

export default TodoList;