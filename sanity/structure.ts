// import type {StructureResolver} from 'sanity/structure'

// // https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = S =>
//   S.list()
//     .title('Blog')
//     .items([
//       S.documentTypeListItem('post').title('Posts'),
//       S.documentTypeListItem('category').title('Categories'),
//       S.documentTypeListItem('author').title('Authors'),
//       S.divider(),
//       ...S.documentTypeListItems().filter(item => item.getId() && !['post', 'category', 'author'].includes(item.getId()!))
//     ]),

import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      // Sezione "Blog"
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([S.documentTypeListItem('post').title('Posts'), S.documentTypeListItem('category').title('Categories'), S.documentTypeListItem('author').title('Authors'), S.divider(), ...S.documentTypeListItems().filter(item => item.getId() && !['post', 'category', 'author'].includes(item.getId()!))]),
        ),

      // Sezione "Pages"
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentTypeListItem('page').title('Pages'), // Gestione dei documenti "page"
            ]),
        ),

      // Sezione "Components"
      S.listItem()
        .title('Components')
        .child(
          S.list()
            .title('Components')
            .items([
              S.documentTypeListItem('hero').title('Hero'), // Gestione dei documenti "page"
            ]),
        ),

      // Aggiungi un separatore, se necessario
      S.divider(),

      // Aggiungi qui qualsiasi altro documento, se necessario
      ...S.documentTypeListItems().filter(item => item.getId() && !['post', 'category', 'author', 'page', 'component'].includes(item.getId()!)),
    ])
