import React, { useState } from "react";
import { DialogFooter } from "office-ui-fabric-react/lib/Dialog";
import { PrimaryButton } from "office-ui-fabric-react";
import {
  TextField,
  MaskedTextField
} from "office-ui-fabric-react/lib/TextField";

const EditForm = props => {
  const [data, setData] = useState({
    id: props.id,
    name: props.name,
    post: props.post,
    phone: props.phone,
    email: props.email,
    cabinet: props.cabinet
  });

  const { name, post, phone, email, cabinet } = data;
  const handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setData({
      ...data,
      [name]: value
    });
  };

  const onSubmit = e => {
    const newData = {
      ...data
    };
    props.editUser(newData);
    alert("Данные успешно изменены");
    props.setDialog(true);
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="name"
        value={name}
        label="Fullname"
        onChange={handleInputChange}
        required
      />
      <TextField
        name="post"
        value={post}
        label="Post"
        onChange={handleInputChange}
        required
      />
      <TextField
        name="email"
        value={email}
        label="Email"
        type="email"
        onChange={handleInputChange}
        required
      />
      <MaskedTextField
        name="phone"
        value={phone}
        label="Phone"
        mask="(999) 999 - 9999"
        onChange={handleInputChange}
      />
      <TextField
        name="cabinet"
        value={cabinet}
        label="Cabinet"
        onChange={handleInputChange}
      />
      <DialogFooter>
        <PrimaryButton type="submit" text="Save" />
      </DialogFooter>
    </form>
  );
};

export default EditForm;
