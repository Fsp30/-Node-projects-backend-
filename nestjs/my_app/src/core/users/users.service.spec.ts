import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should create a new user', async () => {
    const createUserDto: CreateUserDto = { name: 'John Doe', email: 'john@example.com' };
    const savedUser = { id: 1, ...createUserDto };

    jest.spyOn(repository, 'create').mockReturnValue(savedUser as User);
    jest.spyOn(repository, 'save').mockResolvedValue(savedUser as User);

    const result = await service.createUser(createUserDto);

    expect(result).toEqual(savedUser);
    expect(repository.create).toHaveBeenCalledWith(createUserDto);
    expect(repository.save).toHaveBeenCalledWith(savedUser);
  });

  it('should update a user successfully', async () => {
    const userId = 1;
    const existingUser = { id: userId, name: 'John Doe', email: 'john@example.com' };
    const updateData: UpdateUserDto = { name: 'John Updated' };

    jest.spyOn(repository, 'findOne').mockResolvedValue(existingUser as User);
    jest.spyOn(repository, 'save').mockResolvedValue({ ...existingUser, ...updateData } as User);

    const result = await service.updateUser(userId, updateData);

    expect(result).toEqual({ id: userId, name: 'John Updated', email: 'john@example.com' });
    expect(repository.findOne).toHaveBeenCalledWith({ where: { id: userId } });
    expect(repository.save).toHaveBeenCalledWith({ ...existingUser, ...updateData });
  });

  it('should throw NotFoundException if user does not exist when updating', async () => {
    const userId = 999;
    const updateData: UpdateUserDto = { name: 'Not Found' };

    jest.spyOn(repository, 'findOne').mockResolvedValue(null);

    await expect(service.updateUser(userId, updateData)).rejects.toThrow(NotFoundException);
    expect(repository.findOne).toHaveBeenCalledWith({ where: { id: userId } });
  });

  it('should delete a user successfully', async () => {
    const userId = 1;
    const existingUser = { id: userId, name: 'John Doe', email: 'john@example.com' };

    jest.spyOn(repository, 'findOne').mockResolvedValue(existingUser as User);
    jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);

    const result = await service.deleteUser(userId);

    expect(result).toBe(true);
    expect(repository.delete).toHaveBeenCalledWith({ id: userId });
  });

  it('should throw NotFoundException if user does not exist when deleting', async () => {
    const userId = 999;

    jest.spyOn(repository, 'findOne').mockResolvedValue(null);

    await expect(service.deleteUser(userId)).rejects.toThrow(NotFoundException);
    expect(repository.findOne).toHaveBeenCalledWith({ where: { id: userId } });
  });
});
