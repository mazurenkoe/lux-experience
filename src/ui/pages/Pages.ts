import { Page } from "@playwright/test";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AccountPage } from "./AccountPage";

export class Pages {
 readonly page: Page;
 readonly aboutPage: AboutPage;
 readonly homePage: HomePage;
 readonly loginPage: LoginPage;
 readonly accountPage: AccountPage;

 constructor(page: Page) {
  this.page = page;
  this.aboutPage = new AboutPage(this.page);
  this.homePage = new HomePage(this.page);
  this.loginPage = new LoginPage(this.page);
  this.accountPage = new AccountPage(this.page);
 }
}
