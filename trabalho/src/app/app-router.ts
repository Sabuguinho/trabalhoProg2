import { Routes, RouterModule, Router } from "@angular/router";
import { CadastroCliente } from "./pages/cadastrarcliente/cadastro-cliente";
import { NgModule } from "@angular/core";
import { CadastroUsuario } from "./pages/cadastrarusuario/cadastro-usuario";
import { AlterarSenha } from "./pages/alterarsenha/alterar-senha";

export const appRoutes: Routes = [
    {
        path: 'cadastro-cliente', component: CadastroCliente
    },
    {
        path: 'cadastro-usuario', component: CadastroUsuario
    },
    {
        path: 'alterar-senha', component: AlterarSenha
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRouter{
    constructor(router: Router){
        
    }
}