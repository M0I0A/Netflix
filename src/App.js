import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {action,comedy,documentaries,horror,originals, romance, topRated, trending } from './urls'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horrer' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
      <RowPost url={topRated} title='Top Rated' isSmall />
      <RowPost url={trending} title='Trending' isSmall />
    </div>
  )
}

export default App
