import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'
import { ISchedule } from '../../interfaces/schedules.interface'

export class ScheduleDto implements Partial<ISchedule> {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  dayOfWeek: number

  @ApiProperty({
    example: '23:00'
  })
  @IsString()
  @IsNotEmpty()
  startHour: string

  @ApiProperty({
    example: '23:00'
  })
  @IsString()
  @IsNotEmpty()
  endHour: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  restaurantId: string
}
