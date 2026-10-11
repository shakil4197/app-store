import { Outlet, useNavigation } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollTop/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {

  const navigation = useNavigation();

  return (
    <div className="min-h-screen flex flex-col">

      {
        navigation.state === "loading" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-purple-700">
                Loading
              </h3>

              <span className="loading loading-spinner loading-xl text-purple-700"></span>
            </div>
          </div>
        )
      }

      <ScrollToTop />
      <Toaster position='top-right'/>
      
      <NavBar />
      
      <div className="flex-1">
        <Outlet />
      </div>
      
      <Footer />
      
    </div>
  )
}

export default App