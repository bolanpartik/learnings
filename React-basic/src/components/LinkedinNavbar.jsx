import { useRecoilState, useRecoilValue } from "recoil"
import { notificationsAtom, totatNotifications } from "../atoms/NavbarAtoms"

export function LinkedinNavbar() {

    const [count, setCount] = useRecoilState(notificationsAtom)
    const totatNotificationCount = useRecoilValue(totatNotifications)


    return <div>
        <button>Home</button>

        <button>My Network({count.networkCount})</button>
        <button>Jobs({count.jobCount})</button>
        <button>Messages({count.messageCount})</button>
        <button>Notifications({count.notificationCount})</button>

        <button>Me({totatNotificationCount})</button>
    </div>
}