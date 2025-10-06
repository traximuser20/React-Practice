import {useState} from 'react'

const Todo = () => {
    const [todo, setToDo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const task = e.target.elements[0].value;
        console.log(task)
        setToDo([...todo, task])
        setInputValue("")
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div>
      <form className='flex mb-4 gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new task" className='border border-gray-400 p-2' name="task" value={inputValue} onChange={handleChange} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Add</button>
      </form>

        <ul className='list-disc pl-5'>
            {todo.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todo