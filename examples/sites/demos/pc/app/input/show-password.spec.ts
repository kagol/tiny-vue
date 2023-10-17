import { test, expect } from '@playwright/test'

test('[Input]show-password', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/show-password')

  const svg = await page.locator('.demo-input .tiny-input__suffix > .tiny-input__suffix-inner svg path')
  const input = await page.locator('.demo-input .tiny-input.tiny-input-suffix input')

  // 密码隐藏
  await expect(svg).toBeVisible()
  await expect(input).toHaveAttribute('type', 'password')

  // 值
  await page.locator('input[type="password"]').fill('123123123')
  const value = await page.locator('input[type="password"]').inputValue()
  await expect(value).toBe('123123123')
  
  // 密码图标
  await expect(svg).toHaveAttribute('d', 'm3.486 3.207.712.712-.233.187c-.154.127-.307.261-.458.402l-.287.276c-.374.373-.712.762-1.011 1.151l-.047.061-.044.06-.184.251.275.374.232.291c.318.388.675.773 1.066 1.136l.244.22C5.059 9.47 6.489 10.14 8 10.14l.295-.009a5.472 5.472 0 0 0 1.722-.392l.76.762-.295.13c-.792.33-1.62.51-2.482.51l-.298-.007c-1.78-.086-3.414-.937-4.876-2.294l-.312-.3A12.91 12.91 0 0 1 1.416 7.29l-.051-.068-.05-.065-.174-.237-.135-.197-.099-.153-.04-.083a.501.501 0 0 1-.001-.357l.041-.084.099-.153.135-.197.174-.237.101-.133.252-.317c.346-.421.732-.839 1.158-1.234.216-.201.437-.39.66-.568ZM3.757.858l.096.01a.506.506 0 0 1 .258.137l1.112 1.11A6.491 6.491 0 0 1 8 1.474l.298.007c1.78.086 3.414.937 4.876 2.294l.312.3c.406.406.772.829 1.098 1.251l.051.068.05.065.173.237.136.197.098.153.042.083a.497.497 0 0 1 0 .357l-.042.084-.098.153-.136.197-.173.237-.101.133-.252.317c-.346.42-.732.838-1.158 1.234l-.288.26c-.123.106-.247.209-.372.308l.789.788.058.07a.5.5 0 0 1-.058.637l-.07.058a.499.499 0 0 1-.637-.058l-.907-.907v.002l-.727-.728V9.27l-.841-.841-.707-.706v-.002l-6.01-6.009-.058-.07a.5.5 0 0 1 .411-.784Zm1.535 4.157.775.775-.037.169c-.02.114-.03.23-.03.35l.005.15A2 2 0 0 0 8 8.308l.177-.008c.116-.01.23-.03.34-.06l.777.774-.2.087A2.99 2.99 0 0 1 8 9.308l-.176-.005a3 3 0 0 1-2.532-4.288ZM8 2.475l-.28.008a5.465 5.465 0 0 0-1.736.393l.722.724c.392-.187.83-.292 1.294-.292l.176.005A3 3 0 0 1 11 6.31l-.007.205a2.977 2.977 0 0 1-.285 1.087L11.8 8.697c.235-.182.465-.378.692-.589l.287-.276c.374-.373.712-.762 1.011-1.151l.047-.062.044-.059.183-.253-.274-.372-.232-.291a11.566 11.566 0 0 0-1.066-1.136l-.244-.22C10.941 3.146 9.511 2.475 8 2.475Zm0 1.833-.182.008c-.115.01-.227.03-.335.06l2.45 2.45c.043-.165.067-.338.067-.517l-.005-.15A2 2 0 0 0 8 4.309Z') // TODO

  // 密码开放显示
  await page.locator('.demo-input .tiny-input__suffix > .tiny-input__suffix-inner').click()
  await expect(input).toHaveAttribute('type', 'text')
})