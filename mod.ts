import { puppeteer } from './deps.ts';

const browser = await puppeteer.launch();
const page = await browser.newPage();

const url = 'https://sweet-snake-49.deno.dev';
await page.goto(url);
await page.setViewport({
    width: 1600,
    height: 1200
});
await page.hover('#left');
await page.screenshot({ path: Deno.cwd() + '/example.png' }); 

await browser.close();