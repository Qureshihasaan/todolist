"use client";
import { useState } from "react";
const TodoApp = () => {

    const [tasks, setTasks] = useState<string[]>([]);
    const [taskText, setTaskText] = useState('');

    const handleTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
    };
    const addTask = () => {
        const trimmedText = taskText.trim();
        if (trimmedText === '') return;

        setTasks([...tasks, trimmedText]);
        setTaskText('');
    };
    const deleteTask = (index: number) => {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    };
    return (
        <>  <div className=" justify-center rounded-xl shadow-xl">
            <h1 className=" text-3xl font-extrabold text-center">Todo App</h1>
            <div className="flex m-10">
                <input
                    type="text"
                    id="task input"
                    placeholder="Add something to do..."
                    value={taskText}
                    onChange={handleTaskInput}
                    className=" outline cursor-text rounded"
                />
                <button className=" bg-green-400 text-white px-3 mx-2 w-1/2 h-1/3"
                    id="add button"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>
            <div className=" text-center ">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className="m-5 font-medium ">
                            <span>
                                {task}
                            </span>

                            <button className=" px-4 mx-5 bg-red-500 text-white rounded "
                                onClick={() => deleteTask(index)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
        </>
    )




}

export default TodoApp;