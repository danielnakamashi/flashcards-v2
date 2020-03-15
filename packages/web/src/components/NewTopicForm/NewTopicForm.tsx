import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useStyles } from './NewTopicForm.style';

type FormFields = {
  name: string;
};

interface NewTopicFormProps {
  onTopicAdded: (topicFields: FormFields) => Promise<void>;
}

const NewTopicForm: React.FC<NewTopicFormProps> = ({ onTopicAdded }) => {
  const classes = useStyles();
  const { handleSubmit, reset, control, formState, register } = useForm<FormFields>();
  const onSubmit = async (values: FormFields) => {
    await onTopicAdded(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="new-topic-form">
      <FormControl fullWidth={true} variant="outlined">
        <InputLabel htmlFor="name">New Topic</InputLabel>
        <Controller
          as={
            <OutlinedInput
              labelWidth={76}
              required={true}
              type="text"
              id="name"
              inputRef={register({ required: true })}
              endAdornment={
                <Button
                  className={classes.addTopicButton}
                  variant="contained"
                  type="submit"
                  data-testid="submit-button"
                  disabled={formState.isSubmitting}
                >
                  Add topic
                </Button>
              }
            />
          }
          name="name"
          control={control}
        />
      </FormControl>
    </form>
  );
};

export default NewTopicForm;
