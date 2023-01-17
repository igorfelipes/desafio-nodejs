import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'
import { ISchedule } from '../../interfaces/schedules.interface'

export class ScheduleDto implements Partial<ISchedule> {
  @IsNumber()
  @IsNotEmpty()
  dayOfWeek: number

  @IsArray()
  @IsString()
  @IsNotEmpty()
  startHour: string
  @IsArray()
  @IsString()
  @IsNotEmpty()
  endHour: string

  @IsNotEmpty()
  @IsUUID()
  restaurantId: string
}
