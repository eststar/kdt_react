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


function App() {
   return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      <Header />
      <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
        <TourGallery />        
      </main>
      <Footer />      
    </div>
  )
}

export default App
