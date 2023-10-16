import { useState } from "react";

export default function NewTodoForm (props) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        if (e.type === "submit") {
            e.preventDefault();
        }
        if (newItem === "") return;

        props.onSubmit(newItem);

        setNewItem("");
    }

    return(
    <form onSubmit={handleSubmit} className="form">
        <label className="form-control">
            <input
            className="check"
            type="checkbox" 
            value={newItem} 
            onChange={handleSubmit} 
            checked={false} 
            
            />
        </label >
        <div className="input">
            <input type="text"
            id="new-input"
            placeholder="Create a new todo..." 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            />
        </div>
        
    </form>
    )
}