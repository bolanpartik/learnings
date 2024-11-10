import { RecoilRoot, atom, useSetRecoilState, useRecoilValue, selector } from 'recoil'

const countAtom = atom({
  key: 'countState',
  default: 0
})

const evenSelector = selector({
  key: 'isEvenSelector',
  get: function ({ get }) {
    const count = get(countAtom)
    return count % 2 == 0
  }
})

export default function SelectorRecoil() {
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
    <IsEven />
  </>
}

function Decrease() {
  const setCount = useSetRecoilState(countAtom)
  return <button onClick={() => setCount(count => count - 2)}>Decrease</button>
}

function Incrase() {
  const setCount = useSetRecoilState(countAtom)
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>
}

function Value() {
  const countValue = useRecoilValue(countAtom)
  return <p>Count: {countValue}</p>
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? ' even ' : ' odd '}
  </div>
}
