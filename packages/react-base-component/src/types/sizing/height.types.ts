import { NumericType, DecimalType, PercentageType} from '../attributes/attribute.types'

// eslint-disable-next-line 
type HeightType = 'auto'|'px'|'screen'|'full'|'min'|'max'|'fit';

export type HeightPropertyType = NumericType | DecimalType | PercentageType | HeightType;
export type HeightMinPropertyType = 'min-h-0'|'min-h-full'|'min-h-screen'|'min-h-min'|'min-h-max'|'min-h-fit';
export type HeightMaxPropertyType = NumericType | DecimalType | HeightType;
export type AllHeights = { value?: HeightPropertyType, min?: HeightMinPropertyType, max?: HeightMaxPropertyType };
