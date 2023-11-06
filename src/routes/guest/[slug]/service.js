import { writable } from 'svelte/store';
import { API_URL } from '../../../services/api';
import { fetchGuest } from '../../../services/guest';

export const guestData = writable({
    loading: true,
    data: {},
    error: ""
});

export const queueData = writable({});
/**
 * Call To API - Get Guest Info
 * @param {string} guestId - Guest Id as Slug
 */
export const connectEventSource = (guestId) => {
    const evtSource = new EventSource(`${API_URL}/guest/events/${guestId}`);
    evtSource.onmessage = function (event) {
        var dataobj = JSON.parse(event.data);
        guestData.update(state => ({
            ...state,
            data: {
                ...state.data,
                ...dataobj
            }
        }))
    }
}

/**
 * Call To API - Get Guest Info
 * @param {string} slug - Guest Id as Slug
 */
export const getGuest = async (slug) => {
    try {
        // @ts-ignore
        guestData.update((state) => ({ ...state, loading: true }))
        const response = await fetchGuest(slug);
        guestData.update(state => ({
            ...state,
            data: response,
        }))

    } catch (error) {
        // @ts-ignore
        guestData.update((state) => ({ ...state, error: error.message }))

    } finally {
        // @ts-ignore
        guestData.update((state) => ({ ...state, loading: false }))
    }
}
