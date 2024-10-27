import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>|
      <Link to="/info">Info</Link>|
      <Link to="/contact">contact</Link>|
      <Link to="/support">Support</Link>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/info' element={<Info />} > </Route >
        <Route path='/contact' element={<Contact />} > </Route >
        <Route path='/support' element={<Support />} > </Route >
      </Routes>
    </BrowserRouter>
  )
}
function Home() {
  return <div style={{fontSize:30}}>This is home page</div>
}
function Info() {
  return <div style={{fontSize:30}}>This is info page</div>
}
function Contact() {
  return <div style={{fontSize:30}}>This is contact page</div>
}
function Support() {
  return <div style={{fontSize:30}}>This is support page</div>
}
export default App
