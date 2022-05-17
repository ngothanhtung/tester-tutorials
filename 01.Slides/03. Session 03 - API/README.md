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
