import { DecimalType, PercentageType} from '../attributes/attribute.types'
export type FlexDirectionType = 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse';
export type FlexWrapType = 'flex-wrap'|'flex-nowrap'|'flex-wrap-reverse';
export type FlexShrinkType = 'shrink'|'shrink-0	';
export type FlexGrowType = 'grow'|'grow-0';
export type FlexBasisType = 'px'|'auto'|'full';

export type FlexJustifyContentType = 'justify-normal'|'justify-start'| 'justify-end'| 'justify-center'| 'justify-between'| 'justify-around'| 'justify-evenly'|'justify-stretch';
export type FlexAlignItemsType = 'items-stretch'|'items-center'|'items-start'|'items-end'|'items-baseline';

export type FlexType = {    
    direction?: FlexDirectionType,    
    wrap?: FlexWrapType,
    alignItems?: FlexAlignItemsType,
    justifyContent?: FlexJustifyContentType,
    grow?: FlexGrowType,
    shrink?: FlexShrinkType,
    basis?: number | DecimalType | PercentageType | FlexBasisType
  }
  