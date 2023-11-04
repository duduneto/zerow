import { writable } from 'svelte/store';

export const guestData = writable({
    loading: true,
    data: {},
    error: ""
});

const mockCall = () => new Promise((resolve) => {
    setTimeout(() => {
        guestData.update((state) => ({
            ...state, data: {
                id: "19282112984712",
                name: "Francisco",
                phoneNumber: "(85) 9****8567"
            },
        }))
        resolve(null)
    }, 1500)
})

export const fetchGuest = async (/** @type {string} */ slug) => {
    try {
        // @ts-ignore
        guestData.update((state) => ({ ...state, loading: true }))
        await mockCall()

    } catch (error) {
        // @ts-ignore
        guestData.update((state) => ({ ...state, error: error.message }))

    } finally {
        // @ts-ignore
        guestData.update((state) => ({ ...state, loading: false }))
    }
}
