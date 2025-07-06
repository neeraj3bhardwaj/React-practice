import { useState } from 'react'
import { TodoContext, TodoProvider, useTodo } from './Contexts/index'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  // here we are writing the functionality of addTodo function
  // first we are getting a parameter todo as declared in todocontext
  
  const addTodo = (todo) => {
    // we chaeck if todo is empty
    if(!todo) return
    // if not empty then acces all previous todos and spread them and also spread new to created with id
    setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    // chaeck all prev todos, if todo with is found then change the prevtodo to todo else let it be unchanged
    setTodos((prev) => (prev.map(
      (prevtodo) => (prevtodo.id === id ? todo : prevtodo)
    )))
  }

  const deleteTodo = (id) => {
    // filter out all the previous todos whose id is not equal to the id given
    // this way a new array is created with all other todos except the one with id
    setTodos((prev) => (prev.filter(
      (todo) => (todo.id !== id)
    )))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div 
                          className='w-full'
                          key={todo.id}>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
