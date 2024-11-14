import { RecoilRoot, useRecoilValue } from "recoil";
import { todoItemAtom } from "../atoms/TodoAtom";
import { Suspense } from "react";

export function TodoRecoil() {
    return <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
        <Todo id={1} />
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
        </Suspense>
    </RecoilRoot>
}

function Todo({ id }) {
    const currTodo = useRecoilValue(todoItemAtom(id))

    return <div>
        <div>{currTodo.todo}</div>
        <div>{currTodo.completed}</div>
    </div>
}