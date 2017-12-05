export class Paciente {
    id: number;
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: number;
    dt_nasc: string;
    cpf: string;
    rg: string;
    telefone: number;
    operadora: string;
    convenio: string;
    venct_convenio: string;
    profissao: string;
    empresa: string;

    constructor(
        id,
        nome,
        endereco,
        bairro,
        cidade,
        estado,
        cep,
        dt_nasc,
        cpf,
        rg,
        telefone,
        operadora,
        convenio,
        venct_convenio,
        profissao,
        empresa
    ) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.dt_nasc = dt_nasc;
        this.cpf = cpf;
        this.rg = rg;
        this.telefone = telefone;
        this.operadora = operadora;
        this.convenio = convenio;
        this.venct_convenio = venct_convenio;
        this.profissao = profissao;
        this.empresa = empresa;
    }
}
