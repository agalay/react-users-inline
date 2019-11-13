import React from "react";
import { Field, reduxForm } from "redux-form";
import { DialogFooter } from "office-ui-fabric-react/lib/Dialog";
import { PrimaryButton } from "office-ui-fabric-react";
import {
  TextField,
  MaskedTextField
} from "office-ui-fabric-react/lib/TextField";

let EditFormRedux = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={field => (
          <TextField label="Fullname" {...field.input} required />
        )}
        type="text"
      />
      <Field
        name="post"
        component={field => (
          <TextField label="Post" {...field.input} required />
        )}
        type="text"
      />
      <Field
        name="email"
        component={field => (
          <TextField label="Email" type="email" {...field.input} required />
        )}
        type="email"
      />
      <Field
        name="phone"
        component={field => (
          <MaskedTextField
            label="Phone"
            mask="(999) 999 - 9999"
            {...field.input}
          />
        )}
        type="text"
      />
      <Field
        name="cabinet"
        component={field => <TextField label="Standard" {...field.input} />}
        type="text"
      />
      <DialogFooter>
        <PrimaryButton type="submit" text="Save" />
      </DialogFooter>
    </form>
  );
};

EditFormRedux = reduxForm({
  form: "edit"
})(EditFormRedux);

const EditForm = props => {
  const onSubmit = formData => {
    console.log(formData);
  };
  return <EditFormRedux onSubmit={onSubmit} />;
};

export default EditForm;
