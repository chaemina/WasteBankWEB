import React from "react";
import styled from "styled-components";
import ScheduleItem from "../atoms/ScheduleItem";
import { verticalScale } from "../../../utils/Scale";
import { instance } from "../../../apis/instance";
import Spinner from "../../common/atoms/Spinner";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${verticalScale(15)}px;
`;

type GarbageData = {
  garbageId: number;
  matched: boolean;
  collectorName: string;
  collectionDayOfWeek: string;
  collectionStatus: "수거 시작 전" | "수거중" | "수거 완료";
};

type ScheduleListProps = {
  filterMatched: boolean;
};

// fetchScheduleData 함수의 반환 타입 정의
const fetchScheduleData = async ({ pageParam = 1 }: { pageParam?: number }) => {
  const response = await instance.get(
    `/api/garbages/registered?page=${pageParam}&limit=5`
  );
  if (response.data.success) {
    return {
      data: response.data.response,
      nextPage: response.data.response.length < 5 ? undefined : pageParam + 1,
    };
  } else {
    throw new Error(response.data.error);
  }
};

const ScheduleList: React.FC<ScheduleListProps> = ({ filterMatched }) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["scheduleData", filterMatched],
      queryFn: fetchScheduleData,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const { setTarget } = useIntersectionObserver({
    threshold: 0.1,
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ScheduleContainer>
      {data?.pages.map((page, pageIndex) =>
        page.data
          .filter((item: GarbageData) => (filterMatched ? item.matched : true))
          .map((item: GarbageData, index: number) => {
            if (
              pageIndex === data.pages.length - 1 &&
              index === page.data.length - 1
            ) {
              return (
                <div ref={setTarget} key={item.garbageId}>
                  <ScheduleItem
                    garbageId={item.garbageId}
                    day={item.collectionDayOfWeek}
                    collector={item.collectorName}
                    status={item.collectionStatus}
                  />
                </div>
              );
            } else {
              return (
                <ScheduleItem
                  key={item.garbageId}
                  garbageId={item.garbageId}
                  day={item.collectionDayOfWeek}
                  collector={item.collectorName}
                  status={item.collectionStatus}
                />
              );
            }
          })
      )}
      {isFetchingNextPage && <Spinner />}
    </ScheduleContainer>
  );
};

export default ScheduleList;
