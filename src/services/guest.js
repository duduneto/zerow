import { API_URL } from "./api";

/**
 * Call To API - Get Guest Info
 * @param {string} guestId - Guest Id as Slug
 */
export const fetchGuest = async (guestId) => {
    const response = await fetch(`${API_URL}/guest?guestId=${guestId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
    }
    return await response.json();
}