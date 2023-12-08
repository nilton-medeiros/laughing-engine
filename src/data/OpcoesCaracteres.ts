import OpcaoCaractere from "@/model/OpcaoCaractere";
import IdsCaracteres from "@/model/IdsCaracteres";

const opcoes:OpcaoCaractere[] = [
    {id:IdsCaracteres.NUMEROS, nome:"Números", valor:false},
    {id:IdsCaracteres.MAIUSCULAS, nome:"Letras Maiúsculas", valor:false},
    {id:IdsCaracteres.MINUSCULAS, nome:"Letras Minúsculas", valor:false},
    {id:IdsCaracteres.ESPECIAIS, nome:"Caracteres Especiais", valor:false},
]

export default opcoes