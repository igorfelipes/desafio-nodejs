import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, IsNumber, IsArray, IsUUID } from 'class-validator'
import { ISchedule } from '../../interfaces/schedules.interface'

export class ScheduleUpdateDto implements Partial<ISchedule> {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  dayOfWeek: number

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  hours: string[]

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  restaurantId: string
}
