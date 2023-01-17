import { Injectable, NotFoundException } from '@nestjs/common'
import { AbstractRepository } from '../abstract-repository.repository'
import { ISchedule } from '../../interfaces/schedules.interface'
import { Schedule } from 'src/schedules/types/schedule'
import { AbstractRestaurantService } from 'src/restaurants/services/abstract-restaurant.service'

@Injectable()
export class StorageLocalRepository extends AbstractRepository<ISchedule> {
  private storage: Schedule[] = [
    {
      id: 'abed5731-1ea1-469d-abb7-fc72e7653b6a',
      dayOfWeek: 0,
      startHour: '08:00:00',
      endHour: '21:00:00',
      restaurantId: 'e67b7fe0-ac73-4e63-8134-07be9481d7f1'
    },
    {
      id: '61412226-3286-4a7d-b928-db0628d954dc',
      dayOfWeek: 6,
      startHour: '08:00:00',
      endHour: '21:00:00',
      restaurantId: 'e67b7fe0-ac73-4e63-8134-07be9481d7f1'
    }
  ]
  constructor(private readonly restaurantService: AbstractRestaurantService) {
    super()
  }

  async save(data: ISchedule): Promise<ISchedule> {
    this.storage.push(data)
    return data
  }

  async update(id: string, data: Partial<ISchedule>): Promise<ISchedule> {
    const schedule = await this.checkIfExists(id)
    const newStorage = this.storage.filter((scheduleItem) => scheduleItem.id !== schedule.id)
    newStorage.push({
      id,
      ...schedule,
      ...data
    })
    this.storage = newStorage
    return
  }

  async delete(id: string): Promise<ISchedule> {
    const schedule = await this.checkIfExists(id)
    const newStorage = this.storage.filter((scheduleItem) => scheduleItem.id !== schedule.id)
    this.storage = newStorage
    return
  }

  async findAll(query: Partial<ISchedule>): Promise<ISchedule[]> {
    return this.storage
  }

  async findOne(query: Partial<ISchedule>): Promise<ISchedule> {
    throw new Error('Method not implemented.')
  }

  async find(id: string): Promise<ISchedule> {
    return this.checkIfExists(id)
  }

  protected async checkIfExists(id: string) {
    const schedule = this.storage.find((schedule) => schedule.id === id)
    if (schedule) return schedule
    throw new NotFoundException()
  }
}
