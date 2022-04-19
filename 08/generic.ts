// generic
// 어떠한 타입에 대해서도 대응이 가능하다.

function generic1<T>(a:T): void {}
function generic2<T, Q>(a:T, b:Q): void {}

const generic3 = <T>(a:T):void => {}
const generic4 = <T, Q>(a:T, b:Q):void => {}


type Type1Func<T> = (T) => void
type Type2Func<T, Q> = (T, Q) => void
type Type3Func<T, Q, R> = (T, Q) => R

// mapping
type MapFunc<T, R> = (T) => R

// identity function
type IdentityFunc<T> = MapFunc<T, T>

const numberIdentity: IdentityFunc<number> = (x: number): number => x
const stringIdentity: IdentityFunc<string> = (x: string): string => x
const booleanIdentity: IdentityFunc<boolean> = (x: boolean): boolean => x
const arrayIdentity: IdentityFunc<any[]> = (x: any[]): any[] => x

