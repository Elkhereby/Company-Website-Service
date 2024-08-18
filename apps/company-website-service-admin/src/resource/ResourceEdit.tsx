import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="link" source="link" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
