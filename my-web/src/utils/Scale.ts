// 뷰포트 크기와 스케일링 함수 정의
const { innerWidth: width, innerHeight: height } = window;
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 680;

// 뷰포트기반 스케일링
const scale = (size:number):number => (width / guidelineBaseWidth) * size;

// 높이기반 스케일링
const verticalScale = (size:number):number => (height / guidelineBaseHeight) * size;

// factor값 제어
const moderateScale = (size:number, factor = 0.5):number => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale, width, height };
