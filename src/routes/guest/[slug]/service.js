import { writable } from 'svelte/store';
import { API_URL } from '../../../services/api';

export const guestData = writable({
    online: false,
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
    
    evtSource.onmessage = (event) => {
        console.log('ON MESSAGE => ', event)
        const dataobj = JSON.parse(event.data);
        guestData.update(state => ({
            ...state,
            online: true,
            loading: false,
            data: {
                ...state.data,
                ...dataobj
            }
        }))
    }
    
    evtSource.onerror = () => {
        guestData.update(state => ({
            ...state,
            online: false
        }))
    }
}

/**
 * Call To API - Get Guest Info
 * @param {string} slug - Guest Id as Slug
 */
// export const getGuest = async (slug) => {
//     try {
//         // @ts-ignore
//         guestData.update((state) => ({ ...state, loading: true }))
//         const response = await fetchGuest(slug);
//         guestData.update(state => ({
//             ...state,
//             data: response,
//         }))

//     } catch (error) {
//         // @ts-ignore
//         guestData.update((state) => ({ ...state, error: error.message }))

//     } finally {
//         // @ts-ignore
//         guestData.update((state) => ({ ...state, loading: false }))
//     }
// }
