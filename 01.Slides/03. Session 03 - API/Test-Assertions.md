> Tham khảo (test-assertions)

## Assertions

- expect(locator).toHaveValue

```javascript
const locator = page.locator('input[type=number]');
await expect(locator).toHaveValue(/[0-9]/);
```
