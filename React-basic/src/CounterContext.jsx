import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from 'recoil'

const count = atom({
  key: 'CountState',
  default: 0
})

export default function CounterContext() {
  return (
    <RecoilRoot>
      <Parent />
    </RecoilRoot>
  )
}

function Parent() {
  return <>
    <Incrase />
    <Decrease />
    <Value />
  </>
}

function Decrease() {
  const setCount = useSetRecoilState(count)
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>
}

function Incrase() {
  const setCount = useSetRecoilState(count)
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>
}

function Value() {
  const countValue = useRecoilValue(count)
  return <p>Count: {countValue}</p>
}
