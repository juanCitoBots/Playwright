import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('Prueba_Juan', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.locator('input[id=\'tnb-google-search-input\']').fill('Python');
  await page.locator('input[id=\'tnb-google-search-input\']').press('Enter');

});



test('Prueba de Recording', async ({ page }) => {
  await page.goto('https://segurossura.com.pa/');
  await page.getByRole('link', { name: 'Seguro de Viajes' }).click();
  await page.getByRole('link', { name: 'COMPRAR EN LINEA' }).click();
  await page.getByRole('link', { name: 'COMPRAR EN LINEA' }).click();
  await page.getByRole('link', { name: 'COMPRAR EN LÍNEA' }).click();
  await page.getByLabel('label.Destino').selectOption('80');
  await page.getByRole('listitem').filter({ hasText: 'label.FechaInicio' }).locator('i').click();
  await page.getByRole('textbox', { name: 'label.FechaInicio' }).click();
  await page.getByRole('cell', { name: '12' }).click();
  await page.getByRole('listitem').filter({ hasText: 'label.FechaFin' }).locator('i').click();
  await page.getByRole('textbox', { name: 'label.FechaFin' }).click();
  await page.getByRole('cell', { name: '25', exact: true }).click();
  await page.getByRole('button', { name: 'label.Siguiente' }).click();
  await page.getByRole('button', { name: 'label.Siguiente' }).click();
  await page.getByRole('button', { name: '+ Mostrar más' }).click();
});



test('Prueba Usando Locator Inspector', async({page}) => {
  await page.goto('https://segurossura.com.pa/');
  
  // Mover el cursor sobre "Personas" (sin hacer clic)
  await page.locator('#desktop-navigation').getByText('Personas').hover()
  // Hacer clic en "Seguro de Viajes"
  await page.getByRole('link', { name: 'Seguro de Viajes' }).click();
  // Hacer clic en botón "COMPRAR EN LÍNEA"
  await page.getByRole('link', { name: 'COMPRAR EN LÍNEA' }).click();
  // Colocar ubicación de partida
  //await page.getByLabel('label.Origen').selectOption('PA')
  // Colocar la ubicación de llegada
  await page.pause()
  await page.getByLabel('label.Destino').selectOption('47')
  // Fecha de salida del País
  await page.getByRole('textbox', { name: 'label.FechaInicio' }).click();
  await page.getByRole('cell', { name: '16' }).click()
  
  // Fecha de llegada al País
  // Hacer clic en el campo de fecha de regreso para abrir el calendario
  await page.getByRole('textbox', { name: 'label.FechaFin' }).click();
  // Hacer clic en el día específico dentro del calendario (Ejemplo: 22 de febrero)
  await page.getByRole('cell', { name: '22' }).click()

  // Colocamos la cantidad de viajeros
  await page.getByRole('spinbutton', { name: 'label.Pasajeros' }).fill('2');

  // Colocamos la edad del cliente '1' y '2'
  await page.locator('#edades_pasajeros').getByRole('spinbutton').fill('29')
  await page.getByRole('listitem').filter({ hasText: /^label\.Edad$/ }).getByRole('spinbutton').fill('30');

  //Botón de siguiente fase
  await page.getByRole('button', { name: 'label.Siguiente' }).click()

  // Seleccionando el Plan deseado
  await page.locator('#seleccion_3582').click()
  await page.pause()

  



})
