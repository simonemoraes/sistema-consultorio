export class Paciente {
    id: number;
    nome: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: number;
    numero: number;
    complemento: string;
    dt_nasc: string;
    cpf: string;
    rg: string;
    telefone: number;
    celular: number;
    operadora: string;
    convenio: string;
    num_convenio: string;
    val_convenio: string
    venct_convenio: string;
    profissao: string;
    empresa: string;

    constructor(
        id,
        nome,
        rua,
        bairro,
        cidade,
        estado,
        cep,
        numero,
        complemento,
        dt_nasc,
        cpf,
        rg,
        telefone,
        celular,
        operadora,
        convenio,
        num_convenio,
        val_convenio,
        venct_convenio,
        profissao,
        empresa
    ) {
        this.id = id;
        this.nome = nome;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        this.dt_nasc = dt_nasc;
        this.cpf = cpf;
        this.rg = rg;
        this.telefone = telefone;
        this.celular - celular;
        this.operadora = operadora;
        this.convenio = convenio;
        this.num_convenio = num_convenio;
        this.val_convenio = val_convenio;
        this.venct_convenio = venct_convenio;
        this.profissao = profissao;
        this.empresa = empresa;
    }
}
