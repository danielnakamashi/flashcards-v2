import { waitFor } from '@testing-library/react';
import { IGetUserService } from '../../service';
import { ISetUserOutput } from '../../output';
import { userMock } from '../../mocks';
import { GetUser } from './GetUserUseCase';

describe('GetUserUseCase', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication: IGetUserService = {
      getUser: () => Promise.resolve(userMock),
    };
    const presenter: ISetUserOutput = {
      setUser: jest.fn(),
    };
    const getUserUseCase = new GetUser(authentication, presenter);

    await getUserUseCase.getCurrentUser();

    await waitFor(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
