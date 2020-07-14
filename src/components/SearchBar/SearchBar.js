import React, { useState } from 'react'

function SearchBar(props) {

  const [text, setText] = useState('')

  const onFormSubmit = event => {
    event.preventDefault()
    props.onSubmit(text)
  }


  
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Pesquisar imagem</label>
          <input type="text"
            value={text}
            onChange={e => setText(e.target.value )} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar