import { NotFound, BadRequest } from 'fejl'

// Prefab assert function.
const assertOption = BadRequest.makeAssert('No option given')

/**
 * Luz Service.
 * Gets
 */
export default class LuzService {
  constructor(luzStore) {
    this.luzStore = luzStore
  }

  async find(params) {
    return this.luzStore.find(params)
  }

  async get(opcion) {
    assertOption(opcion)
    // If `luzStore.get()` returns a falsy value, we throw a
    // NotFound error with the specified message.
    return this.luzStore
      .get(opcion)
      .then(NotFound.makeAssert(`Opción "${opcion}" no encontrada`))
  }

  async status() {
    return this.luzStore.status()
  }
}
