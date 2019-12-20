import React from 'react';
import { Formik, Form, Field, FieldInputProps } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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
  return (
    <Formik {...formikConfig} onSubmit={values => onTopicAdded(values)}>
      <Form data-testid="new-topic-form">
        <Field name="name">
          {({ field }: { field: FieldInputProps<string> }) => (
            <>
              <InputLabel htmlFor={field.name}>Topic Name</InputLabel>
              <Input type="text" id={field.name} {...field} />
            </>
          )}
        </Field>
        <Button type="submit" data-testid="submit-button">
          Add topic
        </Button>
      </Form>
    </Formik>
  );
};

export default NewTopicForm;