import { instance } from "./instance";

export type GarbageData = {
  garbageId: number;
  matched: boolean;
  collectorName: string;
  collectionDayOfWeek: string;
  collectionStatus: "수거 시작 전" | "수거중" | "수거 완료";
};

export type ScheduleResponse = {
  response: {
    data: GarbageData[];
    isLast: boolean;
    nextPage: number;
  };
};

export const fetchScheduleData = async (page: number): Promise<ScheduleResponse> => {
  try {
    const res = await instance.get(`/api/garbages/registered?page=${page}`);
    console.log(res.data);
    return res.data as ScheduleResponse;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.response?.data?.error || "Error fetching data");
  }
};
