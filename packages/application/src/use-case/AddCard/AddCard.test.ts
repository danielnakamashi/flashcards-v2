import { waitFor } from '@testing-library/react';
import { Card } from '@flashcards/core';
import { AddCard } from './AddCard';
import { IAddCard as IAddCardRepository } from '../../service';
import { IAddCard as IAddCardOutput } from '../../output';

describe('AddCard', () => {
  it('should call presenter with correct arguments', async () => {
    const mockRepository: IAddCardRepository = {
      addCard: () => Promise.resolve(new Card({ id: '1', question: 'question', answer: 'answer' })),
    };
    const mockPresenter: IAddCardOutput = {
      addCard: jest.fn(),
    };
    const addCardUseCase = new AddCard(mockRepository, mockPresenter);

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
