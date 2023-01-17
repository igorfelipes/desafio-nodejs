export interface IRestaurant {
  id: string
  name: string
  documento: string
  type: RestaurantTypeEnum
}

export enum RestaurantTypeEnum {
  LANCHONETE = 'LANCHONETE',
  SORVETERIA = 'SORVETERIA',
  ITALIANO = 'ITALIANO'
}
