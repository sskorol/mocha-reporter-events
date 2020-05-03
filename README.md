## Mocha custom reporter's events issue

Run the following commands:
```shell script
git clone https://github.com/sskorol/mocha-reporter-events.git
npm install
npm test
```

Observe the output:
```text
test start: suite test
hook start: "before each" hook
before each body
hook end: "before each" hook
test body
test pass: suite test
hook start: "after each" hook
after each body
hook end: "after each" hook
```

"hook start" event is executed after "test" event, and it seems weird.
Events' execution order matters for custom reporters, as it might be annoying switching between hook's and test's contexts.
Especially when you need to perform some I/O operations with metadata.
E.g. allure-mocha dynamically changes context based on Mocha events.
So if some event is executed in the wrong order, we may either loose or attach user's info to the wrong html-report's section.
