import { RestaurantDto } from '@app/restaurants/interfaces/dtos/restaurant.dto'
import { Injectable } from '@nestjs/common'
import { v4 } from 'uuid'
import { IRestaurant } from '../interfaces/restaurant.interface'

@Injectable()
export class FactoryDto {
  createDto<T>(type: string, data: T) {
    const dtoFactoryMethods = {
      restaurantDto: this.createRestaurantDto
    }
    return dtoFactoryMethods[type](data)
  }

  createRestaurantDto(data: IRestaurant): RestaurantDto {
    const uuidv4 = v4()
    const result: RestaurantDto = {
      id: uuidv4,
      ...data
    }

    return result
  }
}
