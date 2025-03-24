// https://www.sanity.io/docs/structure-builder-cheat-sheet
export default (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Projects")
        .schemaType("event")
        .child(S.documentTypeList("project").title("Projects")),
    ]);
