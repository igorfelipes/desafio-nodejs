import { Schedule } from 'src/schedules/types/schedule'

export interface IScheduleService {
  store(data: Schedule): Promise<any>
  index(query?: Schedule): Promise<any>
  show(id: string): Promise<any>
  update(id: string, data: Schedule): Promise<any>
  delete(id: string): Promise<any>
}
