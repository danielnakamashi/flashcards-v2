import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './NewTopicForm.style';

type FormFields = {
  name: string;
};

type NewTopicFormProps = {
  onTopicAdded: (topicFields: FormFields) => Promise<void>;
};

const NewTopicForm: React.FC<NewTopicFormProps> = ({ onTopicAdded }) => {
  const classes = useStyles();
  const { handleSubmit, reset, formState, register, errors } = useForm<FormFields>();
  const onSubmit = async (values: FormFields) => {
    await onTopicAdded(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="new-topic-form">
      <TextField
        name="name"
        inputRef={register({ required: 'Provide a topic name' })}
        label="New Topic"
        variant="outlined"
        fullWidth
        defaultValue=""
        type="text"
        disabled={formState.isSubmitting}
        helperText={errors.name?.message}
        error={Boolean(errors.name)}
        InputLabelProps={{
          htmlFor: 'name',
        }}
        InputProps={{
          inputProps: {
            id: 'name',
          },
          endAdornment: (
            <Button
              className={classes.addTopicButton}
              variant="contained"
              type="submit"
              data-testid="submit-button"
              disabled={formState.isSubmitting}
            >
              Add topic
            </Button>
          ),
        }}
      />
    </form>
  );
};

export default NewTopicForm;
