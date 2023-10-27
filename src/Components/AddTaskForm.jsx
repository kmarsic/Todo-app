/* eslint-disable react/prop-types */
import { useState } from "react";
import { addTask } from "../redux/features/manageTasks/taskSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export function AddTaskForm () {

    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const onInputChange = e => setInputValue(e.target.value);

    function handleSubmit(e) {
        if (e.type === "submit") {
            e.preventDefault();
        }
        if (inputValue === "") return;
        dispatch(
            addTask({
                id: nanoid(),
                title: inputValue,
                completed: false
        }))
    
        setInputValue("");
    }

    return(
    <form onSubmit={handleSubmit} className="form">
        <label className="form-control">
            <input
            className="check"
            type="checkbox" 
            value={inputValue} 
            onChange={handleSubmit} 
            checked={false} 
            
            />
        </label >
        <div className="input">
            <input type="text"
            id="new-input"
            placeholder="Create a new todo..." 
            value={inputValue} 
            onChange={onInputChange}
            />
        </div>
        
    </form>
    )
}