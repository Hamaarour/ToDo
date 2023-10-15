import "./index.css";
import { useRef, useState } from "react";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const inputRef = useRef(null);

  const handleAddTask = () => {
    const task = inputRef.current.value;
    const newItem = { completed: false, task };
    setToDoList([...toDoList, newItem]);
    inputRef.current.value = "";
  };

  const handleToggleCompleted = (index) => {
    const newList = [...toDoList];
    newList[index].completed = !newList[index].completed;
    setToDoList(newList);
  };
  const removeItem = (index) => {
    const newList = [...toDoList];
    newList.splice(index, 1);
    setToDoList(newList);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 whitespace-normal overflow-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">To Do List</h2>
        <ul className="list-disc pl-4 text-gray-700 list-none">
          {toDoList.map((item, index) => (
            <li key={index} className="mb-2 cursor-pointer relative">
              <span
                onClick={() => handleToggleCompleted(index)}
                className={`${
                  item.completed ? "text-green-500" : "text-gray-700"
                } flex items-center`}
              >
                <span className="mr-2">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                {item.completed ? <del>{item.task}</del> : item.task}
              </span>
              <span
                onClick={() => removeItem(index)}
                className="text-red-500 ml-2 cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            ref={inputRef}
            placeholder="Add a task"
            type="text"
            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none shadow-md transition duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 mt-6 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default App;
