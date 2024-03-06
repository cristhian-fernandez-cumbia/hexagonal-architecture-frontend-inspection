import './App.css'
import { Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './sections/Home/Home';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
