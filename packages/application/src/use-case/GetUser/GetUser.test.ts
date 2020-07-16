import { waitFor } from '@testing-library/react';
import { IGetUser } from '../../service';
import { ISetUser } from '../../output';
import { GetUser } from './GetUser';
import { userMock } from '../../mocks';

describe('GetUser', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: IGetUser = {
      getUser: () => Promise.resolve(userMock),
    };
    const presenter: ISetUser = {
      setUser: jest.fn(),
    };
    const getUserUseCase = new GetUser(authentication, presenter);

    await getUserUseCase.getCurrentUser();

    await waitFor(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
