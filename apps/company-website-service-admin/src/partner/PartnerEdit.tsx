import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PartnerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="logoUrl" source="logoUrl" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
