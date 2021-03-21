export default async function converter(array) {
	return new Promise((res, rej) => {
		let result = '';
		if (array.length) {
			result = array.reduce((acc, curr, i, arr) => {
				// Собираем массив массивов с последовательно идущими значениями
				(i !== 0 && curr - arr[i-1] === 1) ? acc[acc.length-1].push(curr) : acc.push([curr]);
				return acc;
			}, []).map(arr => {
				// Определяем через что соединить значения
				return arr.length > 2 ? `${arr[0]}-${arr.slice(-1)}` : `${arr.join(',')}`;
			}).join(',');
		}
		res(result);
	});
};
