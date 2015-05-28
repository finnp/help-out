# help-out
[![NPM](https://nodei.co/npm/help-out.png)](https://nodei.co/npm/help-out/)

This is a CLI for helping out people at [nodeschool/discussion](https://github.com/nodeschool/discussions).

Just install with `npm i help-out -g` and if you have a minute type:
```sh
$ help-out
```

It will randomly print something you can do to help with an explanation and list
issues that need help. You can choose them and it will open the browser for you.
```md
# Issues that are old
Look at some least recently updated issues and see if you can close them. Use the probably-self-resolved label where appropriate
https://github.com/nodeschool/discussions/issues?q=is%3Aopen+is%3Aissue+sort%3Acreated-asc+-label%3A%22discussion+thread%22+
? Choose an issue: (Use arrow keys)
❯ Compilation errors. #837
  NodeSchool shirts design #843
  streams understanding stream adventure #915
  Understanding Stream/Pipe and Readable and writable stream events. #924
  Feedback request for learnyounode MAKE IT MODULAR '.'-prefix problem #942
  NEXT
  EXIT
```

This is a very first version, if you have any suggestions please fork and PR.