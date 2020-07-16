import React from 'react';
import { useForm, Controller } from 'react-hook-form';
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
  const { handleSubmit, reset, control, register } = useForm<FormFields>();
  const onSubmit = ({ question, answer }: FormFields) => {
    onAdd(question, answer);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="new-card-form">
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        <Box flexGrow={1} pr={{ xs: 0, sm: 1 }} width={{ xs: 1, sm: 1 / 2, md: 'auto' }}>
          <Controller
            as={TextField}
            name="question"
            control={control}
            defaultValue=""
            inputRef={register({ required: true })}
            label="Question"
            InputLabelProps={{
              htmlFor: 'new-card-form-question',
            }}
            InputProps={{
              id: 'new-card-form-question',
            }}
            required={true}
            variant="outlined"
            fullWidth={true}
            margin="dense"
          />
        </Box>
        <Box
          flexGrow={1}
          pl={{ xs: 0, sm: 1 }}
          pr={{ md: 1 }}
          width={{ xs: 1, sm: 1 / 2, md: 'auto' }}
        >
          <Controller
            as={TextField}
            name="answer"
            control={control}
            defaultValue=""
            inputRef={register({ required: true })}
            label="Answer"
            InputLabelProps={{
              htmlFor: 'new-card-form-answer',
            }}
            InputProps={{
              id: 'new-card-form-answer',
            }}
            required={true}
            variant="outlined"
            fullWidth={true}
            margin="dense"
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
          <Button type="submit" variant="contained">
            Add Card
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export { NewCardForm };
