export class Paciente {
    id: string;
    nome: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    numero: string;
    complemento: string;
    dt_nasc: string;
    cpf: string;
    rg: string;
    telefone: string;
    celular: string;
    operadora: string;
    convenio: string;
    num_convenio: string;
    val_convenio: string;
    via_convenio: string;
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
        via_convenio,
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
        this.celular = celular;
        this.operadora = operadora;
        this.convenio = convenio;
        this.num_convenio = num_convenio;
        this.val_convenio = val_convenio;
        this.via_convenio = via_convenio;
        this.profissao = profissao;
        this.empresa = empresa;
    }
}
