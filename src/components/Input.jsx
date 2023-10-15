
const Input = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">To Do List</h2>
        <ul className="list-disc pl-4 text-gray-700">
        
        </ul>
        <div className="mt-4">
            <label htmlFor="4" className="block text-sm font-medium text-gray-600 transition duration-200 ease-in-out group-focus-within:text-blue-400">
                Focus shadow (color)
            </label>
            <input
                placeholder='Add a task'
                id="4"
                type="text"
                className=" h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none shadow-md transition duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:ring focus:ring-blue-400"
            />
        </div>
    </div>
  )
}

export default Input