import { Restaurant } from '../types/restaurant'

export interface IRestaurantService {
  store(data: Restaurant): Promise<any>
  index(query?: Restaurant): Promise<any>
  show(id: string): Promise<any>
  update(id: string, data: Restaurant): Promise<any>
  delete(id: string): Promise<any>
}
