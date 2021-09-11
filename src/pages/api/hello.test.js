import { createMocks } from 'node-mocks-http';
import helloAPI from './hello';

describe('api/helloAPI route', () => {
  it('returns a name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        animal: 'dog',
      },
    });

    await helloAPI(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      name: 'John Doe',
    });
  });
});
