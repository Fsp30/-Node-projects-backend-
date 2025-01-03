import { Request, Response, NextFunction } from "express";
import { authMiddleware } from "../../src/middlewares/authMiddleawares"
import { generateToken } from "../../src/utils/jwtUtils"

describe("Auth Middleware", () => {
  it("Deve retornar erro se o token não for fornecido", () => {
    const req = {
      headers: {},
    } as Request

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response

    const next = jest.fn()

    authMiddleware(req, res, next)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ error: "Token não provido" })
    expect(next).not.toHaveBeenCalled()
  })

  it("Deve retornar erro para um token inválido", () => {
    const req = {
      headers: { authorization: "Bearer invalidtoken" },
    } as Request

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response

    const next = jest.fn()

    authMiddleware(req, res, next)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ error: "Token inválido ou expirado" })
    expect(next).not.toHaveBeenCalled()
  })

  it("Deve passar o controle para o próximo middleware com um token válido", () => {
    const validToken = generateToken({ id: "123", email: "test@example.com" })
    const req = {
      headers: { authorization: `Bearer ${validToken}` },
    } as Request

    const res = {} as Response

    const next = jest.fn()

    authMiddleware(req, res, next)

    expect(req.user).toMatchObject({ id: "123", email: "test@example.com" })
    expect(next).toHaveBeenCalled()
  })
})
