import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricelist from './components/Pricelist/Pricelist'
import DashBoard from './components/Dashboard/DashBoard'
import Phonebar from './components/Phonebar/Phonebar'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-center text-5xl'>Hi I am MAS</h1>
      <Pricelist></Pricelist>
      <DashBoard></DashBoard>
      <Phonebar></Phonebar>
    </div>
  )
}

export default App
