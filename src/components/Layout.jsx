import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateValue, addTask, removeAll } from "./reducer/TodoReducer";
import List from './List';

const Layout = () => {
    const value = useSelector((state) => state.todo.inputTaskValue);
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateValue(e.target.value));
    };

    const handleKeyEnter = (e) => {
        if (e.key === "Enter") {
            dispatch(addTask());
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter task"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyEnter}
            />
            <button onClick={() => dispatch(addTask())}>Add</button>
            <button onClick={() => dispatch(removeAll())}>Delete All</button>


            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "20px"
                }}
            >
                {todos.length ? (
                    todos.map((todo) => <List key={todo.id} {...todo} />)
                ) : (
                    <h3>No todos...</h3>
                )}
            </div>
        </div>
    )
}

export default Layout