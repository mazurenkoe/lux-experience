import { Page, expect } from "@playwright/test";

export class BasePage {
 readonly page: Page;
 readonly pageUrl: string = "/fashionhub/about.html";

 constructor(page: Page) {
  this.page = page;
 }

 static getBaseUrl() {
  return process.env.BASE_URL;
 }

 async openPageUrl(relativePagePath: string) {
  try {
   await this.page.goto(relativePagePath);
  } catch (error) {
   throw new Error(
    `Failed to navigate to URL: '${relativePagePath}': ${
     error instanceof Error ? error.stack : String(error)
    }`
   );
  }
  this.assertPageUrlIsOpened(relativePagePath);
 }

 async assertPageUrlIsOpened(relativePagePath: string) {
  const expectedUrl = `${BasePage.getBaseUrl()}${relativePagePath}`;
  await expect(
   this.page,
   `The following URL was expected to open: '${expectedUrl}'`
  ).toHaveURL(expectedUrl);
 }

 async getPageLinks(): Promise<string[]> {
  const allHrefs = await this.page.$$eval("a[href]", (anchors) =>
   anchors
    .map((a) => (a as HTMLAnchorElement).getAttribute("href") || "")
    .filter(Boolean)
  );

  const currentPageUrl = this.page.url();

  const onlyPageLinks = allHrefs
   .map((h) => h.trim())
   .filter((h) => !h.startsWith("#"))
   .filter((h) => !h.toLowerCase().startsWith("javascript:"))
   .filter((h) => !h.toLowerCase().startsWith("mailto:"))
   .filter((h) => !h.toLowerCase().startsWith("tel:"))
   .filter((h) => h !== currentPageUrl);

  const baseUrl = new URL(currentPageUrl);

  const absoluteLinks = onlyPageLinks.map((h) =>
   new URL(h, baseUrl).toString()
  );

  return absoluteLinks;
 }
}
