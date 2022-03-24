const { readFileSync, writeFileSync} = require('fs')
const { encode } = require('punycode')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/first.txt','utf-8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag :'a'}
    )
