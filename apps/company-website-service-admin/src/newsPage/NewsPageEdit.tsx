import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NewsPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="datePublished" source="datePublished" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
