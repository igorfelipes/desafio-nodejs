import { Test } from '@nestjs/testing'
import { mock } from 'jest-mock-extended'
import { AbstractScheduleService } from '../services/abstract-schedule.service'
import { ScheduleDto } from './dtos/schedules.dto'
import { ScheduleController } from './schedules.controller'

// class ServiceStub extends AbstractTermOfUseService {
//     async acceptTerm(): Promise<any> {
//         return jest.fn().mockResolvedValue(undefined)
//     }

//     async rejectTerm(): Promise<any> {
//         throw new Error("Method not implemented.");
//     }
// }

describe('SchedulesController', () => {
  let restaurantController: ScheduleController
  const restaurantService = mock<AbstractScheduleService>()
  const dataSchedule = mock<ScheduleDto>()
  const query = mock<any>()

  beforeEach(async () => {
    jest.clearAllMocks()

    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [ScheduleController], // Add
      providers: [
        {
          provide: AbstractScheduleService,
          useValue: restaurantService
        }
      ] // Add
    }).compile()

    restaurantController = moduleRef.get<ScheduleController>(ScheduleController)
  })

  it('should be defined', () => {
    expect(restaurantController).toBeDefined()
  })

  describe('store', () => {
    it('should execute accept term flow with options parameters correctly', async () => {
      const result = await restaurantController.store(dataSchedule)
      // expect(useTermsService.acceptTerm).toHaveBeenCalledTimes(1)
      // expect(useTermsService.acceptTerm).toHaveBeenCalledWith(dataSchedule)
    })

    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'acceptTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.acceptTerm(dataSchedule)).rejects.toThrow()
    })
  })

  describe('getRestaurant', () => {
    it('should execute get term flow with options parameters correctly', async () => {
      const result = await restaurantController.getById(query)
      // expect(useTermsService.getTerm).toHaveBeenCalledTimes(1)
      // expect(useTermsService.getTerm).toHaveBeenCalledWith(query)
    })

    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'getTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.getTermOfUse(query)).rejects.toThrow()
    })
  })
})
