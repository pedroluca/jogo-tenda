import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/home'
import {Question} from './pages/question'

export function App() {
  return (
    <div className='size-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}