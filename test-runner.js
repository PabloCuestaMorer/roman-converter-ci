const puppeteer = require("puppeteer");
const { spawn } = require("child_process");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  page.on("console", (msg) => {
    if (msg.type() === "log" || msg.type() === "error" || msg.type() === "assert") {
      console.log(msg.text());
    }
  });
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
