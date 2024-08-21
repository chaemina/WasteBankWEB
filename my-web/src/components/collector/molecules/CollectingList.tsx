import CollectingItem from "../atoms/CollectingItem";
import {
  CollectingData,
  CollectingResponse,
  fetchCollectingData,
} from "../../../apis/collecting";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import Spinner from "../../common/atoms/Spinner";

const CollectionList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery<CollectingResponse, Error>({
      queryKey: ["collectingList"],
      queryFn: async ({ pageParam = 1 }) =>
        fetchCollectingData(pageParam as number),
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
        page.response.data.map((garbage: GarbageData) => (
          <GarbageItem
            key={garbage.garbageId}
            organicWeight={garbage.organicWeight}
            non_organicWeight={garbage.non_organicWeight}
            saving={garbage.saving}
            date={garbage.registerationDate}
          />
        ))
      )}
      <div ref={setTarget} style={{ height: "10px" }}></div>
      {!hasNextPage && <Loader>No more schedules</Loader>}
    </ListContainer>
  );
};
