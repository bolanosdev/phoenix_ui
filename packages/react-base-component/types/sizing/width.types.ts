import { NumericType, DecimalType, PercentageType} from '../attributes/attribute.types'
type WidthType = 'auto'|'px'|'screen'|'full'|'min'|'max'|'fit';

export type WidthPropertyType = NumericType | DecimalType | PercentageType | WidthType;
export type WidthMinPropertyType = 'min-h-0'|'min-h-full'|'min-h-screen'|'min-h-min'|'min-h-max'|'min-h-fit';
export type WidthMaxPropertyType = NumericType | DecimalType | WidthType;
export type AllWidths = { value?: WidthPropertyType, min?: WidthMinPropertyType, max?: WidthMaxPropertyType };