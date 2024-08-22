import React from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";
import GarbageItem from "../atoms/GarbageItem";
import {
  fetchGarbageData,
  GarbageData,
  GarbageResponse,
} from "../../../apis/garbage";
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

const GarbageList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery<GarbageResponse, Error>({
      queryKey: ["garbageList"],
      queryFn: async ({ pageParam = 1 }) =>
        fetchGarbageData(pageParam as number),
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
        page.response.data.map((garbage: GarbageData) => {
          const formattedDate = new Date(
            garbage.registrationDate
          ).toLocaleDateString();
          return (
            <GarbageItem
              key={garbage.garbageId}
              organicWeight={garbage.organicWeight}
              non_organicWeight={garbage.non_organicWeight}
              saving={garbage.saving}
              date={formattedDate}
            />
          );
        })
      )}
      <div ref={setTarget} style={{ height: "10px" }}></div>
      {!hasNextPage && <Loader>No more schedules</Loader>}
    </ListContainer>
  );
};

export default GarbageList;
