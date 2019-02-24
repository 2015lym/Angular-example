import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get('');
  });

  // 用户名
  const username: any = element(by.id('e2e-username'));
  // 密码
  const password: any = element(by.id('e2e-password'));
  // 登录按钮
  const loginButton: any = element(by.id('e2e-login-button'));

  it('不输入用户名和密码点击登录', () => {
    loginButton.click();
    browser.getCurrentUrl().then(res => {
      expect(res).toBe('http://localhost:4200/');
    });
  });

  it('不输入密码点击登录', () => {
    browser.actions().mouseMove(username).click().sendKeys('zhangsan').perform();
    browser.sleep(2000);
    loginButton.click();
    browser.sleep(2000);
    browser.getCurrentUrl().then(res => {
      expect(res).toBe('http://localhost:4200/');
    });
  });

  it('输入用户名和密码点击登录', () => {
    browser.actions().mouseMove(username).click().sendKeys('zhangsan').perform();
    browser.sleep(2000);
    browser.actions().mouseMove(password).click().sendKeys('123456').perform();
    browser.sleep(2000);
    loginButton.click();
    browser.sleep(2000);
    browser.getCurrentUrl().then(res => {
      expect(res).toBe('http://localhost:4200/home');
    });
  });
});
