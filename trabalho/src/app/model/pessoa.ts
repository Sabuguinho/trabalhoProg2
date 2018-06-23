export class Pessoa {

    public nome: string; 
    public cpf: string;
    public rg: string;
    public cep: string;
    public celular: string;
    public telefone: string;
    public dataNascimento: Date;
    public email: string;
    public cidade: string;
    public estado: string;
    public bairro: string;
    public numero: string;
    public complemento: string;

    //PARA USUARIO
    public codigo: number;
    public login: string;
    public senha: any;
    public novaSenha: any;
    public confirmeSenha: any;
    public apelido: string;
    public grupoUsuario: any;
    public ativo: boolean;

    public senhaAtual: any;
}