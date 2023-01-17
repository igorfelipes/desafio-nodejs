import { appConfig } from 'src/common/configs'
import { CommonModuleOptions } from 'src/common/interfaces'
import { AppConfigService } from 'src/common/services/app-config.service'

import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({})
export class CommonModule {
  static register(options: CommonModuleOptions): DynamicModule {
    return {
      module: CommonModule,
      imports: [ConfigModule.forRoot({ ...options.configModule }), ConfigModule.forFeature(appConfig())],
      providers: [AppConfigService],
      controllers: [],
      exports: [AppConfigService]
    }
  }
}
