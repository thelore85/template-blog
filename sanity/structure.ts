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
            .items([S.documentTypeListItem('post').title('Posts'), S.documentTypeListItem('category').title('Categories'), S.documentTypeListItem('author').title('Authors')]),
        ),

      // // Sezione "Pages"
      // S.listItem()
      //   .title('Pages')
      //   .child(
      //     S.list()
      //       .title('Pages')
      //       .items([
      //         S.documentTypeListItem('page').title('Pages'), // Gestione dei documenti "page"
      //       ]),
      //   ),

      // Sezione "Pages"
      S.listItem().title('Pages').child(S.documentTypeList('page').title('Pages')),

      // Sezione "Components"
      S.listItem()
        .title('Components')
        .child(
          S.list()
            .title('Components')
            .items([S.documentTypeListItem('hero').title('Hero'), S.documentTypeListItem('service').title('service'), S.documentTypeListItem('burger').title('burger')]),
        ),
    ])
