import { CommonModule } from 'src/common/common.module'
import { Module } from '@nestjs/common'

import { RestaurantsModule } from './restaurants/restaurants.module'
import { SchedulesModule } from './schedules/schedules.module'

@Module({
  imports: [
    CommonModule.register({
      configModule: {
        ignoreEnvFile: ['production', 'staging'].includes(process.env.NODE_ENV),
        envFilePath: '.env',
        expandVariables: ['development', 'test'].includes(process.env.NODE_ENV),
        cache: ['production', 'staging'].includes(process.env.NODE_ENV),
        isGlobal: true
      }
    }),
    RestaurantsModule,
    SchedulesModule
  ],
  controllers: [],
  providers: []
})
export class MainModule {}
