import * as authService from "../../src/services/authService"
import {prisma} from "../../src/imports/prismaClient"

jest.mock("../../src/imports/prismaClient", () => ({
  user: {
    create: jest.fn(),
    findUnique: jest.fn(),
  },
}))

describe("Auth Service", () => {
  it("Deve registrar um novo usuário", async () => {
    const mockUser = { id: "1", email: "test@example.com" };
    (prisma.user.create as jest.Mock).mockResolvedValue(mockUser)

    const user = await authService.registerUser("test@example.com", "password123")

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: { email: "test@example.com", password: expect.any(String) },
    });
    expect(user).toMatchObject({ id: "1", email: "test@example.com" })
  })

  it("Deve autenticar um usuário válido", async () => {
    const mockUser = {
      id: "1",
      email: "test@example.com",
      password: "$2a$10$hashedPassword",
    };
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser)

    const token = await authService.loginUser("test@example.com", "password123")

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: "test@example.com" },
    })
    expect(token).toBeDefined();
  })

  it("Deve retornar null para um login inválido", async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null)

    const token = await authService.loginUser("invalid@example.com", "password123")

    expect(token).toBeNull()
  })
})
