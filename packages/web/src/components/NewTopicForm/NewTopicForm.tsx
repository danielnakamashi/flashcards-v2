import React from 'react';
import { Formik, Form, Field, FieldInputProps } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useStyles } from './NewTopicForm.style';

interface NewTopicFormProps {
  onTopicAdded: (topicFields: FormFields) => void;
}

type FormFields = {
  name: string;
};

const formikConfig = {
  initialValues: {
    name: '',
  },
  validate: (values: FormFields) =>
    Object.entries(values).reduce<Partial<FormFields>>((acc, [fieldKey, fieldValue]) => {
      switch (fieldKey) {
        case 'name':
          return fieldValue.length === 0 ? { ...acc, [fieldKey]: 'Name is required' } : acc;
        default:
          return acc;
      }
    }, {}),
};

const NewTopicForm: React.FC<NewTopicFormProps> = ({ onTopicAdded }) => {
  const classes = useStyles();

  return (
    <Formik {...formikConfig} onSubmit={values => onTopicAdded(values)}>
      <Form data-testid="new-topic-form">
        <Field name="name">
          {({ field: { name, value, onChange } }: { field: FieldInputProps<string> }) => (
            <FormControl fullWidth={true} variant="outlined">
              <InputLabel htmlFor={name}>New Topic</InputLabel>
              <OutlinedInput
                labelWidth={76}
                required={true}
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                endAdornment={
                  <Button
                    className={classes.addTopicButton}
                    variant="contained"
                    type="submit"
                    data-testid="submit-button"
                  >
                    Add topic
                  </Button>
                }
              />
            </FormControl>
          )}
        </Field>
      </Form>
    </Formik>
  );
};

export default NewTopicForm;
