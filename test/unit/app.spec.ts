import {App} from '../../src/app';
import {WebAPI} from '../../src/web-api';

describe('the app', () => {
  const mockWebApi = jest.fn<WebAPI>(() => ({
    isRequesting: jest.fn() 
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('says hello', () => {
    expect(new App(mockWebApi()).api).toEqual(mockWebApi);
  });
});
