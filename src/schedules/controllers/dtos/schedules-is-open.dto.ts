import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { DateTime } from 'luxon'

export class ScheduleIsOpenDto {
  @ApiProperty({
    example: '2023-01-19 17:00:00'
  })
  @IsNotEmpty()
  dateTime: DateTime
}
