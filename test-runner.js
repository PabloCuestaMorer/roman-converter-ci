const puppeteer = require("puppeteer");
const { spawn } = require("child_process");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on("console", (msg) => console[msg._type](msg._text));

  await page.goto(`file://${__dirname}/test.html`);

  await page.waitForFunction(
    () => {
      const testDone = document.querySelector("#qunit-testresult .failed");
      return testDone && testDone.textContent !== "";
    },
    { timeout: 0 }
  );

  const failed = await page.$eval("#qunit-testresult .failed", (e) => e.textContent);
  const total = await page.$eval("#qunit-testresult .total", (e) => e.textContent);
  const passed = await page.$eval("#qunit-testresult .passed", (e) => e.textContent);

  console.log(`\n${passed}/${total} tests passed.`);
  await browser.close();

  process.exit(failed ? 1 : 0);
})();
