describe('environment.ts', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'production';
    process.env.HOST_NAME = 'localhost';
    process.env.BASE_PATH = '/api/v1';
    process.env.PORT = '8080';
  });

  test('Should return the values from process.env', async () => {
    const environment = require('../../config/environment'); /* eslint @typescript-eslint/no-var-requires: "off" */

    expect(environment.default.NODE_ENV).toEqual(process.env.NODE_ENV);
    expect(environment.default.HOST_NAME).toEqual(process.env.HOST_NAME);
    expect(environment.default.BASE_PATH).toEqual(process.env.BASE_PATH);
    expect(environment.default.PORT).toEqual(parseInt(process.env.PORT || ''));
  });
});
