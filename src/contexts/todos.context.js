import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    {id: 1, task: 'Run in the park', completed: false},
    {id: 2, task: 'Eat a fruit', completed: true},
];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todosStuff 
    = useTodoState(defaultTodos);

    return (
        <TodosContext.Provider value = {todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}