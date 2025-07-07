import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'; // ✅ Importação necessária

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Formulario } from './components/formulario/formulario';

@NgModule({
  declarations: [
    App,
    Formulario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // ✅ Adicionado aqui no array de imports
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
