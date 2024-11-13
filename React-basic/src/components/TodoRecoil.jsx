import { RecoilRoot, useRecoilValue } from "recoil";
import { todoItemAtom } from "../atoms/TodoAtom";

export function TodoRecoil() {
    return <RecoilRoot>
        <Todo id={1}/>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={2}/>
    </RecoilRoot>
}

function Todo({ id }) {
    const currTodo = useRecoilValue(todoItemAtom(id))
    return <div>
        <div>{currTodo.todo}</div>
        <div>{currTodo.completed}</div>
    </div>
}