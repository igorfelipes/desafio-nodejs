import { AbstractRepository } from '../schedules/repositories/abstract-repository.repository'
import { StorageLocalRepository } from '../schedules/repositories/storageLocal/storage-local.repository'
import { FactoryDto } from '../schedules/services/factory-dto.service'
import { Module } from '@nestjs/common'
import { AbstractScheduleService } from './services/abstract-schedule.service'
import { ScheduleService } from './services/schedule.service'
import { RestaurantsModule } from '../restaurants/restaurants.module'
import { ScheduleController } from '../schedules/controllers/schedules.controller'

@Module({
  imports: [RestaurantsModule],
  controllers: [ScheduleController],
  providers: [
    {
      provide: AbstractScheduleService,
      useClass: ScheduleService
    },
    {
      provide: AbstractRepository,
      useClass: StorageLocalRepository
    },
    FactoryDto
  ]
})
export class SchedulesModule {}
