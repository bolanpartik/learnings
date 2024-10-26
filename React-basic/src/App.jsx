import React from "react"

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Card2 />
      </ErrorBoundary>
    </div>
  )
}
function Card1() {
  return (
    <div>This is card one</div>
  )
}
function Card2() {
  throw new Error('Something went wrong')

  return (
    <div>This is card second</div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(err) {
    console.log(err)
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>
    }
    return <div>{this.props.children}</div>
  }
}
