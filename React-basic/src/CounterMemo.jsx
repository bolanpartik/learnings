import { memo, useState } from "react"

export default function CounterMemo() {

    const [count, setCount] = useState(0)

    return <>
        <MainComponent count={count} setCount={setCount} />
        <ConstantComponent />
    </>
}

const MainComponent = ({ count, setCount }) => {

    return <>
        <div>Count : {count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </>
}

const ConstantComponent = memo(() => {

    return <div>
        Hello, I am constant component
    </div>
})
