import { Test } from '@nestjs/testing'
import { mock } from 'jest-mock-extended'
import { StorageLocalRepository } from './storage-local.repository'
import { IRestaurant } from '../../interfaces/restaurant.interface'

describe('StorageLocalRepository', () => {
  let storageLocalRepository: StorageLocalRepository
  const dataTerm = mock<IRestaurant>()

  beforeEach(async () => {
    jest.clearAllMocks()
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [StorageLocalRepository]
    }).compile()

    storageLocalRepository = moduleRef.get<StorageLocalRepository>(StorageLocalRepository)
  })

  it('should be defined', () => {
    expect(storageLocalRepository).toBeDefined()
  })

  describe('save', () => {
    it('should execute accept term service flow with options parameters correctly', async () => {
      const result = await storageLocalRepository.save(dataTerm)
      // expect(termOfUseRepository.save).toHaveBeenCalledTimes(1)
      // expect(termOfUseRepository.save).toHaveBeenCalledWith(dataAcceptTerm)
    })
    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'getTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.getTermOfUse(query)).rejects.toThrow()
    })
  })
  describe('update', () => {
    it('should execute accept term service flow with options parameters correctly', async () => {
      const result = await storageLocalRepository.update(dataTerm.id, dataTerm)
      // expect(termOfUseRepository.save).toHaveBeenCalledTimes(1)
      // expect(termOfUseRepository.save).toHaveBeenCalledWith(dataAcceptTerm)
    })
    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'getTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.getTermOfUse(query)).rejects.toThrow()
    })
  })
  describe('delete', () => {
    it('should execute accept term service flow with options parameters correctly', async () => {
      const result = await storageLocalRepository.delete(dataTerm.id)
      // expect(termOfUseRepository.save).toHaveBeenCalledTimes(1)
      // expect(termOfUseRepository.save).toHaveBeenCalledWith(dataAcceptTerm)
    })
    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'getTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.getTermOfUse(query)).rejects.toThrow()
    })
  })
  describe('find', () => {
    it('should execute accept term service flow with options parameters correctly', async () => {
      const result = await storageLocalRepository.find(dataTerm.id)
      // expect(termOfUseRepository.save).toHaveBeenCalledTimes(1)
      // expect(termOfUseRepository.save).toHaveBeenCalledWith(dataAcceptTerm)
    })
    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'getTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.getTermOfUse(query)).rejects.toThrow()
    })
  })
  describe('findOne', () => {
    it('should execute accept term service flow with options parameters correctly', async () => {
      const result = await storageLocalRepository.findOne(dataTerm)
      // expect(termOfUseRepository.save).toHaveBeenCalledTimes(1)
      // expect(termOfUseRepository.save).toHaveBeenCalledWith(dataAcceptTerm)
    })
    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'getTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.getTermOfUse(query)).rejects.toThrow()
    })
  })
  describe('findAll', () => {
    it('should execute accept term service flow with options parameters correctly', async () => {
      const result = await storageLocalRepository.findAll(dataTerm)
      // expect(termOfUseRepository.save).toHaveBeenCalledTimes(1)
      // expect(termOfUseRepository.save).toHaveBeenCalledWith(dataAcceptTerm)
    })
    it('should throw a error if service trhows', async () => {
      // jest.spyOn(useTermsService, 'getTerm').mockRejectedValueOnce(new Error())
      // await expect(termOfUseController.getTermOfUse(query)).rejects.toThrow()
    })
  })
})
