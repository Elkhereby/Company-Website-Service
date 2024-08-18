import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NewsPageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="datePublished" source="datePublished" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
