import React from "react";

function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
            <span className="close">{'\u00D7'}</span>
        </div>
    )
}

export default TodoItem