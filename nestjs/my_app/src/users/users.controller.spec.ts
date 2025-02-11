import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create a user', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };

    const response = await request(app.getHttpServer())
      .post('/users')
      .send(newUser)
      .expect(201);

    expect(response.body).toMatchObject(newUser);
  });

  it('should return a list of users', async () => {
    const response = await request(app.getHttpServer())
      .get('/users')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return a single user by ID', async () => {
    const response = await request(app.getHttpServer())
      .get('/users/1')
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
  });

  it('should update a user', async () => {
    const updateData = { name: 'Updated Name' };

    const response = await request(app.getHttpServer())
      .put('/users/1')
      .send(updateData)
      .expect(200);

    expect(response.body).toMatchObject(updateData);
  });

  it('should return 404 if user not found when updating', async () => {
    const updateData = { name: 'Not Found' };

    await request(app.getHttpServer())
      .put('/users/999')
      .send(updateData)
      .expect(404);
  });

  it('should delete a user', async () => {
    await request(app.getHttpServer())
      .delete('/users/1')
      .expect(200);
  });

  it('should return 404 if user not found when deleting', async () => {
    await request(app.getHttpServer())
      .delete('/users/999')
      .expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
