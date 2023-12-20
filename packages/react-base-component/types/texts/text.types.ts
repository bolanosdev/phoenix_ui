import type { BaseProperties } from '../../components/base-component/base-component.types';
export type TextSizeType = 'text-xs'|'text-sm'|'text-base'|'text-lg'|'text-xl'|'text-2xl'|'text-3xl'|'text-4xl'|'text-5xl'|'text-6xl';
export type TextDisplayType = 'inline'|'block'|'inline-block';
export type TextWeightType = 'font-light'|'font-normal'|'font-medium'|'font-semibold'|'font-bold';
export type TextOverflowType = 'none'|'truncate';
export type TextAlignmentType = 'text-left'|'text-right'|'text-center'|'text-justify'|'text-start'|'text-end';
export type TextTagType = 'span'|'div'|'p'|'b'|'em'|'s'|'small'|'i'|'mark'|'strong'|'q'|'sub'|'sup';
export type HeadingTagType = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';

export interface TextPropertyTypes extends BaseProperties {    
    weight?: TextWeightType;
    align?: TextAlignmentType;        
    display?: TextDisplayType;
    overflow?: TextOverflowType;   
}