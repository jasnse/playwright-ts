import { test, expect } from '@playwright/test';

test('login dan logout' ,async ({page}) => {

const username = page.locator('//input[@name="username"]');
const password = page.locator('//input[@name="password"]');
const button = page.locator('//button[@type="submit"]');
const profile = page.locator('//img[@class="oxd-userdropdown-img"]');
const logout = page.locator('//a[text()="Logout"]');

// masuk orangeHRM
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//masuk username
await username.waitFor();
await username.fill('Admin');

//masuk password
await password.waitFor();
await password.fill('admin123');

//klik login
await button.waitFor();
await button.click();

//verif berhasil login
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

//klik profile
await profile.waitFor();
await profile.click();

//klik logout
await logout.waitFor();
await logout.click();

//verif berhasil logout
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



})