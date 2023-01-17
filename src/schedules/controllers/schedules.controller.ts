import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ScheduleDto } from './dtos/schedules.dto'
import { IHandlerCRUD } from '../../common/interfaces/handlers/handler-crud.interface'
import { ISchedule } from '../interfaces/schedules.interface'
import { ScheduleUpdateDto } from './dtos/schedules-update.dto'
import { AbstractScheduleService } from '@app/schedules/services/abstract-schedule.service'
import { ScheduleIsOpenDto } from '@app/schedules/controllers/dtos/schedules-is-open.dto'

@ApiTags('Schedules')
@Controller('schedules')
export class ScheduleController implements IHandlerCRUD<ISchedule> {
  constructor(private readonly scheduleService: AbstractScheduleService) {}

  @Post()
  async store(@Body() data: ScheduleDto) {
    return await this.scheduleService.store(data)
  }

  @Get()
  async getAll() {
    return await this.scheduleService.index()
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.scheduleService.show(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ScheduleUpdateDto) {
    return await this.scheduleService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.scheduleService.delete(id)
  }

  @Post(':restaurantId/is-open')
  async isOpen(@Param('restaurantId') restaurantId: string, @Body() { dateTime }: ScheduleIsOpenDto) {
    return await this.scheduleService.checkIsOpen(restaurantId, dateTime)
  }
}
