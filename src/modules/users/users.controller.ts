import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { User } from "./entities/user.entity";

@ApiTags("Users")
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		const response = await this.usersService.create(createUserDto);
		return response;
	}

	@Get()
	findAllAndCount(): Promise<[User[], number]> {
		return this.usersService.findAllAndCount();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.usersService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(+id, updateUserDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.usersService.remove(+id);
	}
}
