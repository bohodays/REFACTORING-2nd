// 함수는 함수 안에서 정말 중요한 데이터만 받아오는 것이 좋다.
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
