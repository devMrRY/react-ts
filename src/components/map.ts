function myMap<T>(arr: T[], func: (item: T, index?: number) => any): any[]{
    let result: any[] = [];
    arr.forEach(i => {
        result.push(func(i));
    })
    return result;
}

let r = myMap([{a: 1}, {b: 2}], (item) => Object.keys(item));
export default myMap;


function getValue<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

let obj = {
    name: 'test',
    class: 11,
    school: 'private'
}

let a = getValue(obj, "name");

function getValFromArray<T, K extends keyof T, U>(arr: T[], key: K): T extends [infer First, ...any[]] ? First : never{
    return arr[0][key];
}

let arr = [{a: 12, d: { c: true}}, {a: "test", b: 23}];
let as = getValFromArray(arr, "d");



