import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { IRestaurant, RestaurantTypeEnum } from '../../interfaces/restaurant.interface'

export class RestaurantDto implements Partial<IRestaurant> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  documento: string

  @ApiProperty({
    enum: RestaurantTypeEnum,
    example: RestaurantTypeEnum.LANCHONETE
  })
  @IsEnum(RestaurantTypeEnum)
  @IsNotEmpty()
  type: RestaurantTypeEnum
}
