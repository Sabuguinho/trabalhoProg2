import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatSliderModule,
  MatButtonToggle,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule} from '@angular/flex-layout';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AppRouter} from './app-router';
import {MatExpansionModule} from '@angular/material/expansion';
import { CadastroCliente } from './pages/cadastrarcliente/cadastro-cliente';
import { CadastroUsuario } from './pages/cadastrarusuario/cadastro-usuario';
import { AlterarSenha } from './pages/alterarsenha/alterar-senha';
import { Menu } from './componentes/menu/menu';

@NgModule({
    declarations: [
        AppComponent,
        CadastroCliente,
        CadastroUsuario,
        AlterarSenha,
        Menu
    ],
    imports: [
        MatExpansionModule,
        MatListModule,
        MatSidenavModule,
        AppRouter,FlexLayoutModule,
        MatCardModule,BrowserAnimationsModule,
        BrowserModule,ReactiveFormsModule,
        MatDatepickerModule, MatNativeDateModule,
        MatButtonModule, MatCheckboxModule, MatSelectModule,
        MatAutocompleteModule, MatInputModule, MatFormFieldModule,
        FormsModule,MatSliderModule,MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }