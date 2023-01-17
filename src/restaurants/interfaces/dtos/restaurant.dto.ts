import { IsEnum, IsString, IsUUID } from 'class-validator'
import { IRestaurant, RestaurantTypeEnum } from '../restaurant.interface'

export class RestaurantDto implements IRestaurant {
  @IsString()
  @IsUUID()
  id: string

  @IsString()
  name: string

  @IsString()
  documento: string

  @IsEnum(RestaurantTypeEnum)
  type: RestaurantTypeEnum
}
