import './App.css'
import { Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Inspection from './sections/Inspection/Inspection';

function App() {
  

  return (
    
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Inspection />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
