// Use of Collapsible sectionn in App component

// import { useState } from "react"
// function App() {
//   return (
//     <div>
//       <Collapsible content={'Weekend Plans'}>
//         <p>Section 1: Weekend Plans</p>
//         <p>This weekend, I’m planning a trip to the mountains for some hiking. I’m excited to explore new trails and enjoy the fresh air. It’s a great way to recharge and connect with nature!</p>
//       </Collapsible>
//       <Collapsible content={'Book Recommendations'}>
//         <p>Section 2: Book Recommendations</p>
//         <p>I just finished reading a fantastic novel and would love to share some recommendations! If you're into thrillers, "The Silent Patient" is a must-read. What are some of your favorite books?</p>
//       </Collapsible>
//     </div>
//   )
// }

export function Collapsible({ children, content }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>
        {content} {isOpen ? ' - ' : ' + '}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  )
}