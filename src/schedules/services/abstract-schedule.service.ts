import { IScheduleService } from '../interfaces/schedule-service.interface'
import { ISchedule } from '../../schedules/interfaces/schedules.interface'
import { DateTime } from 'luxon'

export abstract class AbstractScheduleService implements IScheduleService {
  abstract store(data: Partial<ISchedule>): Promise<any>
  abstract index(query?: Partial<ISchedule>): Promise<any>
  abstract show(id: string): Promise<any>
  abstract update(id: string, data: Partial<ISchedule>): Promise<any>
  abstract delete(id: string): Promise<any>
  abstract checkIsOpen(restaurantId: string, dateTime: DateTime): Promise<any>
}
