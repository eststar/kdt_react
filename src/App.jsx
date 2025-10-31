import './App.css'
import MyClock from './02/MyClock'
import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList'
import MyToggle from './05/MyToggle'
import Header from './components/Header'
import Footer from './components/Footer'
import Lotto from './06/Lotto'
import FoodMain from './07/FoodMain'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'
import RefCalc from './12/RefCalc'
import TourGallery from './13/TourGallery'
import FestivalGallery from './14/FestivalGallery'
import RouteMain from './15/RouteMain'

import RouteHome from './15/RouteHome'
import RoutePage1 from './15/RoutePage1'
import RoutePage2 from './15/RoutePage2'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      <Header />
      <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
        <RouteMain />
        <Routes>
          <Route path="/" element={<RouteHome />} />
          <Route path="/p1/:itme1/:item2" element={<RoutePage1 />} />
          <Route path="/p2" element={<RoutePage2 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
