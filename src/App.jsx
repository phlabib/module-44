

import './App.css'
import BarChart from './components/BarChart/BarChart'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
       <h1 className='text-7xl'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <BarChart></BarChart>
    </>
  )
}

export default App
