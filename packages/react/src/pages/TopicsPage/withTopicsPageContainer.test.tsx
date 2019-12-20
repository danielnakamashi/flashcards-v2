import React from 'react';
import { render, wait } from '@testing-library/react';
import { withTopicsPageContainer } from './withTopicsPageContainer';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../contexts/AppContext', () => ({
  useInstances: () => ({
    userController: {
      getUser: () => {},
    },
    topicController: {
      showTopics: () => {},
    },
    userPresenter: {
      useUser: () => ({
        displayName: 'User Name',
        email: 'email@example.com',
        photoURL: 'https://via.placeholder.com/150',
        uid: '123',
      }),
    },
    topicsPresenter: {
      useTopics: () => [
        { id: '1', name: 'Topic 1' },
        { id: '2', name: 'Topic 2' },
      ],
    },
  }),
}));
// jest.mock('effector-react', () => ({
//   useStore: (storeName: string) => {
//     switch (storeName) {
//       case 'userStore':
//         return {
//           displayName: 'User Name',
//           email: 'email@example.com',
//           photoURL: 'https://via.placeholder.com/150',
//           uid: '123',
//         };
//       case 'topicsStore':
//         return [
//           { id: '1', name: 'Topic 1' },
//           { id: '2', name: 'Topic 2' },
//         ];
//       default:
//         return null;
//     }
//   },
// }));

describe('withTopicsPageContainer', () => {
  it('should pass correct props to component', async () => {
    const mockComponent = jest.fn(() => null);
    const Component = withTopicsPageContainer(mockComponent);
    render(<Component />);

    await wait(() => expect(mockComponent).toBeCalled());
    await wait(() =>
      expect(mockComponent).toBeCalledWith(
        expect.objectContaining({
          topics: [
            { id: '1', name: 'Topic 1' },
            { id: '2', name: 'Topic 2' },
          ],
        }),
        expect.anything(),
      ),
    );
  });
});
