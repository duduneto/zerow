import { API_URL } from "./api";

/**
 * Call To API - Get Host Info
 * @param {string} hostId
 */
export const fetchHostWithGuests = async (hostId) => {
    const response = await fetch(`${API_URL}/host/guests/${hostId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
    }
    return await response.json();
}
/**
 * 
 * @param {{phoneNumber: string, totalPeople: number | string, isPriority: boolean, name: string | null, hostId: string }} payload 
 * @returns 
 */
export const saveNewGuest = async (payload) => {
    const response = await fetch(`${API_URL}/host/guest/new`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
    }
}