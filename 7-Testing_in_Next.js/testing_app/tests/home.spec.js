import { test, expect } from '@playwright/test';

test('should display the main heading on the home page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Etsitään otsikko
  const heading = page.locator('h1');

  // Varmistetaan, että otsikko on näkyvissä ja sisältää oikeaa tekstiä
  await expect(heading).toBeVisible();
  await expect(heading).toContainText(/welcome/i);
});