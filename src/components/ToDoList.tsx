import { useMachine } from '@xstate/react';
import React, { useState } from 'react'
import { assign, createMachine } from 'xstate'

type Event = {type: 'ADD_TODO', todo: string }

export const todoMachine = createMachine({
  predictableActionArguments: true,
  context: {
    todos: [] as string[]
  },
  on: {
    ADD_TODO: {
      actions: assign({
        todos: (context, event) => [...context.todos, event.todo],
      }),
    }
  },
  schema: {
    events: {} as Event
  }
})

type Props = {}

export default function ToDoList({ }: Props) {
  const [newTodo, setNewTodo] = useState<string>('');
  const [state, send] = useMachine(todoMachine);

  const handleAddTodo = () => {
    if (newTodo) {
      send('ADD_TODO', {
        todo: newTodo,
      });

      setNewTodo('')
    }
  }

  return (
    <>
      <h1>Todo list</h1>
      {state.context.todos.map((todo, index) => (
        <h2 key={index}>⭐️ {todo}</h2>
      ))}
      <input
        type="text"
        placeholder="Add new Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </>
  )
}