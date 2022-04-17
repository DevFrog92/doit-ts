export class RangeIterable {
  constructor(public from: number, public to: number){}
  [Symbol.iterator]() {
    const that = this;
    let currentValue = this.from;
    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined;
        const done = value === undefined;

        return {value, done}
      }
    }
  }
}