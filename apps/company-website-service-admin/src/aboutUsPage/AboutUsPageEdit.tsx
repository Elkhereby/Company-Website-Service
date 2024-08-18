import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AboutUsPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="goals" multiline source="goals" />
        <TextInput label="mission" multiline source="mission" />
        <TextInput label="vision" multiline source="vision" />
      </SimpleForm>
    </Edit>
  );
};
