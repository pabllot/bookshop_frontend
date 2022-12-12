import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Books from './pages/Books'
import Update from './pages/Update'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />}/>
          <Route path='/add' element={<Add />}/>
          <Route path='/update' element={<Update />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
