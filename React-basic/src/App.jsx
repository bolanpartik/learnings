
function App() {

  return <div>
    <Card>
      <strong>Weekend Plans</strong>
      <p>I'm thinking of going hiking this Saturday. The weather looks perfect!</p>
      <p>Any recommendations for trails? I want something with a great view!</p>
    </Card>

    <Card>
      <strong>Book Recommendations</strong>
      <p>Just finished reading "The Night Circus." It was mesmerizing!</p>
      <p>What are you currently reading? I'm looking for my next page-turner!</p>
    </Card>

  </div>
}

function Card({ children }) {
  return <div style={{
    border: '1px solid grey',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  }}>
    {children}
  </div>
}

export default App