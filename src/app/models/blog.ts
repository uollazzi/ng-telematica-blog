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