import { Injectable } from '@nestjs/common'
import { v4 } from 'uuid'
import { ISchedule } from '../../schedules/interfaces/schedules.interface'
import { ScheduleDto } from 'src/schedules/interfaces/dtos/schedules.dto'

@Injectable()
export class FactoryDto {
  createDto<T>(type: string, data: T) {
    const dtoFactoryMethods = {
      scheduleDto: this.createScheduleDto
    }
    return dtoFactoryMethods[type](data)
  }

  createScheduleDto(data: ISchedule): ScheduleDto {
    const uuidv4 = v4()
    const result = {
      id: uuidv4,
      ...data
    }

    return result
  }
}
