import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AboutUsPageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AboutUsPages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="goals" source="goals" />
        <TextField label="ID" source="id" />
        <TextField label="mission" source="mission" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vision" source="vision" />
      </Datagrid>
    </List>
  );
};
