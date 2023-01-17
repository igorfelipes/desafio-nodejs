import { IFind } from '../interfaces/repositories/find.interface'
import { IPersist } from '../interfaces/repositories/persist.interface'

export abstract class AbstractRepository<T> implements IPersist, IFind {
  abstract save(data: T): Promise<T>
  abstract update(id: string, data: Partial<T>): Promise<T>
  abstract delete(id: string): Promise<T>
  abstract findAll(query: Partial<T>): Promise<T[]>
  abstract findOne(query: Partial<T>): Promise<T>
  abstract find(id: string): Promise<T>
}
