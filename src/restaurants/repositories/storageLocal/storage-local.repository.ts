import { IRestaurant, RestaurantTypeEnum } from '../../interfaces/restaurant.interface'
import { Injectable, NotFoundException } from '@nestjs/common'
import { AbstractRepository } from '../abstract-repository.repository'
import { Restaurant } from 'src/restaurants/types/restaurant'

@Injectable()
export class StorageLocalRepository extends AbstractRepository<IRestaurant> {
  private storage: Restaurant[] = [
    {
      id: 'e67b7fe0-ac73-4e63-8134-07be9481d7f1',
      name: 'Trattoria de Origem',
      documento: '54.474.646/0001-30',
      type: RestaurantTypeEnum.ITALIANO
    },
    {
      id: '9a0ec101-2a6e-446c-88fb-4cafc1a6a89c',
      name: 'Tia Graça',
      documento: '41.134.484/0001-49',
      type: RestaurantTypeEnum.LANCHONETE
    }
  ]
  constructor() {
    super()
  }

  async save(data: IRestaurant): Promise<IRestaurant> {
    this.storage.push(data)
    return data
  }

  async update(id: string, data: Partial<IRestaurant>): Promise<IRestaurant> {
    const restaurant = this.checkIfExists(id)
    const newStorage = this.storage.filter((restaurantItem) => restaurantItem.id !== restaurant.id)
    newStorage.push({
      id,
      ...restaurant,
      ...data
    })
    this.storage = newStorage
    return
  }

  async delete(id: string): Promise<IRestaurant> {
    const restaurant = this.checkIfExists(id)
    const newStorage = this.storage.filter((restaurantItem) => restaurantItem.id !== restaurant.id)
    this.storage = newStorage
    return
  }

  async findAll(query: Partial<IRestaurant>): Promise<IRestaurant[]> {
    return this.storage
  }

  async findOne(query: Partial<IRestaurant>): Promise<IRestaurant> {
    throw new Error('Method not implemented.')
  }

  async find(id: string): Promise<IRestaurant> {
    return this.checkIfExists(id)
  }

  protected checkIfExists(id: string) {
    const restaurant = this.storage.find((restaurant) => restaurant.id === id)
    if (restaurant) return restaurant
    throw new NotFoundException()
  }
}
