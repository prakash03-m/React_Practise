import React, { useEffect, useState } from 'react';
import {v4 as uuid4} from 'uuid';

export const ToDoList = (props) => {

    const [todoItem, setTodoItem] = useState();
    const [todoList, setTodoList] = useState([]);

    const todoItemHandler = (e) => {
        setTodoItem(e.target.value);
    }

    useEffect(() => {
        const identifier = setTimeout(() => {
            if(todoItem?.length > 5) {
                console.log(todoItem)
            }
        }, 500)

        return () => {
            clearTimeout(identifier);
        }
    }, [todoItem]);

    const addTodoItemsHandler = () => {
        setTodoList(prevState => [...prevState, {id: uuid4(), item: todoItem}]);
        setTodoItem('');
    }

    const deleteTodoItemsHandler = (event) => {
        const listItem = event.target.closest('li');
        const itemId = listItem.getAttribute('data-id');
        setTodoList(prevState => {
            return prevState.filter(item => item.id !== itemId)
        })
    }

    return(
        <div>
            <label htmlFor="todoInput">To-Do</label><br/>
            <input type="text" placeholder='Enter a ToDo item' id='todoInput' onChange={todoItemHandler} value={todoItem?.item}/>
            <button onClick={addTodoItemsHandler}>Add</button><br/><br/>
            {
                todoList && 
                <ol onClick={deleteTodoItemsHandler}>
                    {todoList.map(todo => (                    
                        <li key={todo.id} data-id={todo.id}>{todo.item}</li>
                    ))}
                </ol>
            }          
        </div>
    )
}