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
import FestivalContents from './14/FestivalContents'
import ChargerInfo from './16/ChargerInfo'
import TailInfoCard from './components/TailInfoCard'
import JotaiCnt from './17/JotaiCnt'
import FestivalGallery2 from './14_2/FestivalGallery2'
import FestivalContents2 from './14_2/FestivalContents2'
import TodoList from './18/TodoList'

import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      <BrowserRouter>
        <Header />
        <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
          <Routes>
            <Route path="/" element={<MyClock />}></Route>
            <Route path="/lotto" element={<Lotto />}></Route>
            <Route path="/Food" element={<FoodMain />}></Route>
            <Route path="/BoxOffice" element={<BoxOffice />}></Route>
            <Route path="/Traffic" element={<Traffic />}></Route>
            <Route path="/TourGallery" element={<TourGallery />}></Route>
            <Route path="/FestivalGallery" element={<FestivalGallery />}></Route>
            <Route path="/FestivalGallery/Contents" element={<FestivalContents />}></Route>
            <Route path="/FestivalGallery2" element={<FestivalGallery2 />}></Route>
            <Route path="/FestivalGallery2/Contents" element={<FestivalContents2 />}></Route>
            <Route path="/ChargerInfo" element={<ChargerInfo />}></Route>
            <Route path="/ChargerInfo/Info" element={<TailInfoCard />}></Route>
            {/* <Route path="/JotaiCnt" element={<JotaiCnt />}></Route> */}
            <Route path='/TodoList' element={<TodoList />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
