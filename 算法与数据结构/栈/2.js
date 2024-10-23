/**
 * @description 20. 有效的括号
*/
const isValid = (string) => {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }
    let stack = []
    for(let i = 0; i < string.length; i++) {
        if(map[string[i]] < 0) {
            stack.push(string[i])
        } else {
            let last = stack.pop()
            if(map[last] + map[string[i]] !== 0) return false
        }
    }
    if(stack.length > 0) return false
    return true
}

console.log(isValid('()()[]['))

// 测试用例
// ()()[][]
// ()()[]{}
// ()()[]{}()
// (){()}(])]
// ()()[][