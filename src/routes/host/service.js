import { writable } from "svelte/store";
import { fetchHostWithGuests, saveNewGuest } from "../../services/host";

export const hostData = writable({
    online: false,
    loading: true,
    data: [],
    error: ""
});

/**
 * Call To API - Get Guest Info By Host
 * @param {string} hostId - Host Id
 */
export const getGuests = async (hostId) => {
    try {
        // @ts-ignore
        hostData.update((state) => ({ ...state, loading: true }))
        const response = await fetchHostWithGuests(hostId);
        hostData.update(state => ({
            ...state,
            data: response.guests,
        }))

    } catch (error) {
        console.error(error)
        // @ts-ignore
        hostData.update((state) => ({ ...state, error: error.message }))

    } finally {
        // @ts-ignore
        hostData.update((state) => ({ ...state, loading: false }))
    }
}
/**
 * Call To API - Get Guest Info By Host
 * @param {{phoneNumber: string, totalPeople: number | string, isPriority: boolean, name: string | null, hostId: string }} payload 
 */
export const addGuest = async (payload) => {
    try {
        // @ts-ignore
        hostData.update((state) => ({ ...state, loading: true }))
        await saveNewGuest(payload);
        const response = await fetchHostWithGuests(payload.hostId);
        hostData.update(state => ({
            ...state,
            data: response.guests,
        }))

    } catch (error) {
        console.log(error)
        // @ts-ignore
        hostData.update((state) => ({ ...state, error: error.message }))

    } finally {
        // @ts-ignore
        hostData.update((state) => ({ ...state, loading: false }))
    }
}