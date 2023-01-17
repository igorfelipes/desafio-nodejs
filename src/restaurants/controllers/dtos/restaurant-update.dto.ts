import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsOptional, IsString } from 'class-validator'
import { IRestaurant, RestaurantTypeEnum } from '../../interfaces/restaurant.interface'

export class RestaurantUpdateDto implements Partial<IRestaurant> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  documento: string

  @ApiProperty()
  @IsEnum(RestaurantTypeEnum)
  @IsOptional()
  type: RestaurantTypeEnum
}
