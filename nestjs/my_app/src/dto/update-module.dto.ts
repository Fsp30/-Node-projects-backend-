import { PartialType } from "@nestjs/mapped-types";
import { CreateModuleDto } from "./create-modulo.dto";

export class UpdateModuleDto extends PartialType(CreateModuleDto){}