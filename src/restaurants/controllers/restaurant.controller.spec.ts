import { Test } from '@nestjs/testing'
import { mock } from 'jest-mock-extended'
import { AbstractRestaurantService } from '../services/abstract-restaurant.service'
import { RestaurantDto } from './dtos/restaurant.dto'
import { RestaurantController } from './restaurant.controller'

// class ServiceStub extends AbstractTermOfUseService {
//     async acceptTerm(): Promise<any> {
//         return jest.fn().mockResolvedValue(undefined)
//     }

//     async rejectTerm(): Promise<any> {
//         throw new Error("Method not implemented.");
//     }
// }

describe('UseTermsController', () => {
  let restaurantController: RestaurantController
  const restaurantService = mock<AbstractRestaurantService>()
  const dataRestaurant = mock<RestaurantDto>()
  const query = mock<any>()

  beforeEach(async () => {
    jest.clearAllMocks()

    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [RestaurantController], // Add
      providers: [
        {
          provide: AbstractRestaurantService,
          useValue: restaurantService
        }
      ] // Add
    }).compile()

    restaurantController = moduleRef.get<RestaurantController>(RestaurantController)
  })

  it('should be defined', () => {
    expect(restaurantController).toBeDefined()
  })

  describe('store', () => {
    it('should execute accept term flow with options parameters correctly', async () => {
      const result = await restaurantController.store(dataRestaurant)
      // expect(useTermsService.acceptTerm).toHaveBeenCalledTimes(1)
      // expect(useTermsService.acceptTerm).toHaveBeenCalledWith(dataRestaurant)
    })

    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'acceptTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.acceptTerm(dataRestaurant)).rejects.toThrow()
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
