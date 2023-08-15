import { useMachine } from '@xstate/react';
import React from 'react'
import { createMachine } from 'xstate';

type TrafficLightEvent = { type: 'NEXT' };

type TrafficContext = undefined;

type TrafficLightState =
  | { context: undefined; value: 'green' }
  | { context: undefined; value: 'yellow' }
  | { context: undefined; value: 'red' };

export const trafficLightMachine = createMachine<TrafficContext, TrafficLightEvent, TrafficLightState>({
  id: 'trafficLight',
  initial: 'red',
  states: {
    green: {
      on: { NEXT: 'yellow' },
    },
    red: {
      on: { NEXT: 'green' },
    },
    yellow: {
      on: { NEXT: 'red' },
    },
  },
});


type Props = {}

export default function TrafficLight() {
  const [state, send] = useMachine(trafficLightMachine)

  console.log('state',  state)

  return (
    <div>
      <div>{String(state.value)}</div>
      <button onClick={() => send('NEXT')}>change</button>
    </div>
  )
}