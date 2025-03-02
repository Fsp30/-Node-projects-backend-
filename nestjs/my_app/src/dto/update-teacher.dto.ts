import { CreateTeacherDto } from "./create-teacher.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateTeacherDto extends PartialType(CreateTeacherDto){}