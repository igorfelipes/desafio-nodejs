export interface IPersist {
  save(data: any): Promise<any>
  update(id: string, data: any): Promise<any>
  delete(id: string): Promise<any>
}
