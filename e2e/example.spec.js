// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8000");
});

// test("has title", async ({ page }) => {
//     await page.goto("http://localhost:8000");

//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Welcome/);
// });

test.describe("Complete registration process", () => {
    test("Should allow user to click Register", async ({ page }) => {
        await page.getByRole("link", { name: "Register" }).click();

        await expect(page).toHaveURL("http://localhost:8000/register");
    });
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://localhost:8000/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
