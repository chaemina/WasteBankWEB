import { useState, useEffect } from "react";

// 뷰포트 크기 가져오기
const getViewportDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 680;

// 뷰포트기반
const scale = (size: number, viewportWidth: number): number =>
  (viewportWidth / guidelineBaseWidth) * size;

// 높이기반
const verticalScale = (size: number, viewportHeight: number): number =>
  (viewportHeight / guidelineBaseHeight) * size;

// factor값 제어
const moderateScale = (
  size: number,
  factor: number = 0.5,
  viewportWidth: number
): number => size + (scale(size, viewportWidth) - size) * factor;

// 커스텀 훅
const useViewport = () => {
  const [viewport, setViewport] = useState(getViewportDimensions());

  useEffect(() => {
    const handleResize = () => setViewport(getViewportDimensions());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
};

export { scale, verticalScale, moderateScale, useViewport };
