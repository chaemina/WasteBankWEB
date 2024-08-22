import CollectingItem from "../atoms/CollectingItem";
import { instance } from "../../../apis/instance";
import { useEffect, useState } from "react";

const CollectingList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [garbageIds, setGarbageIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchGarbageId = async () => {
      try {
        setLoading(true);
        const response = await instance.get("/api/collector/garbageId");
        const garbageIds = response.data.response.map(
          (item: { garbageId: number }) => item.garbageId
        );
        setGarbageIds(garbageIds);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGarbageId();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {garbageIds.map((garbageId) => (
        <CollectingItem key={garbageId} garbageId={garbageId} />
      ))}
    </div>
  );
};

export default CollectingList;
