import { test } from '@playwright/test';

test('Prueba de Compra de Seguro de Viaje', async({ page }) => {
    await page.goto('https://segurossura.com.pa/');
  
    await test.step('Seleccionar Seguro de Viajes', async () => {
      await page.locator('#desktop-navigation').getByText('Personas').hover();
      await page.getByRole('link', { name: 'Seguro de Viajes' }).click();
      await page.getByRole('link', { name: 'COMPRAR EN LÍNEA' }).click();
    });
  
    await test.step('Llenar Datos del Viaje', async () => {
      await page.getByLabel('label.Origen').selectOption('PA');
      await page.getByLabel('label.Destino').selectOption('47');
  
      await page.getByRole('textbox', { name: 'label.FechaInicio' }).click();
      await page.getByRole('cell', { name: '16' }).click();
      
      await page.getByRole('textbox', { name: 'label.FechaFin' }).click();
      await page.getByRole('cell', { name: '22' }).click();
      
      await page.getByRole('spinbutton', { name: 'label.Pasajeros' }).fill('2');
      
      await page.locator('#edades_pasajeros').getByRole('spinbutton').fill('29')
      await page.getByRole('listitem').filter({ hasText: /^label\.Edad$/ }).getByRole('spinbutton').fill('30'); 
  
      await page.getByRole('button', { name: 'label.Siguiente' }).click();
    });
  
    await test.step('Seleccionar Plan de Seguro', async () => {
      await page.locator('#seleccion_3582').click();
      
    });
  
    await test.step('Llenar datos de compradores', async () => {
      await page.locator('input[name="nombre\\[\\]"]').first().fill('Juan')
      await page.locator('input[name="apellidos\\[\\]"]').first().fill('Fong')
      await page.locator('input[name="pasaporte\\[\\]"]').first().fill('8-898-820')
      await page.locator('input[name="email\\[\\]"]').first().fill('juanaldahirf@gmail.com')
      await page.locator('input[name="telefono\\[\\]"]').first().fill('50768165118')
      

      // Segundo Cliente
      await page.locator('input[name="nombre\\[\\]"]').nth(1).fill('Aileen')
      await page.locator('input[name="apellidos\\[\\]"]').nth(1).fill('Rico')
      await page.locator('input[name="pasaporte\\[\\]"]').nth(1).fill('8-966-1466')
      await page.locator('input[name="email\\[\\]"]').nth(1).fill('aileen.rico16@gmail.com')
      await page.locator('input[name="telefono\\[\\]"]').nth(1).fill('50768165118')

      // Contacto emergente
      await page.locator('input[name="nombre_contacto"]').fill('Yelipsa Ortega')
      await page.locator('input[name="email_contacto"]').fill('yelipsaortega@gmail.com')
      await page.locator('input[name="telefono_contacto"]').fill('50767327837')

      // Click boton
      await page.getByRole('button', { name: 'label.Comprar' }).first().click()
      await page.getByRole('button', { name: 'Continuar' }).click()
      await page.pause(); // Pausa antes de continuar con la compra


    });
  });
  