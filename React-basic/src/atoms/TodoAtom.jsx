import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios'

export const todoItemAtom = atomFamily({
    key: 'todoAtomFamily',
    default: selectorFamily({
        key: 'todoSelectorFamily',
        get: id => async () => {
            const res = await axios.get(`https://dummyjson.com/todos/${id}`)
            return res.data
        }
    }) 
})