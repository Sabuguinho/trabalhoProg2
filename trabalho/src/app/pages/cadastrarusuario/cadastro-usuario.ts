import { Component, OnInit } from "@angular/core";
import { Pessoa } from "../../model/pessoa";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'cadastro-usuario',
    templateUrl: 'cadastro-usuario.html',
    styleUrls: ['cadastro-usuario.scss']
})
export class CadastroUsuario implements OnInit{

    public pessoa: Pessoa = new Pessoa();
    public form: FormGroup;

    constructor(private fb: FormBuilder, private router: Router){
    }
 
    ngOnInit(){
        this.form = this.fb.group({
            nome: ['',Validators.required],
            cpf: ['',Validators.required],
            email: ['',Validators.required],
            login: ['',Validators.required],
            senha: ['',Validators.required],
            confirmeSenha: ['',Validators.required],
            apelido: [''],
            telefone: [''],
            celular: [''],
            grupoUsuario: ['',Validators.required],
            descricao: ['']
        });
    }

    public salvar(){
        if(this.form.invalid){
            return;
        }
        alert('Salvo com sucesso!');
    }
}