import React, { useState, useEffect } from 'react'

export default function ImageCard(props) {
  const [spans, setspans] = useState(0)
  let imageRef = React.createRef()

  useEffect(() => imageRef.current.addEventListener('load', setSpans))

  const setSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10 + 1)

    setspans(spans)
  }

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={props.image.tags} src={props.image.webformatURL} />
    </div>
  )
}
