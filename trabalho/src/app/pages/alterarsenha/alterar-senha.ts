import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Form, FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Pessoa } from "../../model/pessoa";


@Component({
    selector: 'alterar-senha',
    styleUrls: ['alterar-senha.scss'],
    templateUrl: 'alterar-senha.html'
})
export class AlterarSenha implements OnInit{
    
    public form: FormGroup;
    public pessoa: Pessoa = new Pessoa();

    constructor(private fb: FormBuilder){
    }

    ngOnInit(){

        const novaSenha = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])); 
        const confirmeSenha = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)]));
        
        this.form = this.fb.group({
            login: [''],
            senhaAtual: ['', Validators.required],
            novaSenha: novaSenha,
            confirmeSenha: confirmeSenha
        });

        let user = localStorage.getItem('usuario');
        if (user != null){
            /**
             *  Caso já tenha um usuário no storage vai ser convertido 
             * de obj para Usuario
             */
            this.pessoa = JSON.parse(user);
        }
    }

    public alterar(){
        if(this.form.invalid){
            alert('Informe os campos obrigatórios!')
            return;
        }
        console.log(this.pessoa);
        let user = JSON.stringify(this.pessoa);
        localStorage.setItem('usuario', user);
        alert('Sua senha foi alterada com sucesso!');
    }
}