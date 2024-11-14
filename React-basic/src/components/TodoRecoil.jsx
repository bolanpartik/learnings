import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todoItemAtom } from "../atoms/TodoAtom";

export function TodoRecoil() {
    return <RecoilRoot>
        <Todo id={1} />
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
    </RecoilRoot>
}

function Todo({ id }) {
    const currTodo = useRecoilValueLoadable(todoItemAtom(id))
    console.log(currTodo.state)

    if (currTodo.state === 'loading') {
        return <div>Loading...</div>
    }
    else if (currTodo.state === 'hasValue') {
        return <div>
            <div>{currTodo.contents.todo}</div>
            <div>{currTodo.contents.completed}</div>
        </div>
    }
    else if (currTodo.state === 'hasError') {
        return <div>Error while getting data from the database</div>
    }
}