const fs = require('fs');

const { Builder, By, Key } = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');

async function main() {
  let options = new safari.Options();
  let driver = await new Builder()
    .forBrowser('safari')
    .setSafariOptions(options)
    .build();

  await driver.get('https://d-toybox.com/studio/lib/input_event_viewer.html');

  await driver.findElement(By.id('editor')).click();
  await driver.findElement(By.id('editor')).sendKeys(Key.chord('\u0015'));
  await driver.findElement(By.id('editor')).sendKeys('konnnitiwa');
  await driver.findElement(By.id('editor')).sendKeys('こんにちは');

  let encodedString = await driver.takeScreenshot();
  await fs.writeFileSync('./image.png', encodedString, 'base64');

  await driver.quit();
}
main();
