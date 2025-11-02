import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountPage extends BasePage {
 readonly pageUrl: string = "/fashionhub/account.html";

 readonly logoutBtn = this.page.locator("logout-button");

 async open() {
  await this.openPageUrl(this.pageUrl);
  await expect(this.logoutBtn).toBeVisible();
 }

 async assertIsOpened() {
  await this.assertPageUrlIsOpened(this.pageUrl);
  await expect(this.logoutBtn).toBeVisible();
 }
}
