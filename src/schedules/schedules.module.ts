import { AbstractRepository } from 'src/schedules/repositories/abstract-repository.repository'
import { StorageLocalRepository } from 'src/schedules/repositories/storageLocal/storage-local.repository'
import { FactoryDto } from 'src/schedules/services/factory-dto.service'
import { Module } from '@nestjs/common'
import { AbstractScheduleService } from './services/abstract-schedule.service'
import { ScheduleService } from './services/schedule.service'
import { RestaurantsModule } from '../restaurants/restaurants.module'
import { ScheduleController } from 'src/schedules/controllers/schedules.controller'

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
