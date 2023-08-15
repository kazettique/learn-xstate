import { useMachine } from '@xstate/react';
import React from 'react'
import { createMachine, assign } from 'xstate';

export const counterMachine = createMachine({
  context: {
    // Here, we will define the initial state of the machine
    count: 0,
  },
  on: {
    // Here we will define the events that will trigger the transitions.
    INCREMENT: {
      actions: assign({
        count: (context) => context.count + 1,
      }),
    },
    DECREMENT: {
      actions: assign({
        count: (context) => context.count - 1,
      }),
    },
  },
});

type Props = {}

export default function Counter({ }: Props) {
  const [state, send] = useMachine(counterMachine);

  return (
    <>
      <h1>{state.context.count}</h1>
      <button onClick={() => send('DECREMENT')}>decrement</button>
      <button onClick={() => send('INCREMENT')}>increment</button>
    </>
  )
}