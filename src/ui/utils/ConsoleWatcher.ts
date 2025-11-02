import { Page } from "@playwright/test";

export class ConsoleWatcher {
 private static logs: { type: string; text: string; location?: any }[] = [];

 static start(page: Page) {
  this.logs = [];
  page.on("console", (msg) => {
   const loc = msg.location();
   this.logs.push({ type: msg.type(), text: msg.text(), location: loc });
  });
  page.on("pageerror", (error) => {
   this.logs.push({ type: "pageerror", text: error.message, location: null });
  });
 }

 static getAllLogs() {
  return this.logs;
 }

 static getErrorLogs() {
  return this.getAllLogs()
   .filter((l) => ["error", "pageerror"].includes(l.type))
   .map((e) => `${e.type}: ${e.text} at ${JSON.stringify(e.location)}`);
 }
}
