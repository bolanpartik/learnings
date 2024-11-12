import { atom, selector } from 'recoil'
import axios from 'axios'

export const notificationsAtom = atom({
    key: 'notifications',
    default: selector({
        key: 'notificationsSelector',
        get: async () => {
            const response = await axios.get('https://random-data-api.com/api/v3/projects/fd622d95-9b65-43eb-8d20-fb54783dd1dc?api_key=zKUB5o_wlTxiKzWH_JSeZQ')
            return response.data
        }
    })
})

export const totatNotifications = selector({
    key: 'totalNotifications',
    get: ({ get }) => {
        const notifications = get(notificationsAtom)
        return notifications.networkCount + notifications.jobCount + notifications.messageCount + notifications.notificationCount
    }
})