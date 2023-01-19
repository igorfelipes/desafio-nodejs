import { Injectable } from '@nestjs/common'
import { AbstractRepository } from '../repositories/abstract-repository.repository'
import { AbstractScheduleService } from './abstract-schedule.service'
import { ISchedule } from '../interfaces/schedules.interface'
import { FactoryDto } from '../../schedules/services/factory-dto.service'
import { DateTime } from 'luxon'
import { AbstractRestaurantService } from '../../restaurants/services/abstract-restaurant.service'
import moment from 'moment'

@Injectable()
export class ScheduleService extends AbstractScheduleService {
  constructor(
    private readonly repository: AbstractRepository<ISchedule>,
    private readonly factoryDto: FactoryDto,
    private readonly restaurantService: AbstractRestaurantService
  ) {
    super()
  }
  async store(data: ISchedule): Promise<any> {
    const dataRestaurantDto = this.factoryDto.createDto<ISchedule>('scheduleDto', data)
    await this.checkRestaurantExists(data.restaurantId)
    return await this.repository.save(dataRestaurantDto)
  }
  async index(query?: Partial<ISchedule>): Promise<any> {
    return await this.repository.findAll(query)
  }
  async show(id: string): Promise<any> {
    return await this.repository.find(id)
  }
  async update(id: string, data: Partial<ISchedule>): Promise<any> {
    return await this.repository.update(id, data)
  }
  async delete(id: string): Promise<any> {
    return await this.repository.delete(id)
  }

  protected async checkRestaurantExists(restaurantId: string) {
    return this.restaurantService.show(restaurantId)
  }

  async checkIsOpen(restaurantId: string, dateTime: DateTime): Promise<any> {
    await this.restaurantService.show(restaurantId)

    //Convert Date and time
    const convertedDate = moment(dateTime)
    const time = moment(dateTime).format('HH:mm:ss')
    const timeConverted = moment(time, 'HH:mm:ss')

    const schedules = await this.repository.findAll()

    const isOpen =
      schedules.filter((schedule) => {
        const startTime = moment(schedule.startHour, 'HH:mm:ss')
        const endTime = moment(schedule.endHour, 'HH:mm:ss')

        const isBetWeen = timeConverted.isBetween(startTime, endTime)
        const isNow = convertedDate.day() === schedule.dayOfWeek
        const isSomeRestaurant = schedule.restaurantId === restaurantId
        return isSomeRestaurant && isBetWeen && isNow
      }).length > 0

    return isOpen
  }
}
