import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Popular_on_Netflix from './MoviesData'
import Movies from './Movies'  
function App()
 { 
  return(
    <div>
      <Movies  title="US_TV_Shows" data={Popular_on_Netflix.US_TV_Shows}/>
      <Movies  title="Popular_on_Netflix" data={Popular_on_Netflix.Popular_on_Netfli}/>
      <Movies  title=" Indian_Movies" data={Popular_on_Netflix. Indian_Movies}/>
      <Movies  title="  Comedy_Movies" data={Popular_on_Netflix.  Comedy_Movies}/>
      <Movies  title=" Action_Movies" data={Popular_on_Netflix. Action_Movies}/>
    </div>
  )
}

export default App
