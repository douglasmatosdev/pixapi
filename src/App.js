import React, { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import Images from './components/Images/Images'
import { searchPhotos } from './services/api'

export default function App() {

  const [images, setImages] = useState([])

  const onSearchSubmit = async text => {
    const response = await searchPhotos(text)
    setImages(response.data.hits)
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <Images images={images} />
    </div>
  )
}
