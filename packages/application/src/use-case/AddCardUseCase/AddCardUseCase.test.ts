import { waitFor } from '@testing-library/react';
import { Card } from '@flashcards/core';
import { AddCardUseCase } from './AddCardUseCase';
import { IAddCardService } from '../../service';
import { IAddCardOutput } from '../../output';

describe('AddCardUseCase', () => {
  it('should call presenter with correct arguments', async () => {
    const mockRepository: IAddCardService = {
      addCard: () => Promise.resolve(new Card({ id: '1', question: 'question', answer: 'answer' })),
    };
    const mockPresenter: IAddCardOutput = {
      addCard: jest.fn(),
    };
    const addCardUseCase = new AddCardUseCase(mockRepository, mockPresenter);

    await addCardUseCase.addCard({ question: 'question', answer: 'answer' }, '1', '123');

    await waitFor(() =>
      expect(mockPresenter.addCard).toBeCalledWith({
        id: '1',
        question: 'question',
        answer: 'answer',
      }),
    );
  });
});
