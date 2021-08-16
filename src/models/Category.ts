import { v4 as uuidV4 } from 'uuid'

class Category {
  id?: string // ? - dizendo que o id e opissional
  name: string;
  description: string;
  createdAt: Date;

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Category }
