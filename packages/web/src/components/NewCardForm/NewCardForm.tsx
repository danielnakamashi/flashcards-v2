import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type FormFields = {
  question: string;
  answer: string;
};

type Props = {
  onAdd: (question: string, answer: string) => void;
};

const NewCardForm: React.FC<Props> = ({ onAdd }) => {
  const { handleSubmit, reset, register, errors } = useForm<FormFields>();
  const questionRef = React.useRef<HTMLInputElement>();
  const onSubmit = ({ question, answer }: FormFields) => {
    onAdd(question, answer);
    reset();
    questionRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="new-card-form">
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        <Box flexGrow={1} pr={{ xs: 0, sm: 1 }} width={{ xs: 1, sm: 1 / 2, md: 'auto' }}>
          <TextField
            name="question"
            defaultValue=""
            inputRef={(element: HTMLInputElement) => {
              register(element, { required: 'Provide a Question' });
              questionRef.current = element;
            }}
            helperText={errors.question?.message}
            error={Boolean(errors.question)}
            label="Question"
            InputLabelProps={{
              htmlFor: 'new-card-form-question',
            }}
            InputProps={{
              id: 'new-card-form-question',
            }}
            variant="outlined"
            fullWidth={true}
            autoFocus
          />
        </Box>
        <Box
          flexGrow={1}
          pl={{ xs: 0, sm: 1 }}
          pr={{ md: 1 }}
          width={{ xs: 1, sm: 1 / 2, md: 'auto' }}
        >
          <TextField
            name="answer"
            defaultValue=""
            inputRef={register({ required: 'Provide an Answer' })}
            helperText={errors.answer?.message}
            error={Boolean(errors.answer)}
            label="Answer"
            InputLabelProps={{
              htmlFor: 'new-card-form-answer',
            }}
            InputProps={{
              id: 'new-card-form-answer',
            }}
            variant="outlined"
            fullWidth={true}
          />
        </Box>
        <Box
          flexGrow={0}
          mt={{ xs: 1, md: 0 }}
          pl={{ md: 1 }}
          width={{ xs: 1, md: 'auto' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Button type="submit" variant="contained" size="large">
            Add Card
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export { NewCardForm };
