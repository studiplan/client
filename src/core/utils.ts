const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const list = <T = unknown>(length: number, fn: (i: number) => T): Array<T> => Array.from({ length }, (_, i) => fn(i));

const padNum = (num: number, len: number, char: string = '0'): string => (char.repeat(len) + num).slice(-len);

export {
	sleep,
	list,
	padNum
};