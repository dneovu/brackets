module.exports = function check(str, bracketsConfig) {
	let stack = []
	let brackets = {}

	bracketsConfig.forEach(e => {
		brackets[e[1]] = e[0]
	});

	for (let i = 0; i < str.length; i++) {
		const current = str[i]
		if (Object.values(brackets).includes(current)) { // opened
			
			if (brackets[current]) { // for equal brackets
				if (stack[stack.length - 1] === current) {
					stack.pop() 
				} else {
					stack.push(current)
				}
			} else {
				stack.push(current)
			}
		}

		else { // closed
			if (brackets[current] != stack.pop()) return false
	 	}
	}
	
	return stack.length === 0
}

console.log(module.exports('|()|(||)||', [['(', ')'], ['|', '|']]))
