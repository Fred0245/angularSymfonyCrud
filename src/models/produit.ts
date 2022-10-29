import { Categorie } from './categorie';
export class Produits
{

  id!:number;
  code: string;
  libelle: string;
  prix : number;
  quantite: number;
  description : string;
  image: string;
  categorie : Categorie;


  public constructor(){

    this.code = '';
    this.libelle ='';
    this.prix= 0;
    this.quantite = 0;
    this.description='';
    this.image = '';
    this.categorie= new Categorie();

  }

}
