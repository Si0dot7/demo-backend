import { Module } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperienceController } from './work-experience.controller';

@Module({
  providers: [WorkExperienceService],
  controllers: [WorkExperienceController]
})
export class WorkExperienceModule {}
