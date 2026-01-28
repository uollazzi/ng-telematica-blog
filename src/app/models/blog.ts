export interface CategoriaModel {
    id: number,
    nome: string
}

export interface ArticoloModel {
    id: number,
    titolo: string,
    testo: string,
    categoria: CategoriaModel,
    autore: string
}

export class ArticoloDTO {
    titolo: string;
    testo: string;
    autoreId: number;
    categoriaId: number;

    constructor(titolo: string = "", testo: string = "") {
        this.titolo = titolo;
        this.testo = testo;
        this.autoreId = 1;
        this.categoriaId = 2;
    }
}

// {
//     "id": 2,
//     "titolo": "Sinner vince",
//     "testo": "Come al solito",
//     "categoria": {
//       "id": 1,
//       "nome": "Sport"
//     },
//     "auotore": "Elon Musk"
//   },