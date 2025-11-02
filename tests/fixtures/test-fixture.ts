import { test as base } from "@playwright/test";
import { Pages } from "../../src/ui/pages/Pages";

export const test = base.extend<{
 pages: Pages;
}>({
 pages: async ({ page }, use) => {
  const pages = new Pages(page);
  await use(pages);
 },
});

export { expect } from "@playwright/test";
