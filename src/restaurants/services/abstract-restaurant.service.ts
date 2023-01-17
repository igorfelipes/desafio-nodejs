import { IRestaurantService } from '../interfaces/restaurant-service.interface'
import { IRestaurant } from '../../restaurants/interfaces/restaurant.interface'

export abstract class AbstractRestaurantService implements IRestaurantService {
  abstract store(data: Partial<IRestaurant>): Promise<any>
  abstract index(query?: Partial<IRestaurant>): Promise<any>
  abstract show(id: string): Promise<any>
  abstract update(id: string, data: Partial<IRestaurant>): Promise<any>
  abstract delete(id: string): Promise<any>
}
