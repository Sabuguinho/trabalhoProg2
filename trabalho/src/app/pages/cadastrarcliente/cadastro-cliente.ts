import { OnInit, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Pessoa } from "../../model/pessoa";

@Component({
    selector: 'cadastro-cliente',
    styleUrls: ['cadastro-cliente.scss'],
    templateUrl: 'cadastro-cliente.html'
})
    
export class CadastroCliente implements OnInit{

    public pessoa: Pessoa = new Pessoa();
    public form: FormGroup;

    constructor(private router: Router, private fb: FormBuilder){
    }

    ngOnInit(){
        this.form = this.fb.group({
            /*codigo: [' ',Validators.compose([])],*/
            nome: ['', Validators.required],
            fantasia: ['', Validators.required],
            cpf: ['', Validators.required],
            rg: [null],
            cep: ['', Validators.required],
            celular: ['', Validators.required],
            telefone: ['', Validators.required],
            dataNascimento: ['', Validators.required],
            email: ['', Validators.required],
            estado: ['', Validators.required],
            cidade: ['', Validators.required],
            bairro: ['', Validators.required],
            rua: ['', Validators.required],
            numero: ['', Validators.required],
            complemento: [''],
            descricao: ['']
        });
    }

    public salvar(){
        if (this.form.invalid){
            alert('Preencha os campos obrigatórios');
            return;
        }
        alert('Salvo com sucesso!');
    }
}