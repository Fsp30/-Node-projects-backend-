import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from '../core/comment/entities/comment.entity';
import { CommentRepository } from '../core/comment/repository/comment.repository';


@Module({
    imports: [TypeOrmModule.forFeature([Comments])],
    providers: [CommentRepository],
    exports: [CommentRepository]
})
export class CommentModule {}
