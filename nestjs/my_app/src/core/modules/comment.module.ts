import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from '../comment/entities/comment.entity';
import { CommentRepository } from '../comment/repository/comment.repository';


@Module({
    imports: [TypeOrmModule.forFeature([Comments])],
    providers: [CommentRepository],
    exports: [CommentRepository]
})
export class CommentModule {}
