import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ContactUsPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
