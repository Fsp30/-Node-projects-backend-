import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'

describe('UsersService', () => {
  let service: UsersService
  let repository: Repository<User>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
    repository = module.get<Repository<User>>(getRepositoryToken(User))
  })

  it('deve ser definido', () => {
    expect(service).toBeDefined()
  })

  it('criando usuário', async () => {
    const user = { id: 1, name: 'John Doe', email: 'john@example.com' }
    jest.spyOn(repository, 'create').mockReturnValue(user)
    jest.spyOn(repository, 'save').mockResolvedValue(user)

    expect(await service.createUser(user.name, user.email)).toEqual(user)
  })
})
