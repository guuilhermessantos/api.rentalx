import { Category } from '../models/Category'

// DTO -> DataTransfer Object
// toda vez que quisermos fazer uma criação de um objeto recebndo informações vindo da nossa rota
interface ICreateCategoryDTO {
  name: string
  description: string
}

class CategoriesRepository {
  private categories: Category[] // removendo a inicialização no category

  constructor () {
    this.categories = [] // trabalhando com o atributo que esta dentro da class com this.
  }

  create ({ name, description }: ICreateCategoryDTO): void { // dizendo que vai receber um objeto do tipo ICreateCategoryDTO
    const category = new Category()//             tipo de função que n vai ter retorno
    //                                                fazendo destruturação

    Object.assign(category, {
      name,
      description,
      createdAt: new Date()
    })

    this.categories.push(category)
  }

  list (): Category[] { // criando o metodo list : // que retorna uma lista das categorias
    return this.categories // retorno das categorias
  }

  findByName (name: string): Category { // criando função parametos(do tipo string) retornando um objeto (category)
    const category = this.categories.find(category => category.name === name) // find permite percorrer o array procurando category.name com o nome que foi passado
    return category
  }
}

export { CategoriesRepository }
