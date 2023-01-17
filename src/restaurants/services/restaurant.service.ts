import { IRestaurant } from '../../restaurants/interfaces/restaurant.interface'
import { FactoryDto } from '../../restaurants/services/factory-dto.service'
import { Injectable } from '@nestjs/common'
import { AbstractRepository } from '../repositories/abstract-repository.repository'
import { AbstractRestaurantService } from './abstract-restaurant.service'
// import { FactoryDto } from './factory-dto.service'

@Injectable()
export class RestaurantService extends AbstractRestaurantService {
  constructor(private readonly repository: AbstractRepository<IRestaurant>, private readonly factoryDto: FactoryDto) {
    super()
  }
  async store(data: IRestaurant): Promise<any> {
    const dataRestaurantDto = this.factoryDto.createDto<IRestaurant>('restaurantDto', data)
    return await this.repository.save(dataRestaurantDto)
  }
  async index(query?: Partial<IRestaurant>): Promise<any> {
    return await this.repository.findAll(query)
  }
  async show(id: string): Promise<any> {
    return await this.repository.find(id)
  }
  async update(id: string, data: Partial<IRestaurant>): Promise<any> {
    return await this.repository.update(id, data)
  }
  async delete(id: string): Promise<any> {
    return await this.repository.delete(id)
  }
}
