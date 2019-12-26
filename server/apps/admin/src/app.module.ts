import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    MulterModule.register({
      storage: MAO({
        config: {
            region: 'oss-cn-hangzhou',
            accessKeyId: 'LTAI4FiDj9ebwWgZpHKV1Bhi',
            accessKeySecret: 'VKcj8AaCfJ5HazjBsYHYsskAcPH2jH',
            bucket: 'topfullstackysz',
        },
      }),
      // dest: 'uploads',
    }),
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
