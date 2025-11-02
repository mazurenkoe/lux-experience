import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
 readonly pageUrl: string = "/fashionhub/";

 readonly logoutBtn = this.page.locator("logout-button");
 readonly welcomeBlock = this.page.locator(".hero-content");

 async open() {
  await this.openPageUrl(this.pageUrl);
  await expect(this.welcomeBlock).toBeVisible();
 }
}
