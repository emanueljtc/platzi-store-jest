/* eslint-disable arrow-parens */
import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Llamar a una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    return getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });
  });
});
