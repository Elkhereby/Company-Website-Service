import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AboutUsPageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="goals" multiline source="goals" />
        <TextInput label="mission" multiline source="mission" />
        <TextInput label="vision" multiline source="vision" />
      </SimpleForm>
    </Create>
  );
};
