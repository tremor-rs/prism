// NOTE: Tremor supports recursive nested interpolation in strings
// and heredocs but we use a partial interpolation method here. The
// string language rule pattern supports both single and triple double-quote
// delimited strings.
//

Prism.languages.tremor = {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: true
	},
	'string': {
		pattern: /"""(?:[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)|#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))")*\})*"""|"(?:[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)|#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))")*\})*"/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))")*\}/,
				inside: {
					'punctuation': /^#\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						inside: Prism.languages.tremor
					}
				}
			},
			'string': /[\s\S]+/
		}
	},
	'function': /\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,
	'keyword': /\b(?:event|state|select|create|define|deploy|operator|script|connector|pipeline|flow|config|links|connect|to|from|into|with|group|by|args|window|stream|tumbling|sliding|where|having|set|each|emit|drop|const|let|for|match|of|case|when|default|end|patch|insert|update|erase|move|copy|merge|fn|intrinsic|recur|use|as|mod)\b/,
	'boolean': /\b(?:true|false|null)\b/i,
	'number': /\b(?:0b[0-1_]*|0x[0-9a-fA-F_]*|\d[0-9_]*(?:\.\d[0-9_]*)?(?:[Ee][+-]?[0-9_]+)?)\b/,
	'operator': /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:not|and|or|xor|present|absent)\b/,
	'punctuation': /[;\[\]()\{\},.%#]/,
	'variable': {
		pattern: /(?:[a-z](?:[a-z_\d]+\s*)?::|`[^`]+`::)*(?:[a-z][a-z_\d]*|`[^`]+`)/,
		greedy: true,
		inside: {
			'punctuation': /::/
		}
	},
};

Prism.languages.troy = Prism.languages['tremor'];
Prism.languages.trickle = Prism.languages['tremor'];
