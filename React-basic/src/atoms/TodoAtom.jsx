import { atomFamily } from "recoil";

const TODOS = [{
    id: 1,
    title: 'Go to home',
    completed: false
}, {
    id: 2,
    title: 'Eat food',
    completed: false
}]

export const todoItemAtom = atomFamily({
    key: 'todoItem',
    default: id => {
        return TODOS.find(t => t.id === id)
    }
})