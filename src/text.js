import React from 'react'
import './text.css'

export default function text({title,subtitle}) {
  return (
    <div className='text'>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  )
}
