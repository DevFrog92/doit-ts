// 그냥 값을 반환하는 함수: 1차 함수
export type FirstOrderFunc<T, R> = (T) => R
// 1차 함수를 반환하는 함수: 2차 함수
export type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>
// 2차 함수를 반환하는 함수: 3차 함수
export type ThirdOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>