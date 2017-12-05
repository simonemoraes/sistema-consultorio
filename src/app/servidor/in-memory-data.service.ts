import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pacientes = [
            {   id: 1,
                nome: 'Simone Louzada Moraes Paim Santos',
                endereco:'',
                bairro: '',
                cidade: '',
                estado: '',
                cep: 25561162,
                dt_nasc: '05/07/1974',
                cpf: '04701055778',
                rg: '092911353',
                telefone: 987404766,
                operadora: '',
                convenio: 'Unimed'
            } ,
            { id: 2, nome: 'Rui Anderson Paim Santos', endereco:'', bairro: '',
                cidade: '', estado: '', cep: 25561162, dt_nasc: '05/07/1974', cpf: '04701055778',
                rg: '092911353', telefone: 966547516, operadora: '', convenio: 'Bradesco' } ,
            { id: 3, nome: 'Vitor Moraes Eugenio', endereco:'', bairro: '',
                cidade: '', estado: '', cep: 25561162, dt_nasc: '05/07/1974', cpf: '04701055778',
                rg: '092911353', telefone: 987654321, operadora: '', convenio: 'Unimed' } ,
            { id: 4, nome: 'Bruna Moraes Eugenio', endereco:'', bairro: '',
                cidade: '', estado: '', cep: 25561162, dt_nasc: '05/07/1974', cpf: '04701055778',
                rg: '092911353', telefone: 123456789, operadora: '', convenio: 'Unimed' } ,
            { id: 5, nome: 'Lindinalva Louzada Moraes', endereco:'', bairro: '',
                cidade: '', estado: '', cep: 25561162, dt_nasc: '05/07/1974', cpf: '04701055778',
                rg: '092911353', telefone: 456987123, operadora: '',convenio: 'Petrobras' } ,
            ];
        return {pacientes};
    }
}
