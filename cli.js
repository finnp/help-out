#!/usr/bin/env node

var open = require('open')
var md = require('cli-md')
var minimist = require('minimist')
var issuePage = 'https://github.com/nodeschool/discussions/issues'

var opts = minimist(process.argv.slice(2), {default: {open: true}})

var todos = [
  {
    name: 'Issues with no labels',
    desc: 'Add labels to this issues. They are explained here: https://github.com/nodeschool/discussions#about-labels',
    link: issuePage + '?q=is%3Aopen+is%3Aissue+no%3Alabel'
  },
  {
    name: 'Issues with no comments',
    desc: 'Think of an answer for an unanswered issue.',
    link: issuePage + '?q=is%3Aopen+is%3Aissue+comments%3A0+'
  },
  {
    name: 'Issues that `need-some-love`',
    desc: 'Try to think how to resolve those because they need your love!',
    link: issuePage + '?q=is%3Aopen+is%3Aissue+label%3Aneeds-some-love'
  },
  {
    name: 'Issues that are old',
    desc: 'Look at some least recently updated issues and see if you can close them. Use the `probably-self-resolved` label where appropriate',
    link: issuePage + '?q=is%3Aopen+is%3Aissue+sort%3Acreated-asc+-label%3A%22discussion+thread%22+'
  }
]

var help = todos[ Math.floor(Math.random() * todos.length) ]
console.log(md([ '# ' + help.name, help.desc, help.link].join('\n')).trim())

if (opts['open']) open(help.link)
