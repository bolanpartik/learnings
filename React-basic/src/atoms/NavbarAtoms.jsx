import { atom, selector } from 'recoil'

export const notificationsAtom = atom({
    key: 'notifications',
    default: {
        networkCount: 11,
        jobCount: 3,
        messageCount: 7,
        notificationCount: 21
    }
})

export const totatNotifications = selector({
    key: 'totalNotifications',
    get: ({ get }) => {
        const notifications = get(notificationsAtom)
        return notifications.networkCount + notifications.jobCount + notifications.messageCount + notifications.notificationCount
    }
})