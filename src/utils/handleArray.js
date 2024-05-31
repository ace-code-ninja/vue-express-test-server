export const joinBy = (arr1, arr2, key) => {
    let result = arr1.map(a => ({...arr2.find(p => a.id === p[key]), ...a}));
    return result;
}

export const getTotalValue = (data, key) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i][key];
    }
    return total;
}