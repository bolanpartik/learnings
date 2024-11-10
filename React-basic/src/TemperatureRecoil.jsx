import { atom, RecoilRoot, selector, useRecoilState } from "recoil";

const celsiusTemp = atom({
    key: 'celsiusTemp',
    default: 0
})

const fahrenTemp = selector({
    key: 'fahrenTemp',
    get: ({ get }) => {
        const temp = get(celsiusTemp)
        return ((temp * 9 / 5) + 32)
    },
    set: ({ set }, newValue) => {
        set(celsiusTemp, (((newValue - 32) * 5) / 9))
    }
})

export function TemeratureRecoil() {
    return <RecoilRoot>
        <MainComponent />
    </RecoilRoot>

}
function MainComponent() {
    const [celTemp, setCelTemp] = useRecoilState(celsiusTemp)
    const [fahTemp, setFahTemp] = useRecoilState(fahrenTemp)
    return (
        <>
            <div>Celsius Temperature : {celTemp}</div>
            <div>Fahrenheit Temperature : {fahTemp}</div>
            <button onClick={() => {
                setCelTemp(x => x + 10)
            }}>Inc 10<sup>o</sup>C</button>
            <button onClick={() => {
                setFahTemp(x => x + 10)
            }}>Inc 10 Fahrenheit</button>
        </>
    )
}

