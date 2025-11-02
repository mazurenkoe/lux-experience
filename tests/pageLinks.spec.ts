import { expect, test } from "./fixtures/test-fixture";

test(`Check page links from 'Home' page`, async ({ page, pages }) => {
 pages.homePage.page.url();
 await pages.homePage.open();

 const pageLinks = await pages.homePage.getPageLinks();

 const pageStatuses: { url: string; code: number }[] = [];
 for (const link of pageLinks) {
  const response = await page.goto(link);
  const statusCode = response?.status();
  pageStatuses.push({ url: link, code: statusCode ?? 0 });
 }

 const invalidStatuses = pageStatuses.filter(
  (p) => p.code < 200 || p.code >= 400
 );

 expect(
  invalidStatuses,
  `Some pages have invalid status codes:\n${invalidStatuses
   .map((p) => `${p.code}: ${p.url}`)
   .join("\n")}`
 ).toHaveLength(0);
});
