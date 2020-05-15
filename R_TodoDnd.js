import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

// ***
//  * Your Component
//  */

export default function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.CARD, text },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}

// *-----React Dnd Javascript-----*

import React from 'react'
import ReactDOM from 'react-dom'
import Example from './example'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <div classname="App">
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </div>
  )
}

const rootElement = document.getElementById('itenerary')
ReactDOM.render(<App />, rootElement)