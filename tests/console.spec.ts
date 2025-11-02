import { ConsoleWatcher } from "../src/ui/utils/ConsoleWatcher";
import { expect, test } from "./fixtures/test-fixture";

test(`Console errors: 'Home' page`, async ({ page, pages }) => {
 ConsoleWatcher.start(page);
 await pages.homePage.open();
 const errorLogs = ConsoleWatcher.getErrorLogs();

 expect(
  errorLogs,
  `Console errors found:\n${errorLogs.join("\n")}`
 ).toHaveLength(0);
});
