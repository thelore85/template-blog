import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {pageType} from './pageType'
import {heroType} from './heroType'
import {serviceType} from './serviceType'
import {burgerMenuType} from './burgerMenuType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, postType, authorType, pageType, heroType, serviceType, burgerMenuType],
}
