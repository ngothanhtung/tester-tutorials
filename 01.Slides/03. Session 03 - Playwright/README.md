## A. Cài đặt môi trường

1. Nodejs (https://nodejs.org/en/download/)
2. Bash & Git SCM (https://git-scm.com/downloads)
3. Yarn (https://classic.yarnpkg.com/en/docs/install#windows-stable)
4. Visual Studio Code (https://code.visualstudio.com/download)
5. Playwright for VS Code (https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## B. Cài đặt 1 project với Playwright

1. Create a folder, ex: D:\Playwright-Test
2. Từ VS Code, open folder trên vừa tạo
3. Bấm Ctrl + Shift + P, chạy lệnh Install Playwright

## C. Một số command line

1. Run all the tests

```
npx playwright test
```

2. Run a single test file

```
npx playwright test tests/first.spec.js
```

3. Run a set of test files

```
npx playwright test tests/folder-1/ tests/folder-2/
```

4. Xem thêm tại (https://playwright.dev/docs/intro#using-init-command)

## D. Open Playwright Inspector (https://playwright.dev/docs/inspector#open-playwright-inspector)

1. Bash

```
PWDEBUG=1
Sau đó chạy các câu lệnh command line

```

2. PowerShell

```
$env:PWDEBUG=1
Sau đó chạy các câu lệnh command line
```

## E. Open Playwright codegen

```
npx playwright codegen <Website url>
```

Xem thêm (https://playwright.dev/docs/codegen)

## F. Open Playwright Debug Selector

```
npx playwright open <Website url>
```

## G. Reports

### List reporter

List reporter is default (except on CI where the dot reporter is default). It prints a line for each test being run.

```
npx playwright test --reporter=list
```

### Line reporter

Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests.

```
npx playwright test --reporter=line
```

### Dot reporter

Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output.

```
npx playwright test --reporter=dot
```

### HTML reporter

HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.

```
npx playwright test --reporter=html
```
