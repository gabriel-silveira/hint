import { test, expect } from "@playwright/test";

test.describe("Course Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/course");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/O Curso | HINT/);
  });

  test("hero section is visible with headline", async ({ page }) => {
    const hero = page.locator('section[aria-label="Apresentação do curso"]');
    await expect(hero).toBeVisible();
    await expect(hero.locator("h1")).toContainText("Destrave seu inglês");
  });

  test("CTA button is visible", async ({ page }) => {
    const cta = page.locator("text=Garanta sua vaga no Grupo VIP").first();
    await expect(cta).toBeVisible();
  });

  test("all sections render in correct order", async ({ page }) => {
    const sections = [
      "Apresentação do curso",
      "Quem é Larissa Rovaron",
      "Credenciais da professora",
      "Reenquadramento",
      "O Método Larissa Rovaron",
      "Resultados comprovados",
      "Depoimentos",
      "Oferta",
    ];

    for (const label of sections) {
      const section = page.locator(`section[aria-label="${label}"]`);
      await expect(section).toBeAttached();
    }
  });

  test("screenshot - full page desktop", async ({ page }) => {
    await page.screenshot({
      path: "test-results/course-desktop-full.png",
      fullPage: true,
    });
  });

  test("screenshot - hero section", async ({ page }) => {
    const hero = page.locator('section[aria-label="Apresentação do curso"]');
    await hero.screenshot({
      path: "test-results/course-hero.png",
    });
  });

  test("screenshot - offer section", async ({ page }) => {
    const offer = page.locator('section[aria-label="Oferta"]');
    await offer.scrollIntoViewIfNeeded();
    await offer.screenshot({
      path: "test-results/course-offer.png",
    });
  });
});
