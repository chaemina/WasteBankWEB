import React from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";
import ScheduleItem from "../atoms/ScheduleItem";
import {
  fetchScheduleData,
  GarbageData,
  ScheduleResponse,
} from "../../../apis/schedule";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { scale, verticalScale } from "../../../utils/Scale";
import Spinner from "../../common/atoms/Spinner";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${verticalScale(10)}px;
  padding: ${scale(20)}px;
`;

const Loader = styled.div`
  text-align: center;
  padding: ${verticalScale(20)}px;
  color: white;
`;

const ScheduleList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery<ScheduleResponse, Error>({
      queryKey: ["scheduleList"],
      queryFn: async ({ pageParam = 1 }) =>
        fetchScheduleData(pageParam as number),
      getNextPageParam: (lastPage) =>
        lastPage.response.isLast ? undefined : lastPage.response.nextPage,
      initialPageParam: 1,
    });

  const { setTarget } = useIntersectionObserver({
    threshold: 0.1,
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <Loader>Error: {(error as Error).message}</Loader>;

  return (
    <ListContainer>
      {data?.pages.flatMap((page) =>
        page.response.data.map((schedule: GarbageData) => (
          <ScheduleItem
            key={schedule.garbageId}
            garbageId={schedule.garbageId}
            day={schedule.collectionDayOfWeek}
            collector={schedule.collectorName}
            status={schedule.collectionStatus}
          />
        ))
      )}
      <div ref={setTarget} style={{ height: "10px" }}></div>
      {!hasNextPage && <Loader>No more schedules</Loader>}
    </ListContainer>
  );
};

export default ScheduleList;
