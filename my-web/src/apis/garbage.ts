import { instance } from "./instance";

export type GarbageData = {
  garbageId: number;
  organik: number,
  non_organik: number,
  saving: number
};

export type GarbageResponse = {
  response: {
    data: GarbageData[];
    isLast: boolean;
    nextPage: number;
  };
};

export const fetchGarbageData = async (page: number): Promise<GarbageResponse> => {
  try {
    const res = await instance.get(`/api/garbages/registered?page=${page}`);
    console.log(res.data);
    return res.data as GarbageResponse;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || "Error fetching data");
  }
};
