"use client"
import { useState, useEffect } from 'react';
import remove from '@/public/remove.svg'
import Image from 'next/image';

function Mylist() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <main className="py-20 px-24 flex flex-col gap-10  max-sm:px-6  max-sm:text-center">
      
        <h1 className='text-4xl'>My list of books</h1>
        <ul className="">
        {todos.map((todo, index) => (
          <li key={index } className='text-[#756AB6] text-3xl mt-5 flex justify-between'>
          {`${index + 1}. ${todo}`}
            <button onClick={() => handleRemoveTodo(index)}>
            <Image src={remove} alt='remove' width={32} height={32}/>
            </button>
          </li>
        ))}
        </ul>
        <div className="input flex flex-col justify-center items-center ">
        <input
            className='h-[180px] w-[650px]  max-sm:w-full text-center rounded-2xl border-[1px] border-[#756AB6] border-solid text-2xl  max-sm:text-lg p-7 text-wrap focus:outline-none '
            type="text"
            placeholder="enter the name of the book you want to buy...."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className='py-2 px-6 bg-[#AC87C5] text-white rounded-md mt-10 ' onClick={handleAddTodo}>Add to my list</button>
        </div>
        
    </main>
  );
}

export default Mylist;