import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { DateTime } from 'luxon'

export class ScheduleIsOpenDto {
  @ApiProperty()
  @IsNotEmpty()
  dateTime: DateTime
}
