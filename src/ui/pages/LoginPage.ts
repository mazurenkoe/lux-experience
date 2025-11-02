import { ProjectConstants } from "../../ProjectConstants";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
 readonly pageUrl: string = "/fashionhub/login.html";

 readonly usernameFld = this.page.locator("#username");
 readonly passwordFld = this.page.locator("#password");
 readonly submitBtn = this.page.locator("[type = 'submit']");

 async open() {
  await this.openPageUrl(this.pageUrl);
 }

 async logIn(
  username: string = ProjectConstants.DEFAULT_USERNAME,
  password: string = ProjectConstants.DEFAULT_USER_PASSWORD
 ) {
  await this.usernameFld.fill(username);
  await this.passwordFld.fill(password);
  await this.submitBtn.click();
 }
}
