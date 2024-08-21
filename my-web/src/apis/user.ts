import { instance } from "./instance";

export const refresh = async () => {
    try {
        const response = await instance.post("/api/refresh-token");
        return response.data;
    } catch (error) {
        console.error('Error during API call', error);
        localStorage.clear();
        window.location.reload();
        throw error;
    }
};
