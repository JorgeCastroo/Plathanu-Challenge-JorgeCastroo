import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_HTT_BASE_URL as string,
});

export const useApi = () => ({
  getAllRockets: async () => {
    const rocket = await api.get("/v4/rockets");
    return rocket.data;
  },
  getOneRocket: async (id: string) => {
    const rocket = await api.get(`/v4/rockets/${id}`);
    return rocket.data;
  },
});
