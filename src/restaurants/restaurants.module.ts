import { Module } from '@nestjs/common'
import { AbstractRepository } from './repositories/abstract-repository.repository'
import { StorageLocalRepository } from './repositories/storageLocal/storage-local.repository'
import { AbstractRestaurantService } from './services/abstract-restaurant.service'
import { RestaurantService } from './services/restaurant.service'
import { RestaurantController } from './controllers/restaurant.controller'
import { FactoryDto } from './services/factory-dto.service'

@Module({
  imports: [],
  controllers: [RestaurantController],
  providers: [
    {
      provide: AbstractRestaurantService,
      useClass: RestaurantService
    },
    {
      provide: AbstractRepository,
      useClass: StorageLocalRepository
    },
    FactoryDto
  ],
  exports: [AbstractRestaurantService]
})
export class RestaurantsModule {}
