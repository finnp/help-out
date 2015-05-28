#!/usr/bin/env node

var open = require('open')
var md = require('cli-md')
var i = require('inquirer')
var issues = require('issues-for-url')
var concat = require('concat-stream')
var deck = require('deck')
var chalk = require('chalk')

var issuePage = 'https://github.com/nodeschool/discussions/issues'

var todos = deck.shuffle([
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
])

var currentTodo = 0

function printTodo() {
  if(currentTodo === todos.length) return console.log('All done! :)')
  var help = todos[currentTodo]
  currentTodo++
  console.log(md([ '# ' + help.name, help.desc, help.link].join('\n')).trim())
  
  var question = {
    type: 'list',
    message: 'Choose an issue',
    name: 'issue'
  }
  issues(help.link).pipe(concat(function (issueList) {
    if(issueList.length === 0) return printTodo()
    question.choices = issueList.slice(0,5).map(function (issue) {
      return {
        name: issue.title + chalk.grey(' #' + issue.url.split('/').pop()),
        value: issue.url
      }
    })
    question.choices.push('NEXT')
    question.choices.push('EXIT')
    i.prompt([question], function (answers) {
      if(answers.issue === 'NEXT') printTodo()
      if(answers.issue === 'EXIT') process.exit()
      open(answers.issue)
    })
  }))

}

printTodo()





