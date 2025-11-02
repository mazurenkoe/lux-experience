import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AboutPage extends BasePage {
 readonly pageUrl: string = "/fashionhub/about.html";

 readonly bannerBlock = this.page.locator(".about-banner");

 async open() {
  await this.openPageUrl(this.pageUrl);
  await expect(this.bannerBlock).toBeVisible();
 }
}
