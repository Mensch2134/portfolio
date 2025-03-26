import { CaseIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.listItem()
        .title("Projects")
        .icon(CaseIcon)
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),
    ]);

