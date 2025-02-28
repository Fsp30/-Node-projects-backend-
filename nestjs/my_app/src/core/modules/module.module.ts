import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modules } from '../module/entities/module.entity';
import { ModuleRepository } from '../module/repository/module.repository';

@Module({
    imports:[TypeOrmModule.forFeature([Modules])],
    providers:[ModuleRepository],
    exports:[ModuleRepository]
})
export class ModuleModule {}
