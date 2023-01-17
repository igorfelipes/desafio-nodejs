import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { RestaurantDto } from './dtos/restaurant.dto'
import { IHandlerCRUD } from '../../common/interfaces/handlers/handler-crud.interface'
import { IRestaurant } from '../interfaces/restaurant.interface'
import { AbstractRestaurantService } from '../services/abstract-restaurant.service'
import { RestaurantUpdateDto } from './dtos/restaurant-update.dto'

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantController implements IHandlerCRUD<IRestaurant> {
  constructor(private readonly restaurantService: AbstractRestaurantService) {}

  @Post()
  async store(@Body() data: RestaurantDto) {
    return await this.restaurantService.store(data)
  }

  @Get()
  async getAll() {
    return await this.restaurantService.index()
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.restaurantService.show(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: RestaurantUpdateDto) {
    return await this.restaurantService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.restaurantService.delete(id)
  }
}
