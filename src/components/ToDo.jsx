import DuplicatePopUp from "./DuplicatePopUp";
import { FaPlus, FaEdit, FaTrash, FaCheck, FaSave } from "react-icons/fa";

export default function ToDo({
    task,
    setTask,
    tasks,
    addTask,
    deleteTask,
    handleCheckButton,
    handleEdit,
    handleSave,
    setTasks,
    setShowDuplicate,
    showDuplicate
}) {
    return (
        <div className="relative min-h-screen flex items-start justify-center px-4 pt-12 sm:pt-24">

            <div className="absolute w-75 sm:w-125 h-75 sm:h-125 bg-blue-600 rounded-full blur-[120px] opacity-20 top-25 left-25" />
            <div className="absolute w-75 sm:w-125 h-75 sm:h-125 bg-blue-600 rounded-full blur-[120px] opacity-20 bottom-100 right-25" />

            <div className="relative w-full max-w-2xl backdrop-blur-xl bg-blue-900/30 border border-white/30 shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-3xl p-6 sm:p-10 text-white">

                <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    My Tasks
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                    <input
                        className="flex-1 px-4 sm:px-5 py-3 rounded-2xl bg-blue-400/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
                        type="text"
                        placeholder="Add a new task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />

                    <button
                        type="button"
                        onClick={addTask}
                        className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 to-blue-900 hover:scale-105 transition transform px-6 py-3 rounded-2xl font-semibold shadow-lg"
                    >
                        <FaPlus />
                        Add
                    </button>
                </div>

                <ul className="space-y-4">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 
    bg-white/5 backdrop-blur-md px-4 sm:px-6 py-4 
    rounded-2xl border border-white/10 
    hover:border-blue-500/50 transition-all duration-300 shadow-lg"
                        >
                            {task.edited ? (
                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                    <input
                                        className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        type="text"
                                        value={task.text}
                                        placeholder="Edit task"
                                        onChange={(e) => {
                                            const savedTask = [...tasks];
                                            savedTask[index].text = e.target.value;
                                            setTasks(savedTask);
                                        }}
                                    />

                                    <button
                                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl transition shadow-md"
                                        type="button"
                                        onClick={() => {
                                            const newtext = tasks[index].text;
                                            const checkDuplicate = tasks.some(
                                                (t, i) => t.text === newtext && i !== index
                                            );
                                            if (checkDuplicate) {
                                                setShowDuplicate(true);
                                                return;
                                            }
                                            handleSave(index, newtext);
                                        }}
                                    >
                                        <FaSave />
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <span
                                        className={`text-sm sm:text-lg font-medium wrap-break-words ${task.completed
                                            ? "line-through text-gray-400"
                                            : "text-white"
                                            }`}
                                    >
                                        {task.text}
                                    </span>

                                    <div className="flex justify-center sm:justify-end items-center gap-4 text-base sm:text-lg">
                                        <button
                                            type="button"
                                            onClick={() => handleEdit(index)}
                                            className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110"
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => deleteTask(task.text)}
                                            className="text-red-500 hover:text-red-400 transition transform hover:scale-110"
                                        >
                                            <FaTrash />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleCheckButton(task.text)}
                                            className="text-green-500 hover:text-green-400 transition transform hover:scale-110"
                                        >
                                            <FaCheck />
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>

                    ))}
                </ul>
            </div>

            {showDuplicate && (
                <DuplicatePopUp onClose={() => setShowDuplicate(false)} />
            )}
        </div>
    );
}