import { Test } from '@nestjs/testing';
import { FactoryDto } from '@app/term-of-use/services/factory-dto.service';
import { mock } from 'jest-mock-extended';
import { TermOfUseDto } from '../interfaces/dtos/term-of-use.dto';
import { AcceptTerm } from '../types/accept-term.';
import { v4 as uuidv4 } from 'uuid'

jest.mock('uuid', () => {
    const original = jest.requireActual('uuid')

    return {
      ...original,
      v4: jest.fn()
    }
})


describe('FactoryDto', () => {
    let factoryDto: FactoryDto;
    let dataAcceptTerm = mock<AcceptTerm>()
    // let termOfUseDtoResponse = mock<TermOfUseDto>({
    //     accepted: true,
    //     id: 'stringUuid'
    // })


    beforeEach(async () => {
        jest.clearAllMocks()
        // factoryDto = new FactoryDto()
        const moduleRef = await Test.createTestingModule({
            imports: [], 
            controllers: [], 
            providers: [
                FactoryDto,
            ], 
        }).compile();

        factoryDto = moduleRef.get<FactoryDto>(FactoryDto);
    });

    it('should be defined', () => {
        expect(factoryDto).toBeDefined();
    });

    describe('createTermOfUseDto', () => {
        it('should execute get term service flow with options parameters correctly', () => {
            const result = factoryDto.createTermOfUseDto(dataAcceptTerm)
            expect(result).toEqual(expect.any(TermOfUseDto))
        })

    });
    describe('createDto', () => {
        it('should execute get term service flow with options parameters correctly', () => {
            factoryDto.createTermOfUseDto = jest.fn().mockReturnValue({ accepted: true, id: 'stringUuid'})
            const result = factoryDto.createDto('termOfUseDto', dataAcceptTerm)
            expect(result).toEqual({ accepted: true, id: 'stringUuid'})
        })

    });
});
