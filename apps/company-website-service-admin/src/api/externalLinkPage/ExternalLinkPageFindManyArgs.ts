import { ExternalLinkPageWhereInput } from "./ExternalLinkPageWhereInput";
import { ExternalLinkPageOrderByInput } from "./ExternalLinkPageOrderByInput";

export type ExternalLinkPageFindManyArgs = {
  where?: ExternalLinkPageWhereInput;
  orderBy?: Array<ExternalLinkPageOrderByInput>;
  skip?: number;
  take?: number;
};
