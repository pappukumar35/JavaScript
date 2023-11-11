/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let map = {};
    return function(...args) {
        const s = args.toString();
        if(s in map){
            return map[s];
        }else{
            let res = fn(...args);
            map[s] = res;
            return res;
        }
            }
}