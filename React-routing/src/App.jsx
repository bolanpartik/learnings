import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>|
      <Link to="/info">Info</Link>|
      <Link to="/contact">contact</Link>|
      <Link to="/support">Support</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </BrowserRouter>
  )
}
function Home() {
  return <div style={{ fontSize: 30 }}>This is home page</div>
}

function Info() {
  const navigate = useNavigate()

  function redirectUser() {
    navigate('/')
  }

  return <div style={{ fontSize: 30 }}>
    <div>This is info page</div>
    <button onClick={redirectUser}>Go to Home</button>
  </div>
}
function Contact() {
  const navigate = useNavigate()

  function redirectUser() {
    navigate('/')
  }

  return <div style={{ fontSize: 30 }}>
    <div>This is contact page</div>
    <button onClick={redirectUser}>Go to Home</button>
  </div>
}
function Support() {
  const navigate = useNavigate()

  function redirectUser() {
    navigate('/')
  }

  return <div style={{ fontSize: 30 }}>
    <div>This is support page</div>
    <button onClick={redirectUser}>Go to Home</button>
  </div>
}
export default App
