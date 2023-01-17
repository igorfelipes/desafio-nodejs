export interface IFind {
  findAll(data: any): Promise<any>
  findOne(data: any): Promise<any>
  find(data: any): Promise<any>
}
