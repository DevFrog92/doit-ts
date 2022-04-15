export const range = (from:number, to:number): number[] => from < to ? [from, ...range(from+1, to)] : []

export const range_re = (from: number, to: number): number[] => from < to ? [from, ...range(from+1, to)] : []
