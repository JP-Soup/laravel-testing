// @ts-check
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Complete registration process", () => {
    const generatePassword = () => {
        const pswrd = `${faker.lorem.word({
            length: { min: 10, max: 14 },
            strategy: "closest",
        })} ${faker.number.int({ min: 4, max: 8 })}`;
        return pswrd;
    };

    const generatedPassword = generatePassword();

    test("User can Register as new user", async ({ page }) => {
        // Allow time for browser teardown
        test.setTimeout(60000);
        // Begin testing
        await page.goto("http://localhost:8000");
        await page.getByRole("link", { name: "Register" }).click();
        await page.waitForURL("http://localhost:8000/register");
        await page.waitForLoadState("domcontentloaded");
        await page
            .getByLabel("name")
            .fill(faker.person.fullName().toLocaleLowerCase());
        await page
            .getByLabel("email")
            .fill(faker.internet.email().toLocaleLowerCase());
        await page
            .getByText("Password", { exact: true })
            .fill(generatedPassword);
        await page
            .getByText("Confirm Password", { exact: true })
            .fill(generatedPassword);
        await page.getByRole("button", { name: "Register" }).click();
        await page.waitForURL("http://localhost:8000/dashboard");
        await page.waitForLoadState("domcontentloaded");
        await expect(page).toHaveURL("http://localhost:8000/dashboard");
        await page.getByText("Dashboard h2").isVisible();
    });
});
