import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {pageType} from './pageType'
import {heroType} from './heroType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, postType, authorType, pageType, heroType],
}
