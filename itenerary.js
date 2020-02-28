import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

const itenerary = document.getElementById('itenerary');
/**
 * Your Component
 */
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