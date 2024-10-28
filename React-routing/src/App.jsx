import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
function Layout() {
  return <div>
    <Link to="/">Home</Link>|
    <Link to="/info">Info</Link>|
    <Link to="/contact">contact</Link>|
    <Link to="/support">Support</Link>
    <Outlet />
  </div>
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

function ErrorPage() {
  return <div>
    Sorry Page not found
  </div>
}
export default App
