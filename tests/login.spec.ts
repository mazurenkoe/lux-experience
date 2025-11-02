import { test } from "./fixtures/test-fixture";

test("Log in", async ({ pages }) => {
 await pages.loginPage.open();
 await pages.loginPage.logIn();
 await pages.accountPage.assertIsOpened();
});
