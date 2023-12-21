export type AllPaddingType = 'p-0'|'p-1'|'p-2'|'p-3'|'p-4'|'p-5'|'p-6'|'p-7'|'m-8';
export type HorizontalPaddingType = 'px-0'|'px-1'|'px-2'|'px-3'|'px-4'|'px-5'|'px-6'|'px-7'|'px-8';
export type VerticalPaddingType = 'py-0'|'py-1'|'py-2'|'py-3'|'py-4'|'py-5'|'py-6'|'py-7'|'py-8';
export type TopPaddingType = 'pt-0'|'pt-1'|'pt-2'|'pt-3'|'pt-4'|'pt-5'|'pt-6'|'pt-7'|'pt-8';
export type LeftPaddingType = 'pl-0'|'pl-1'|'pl-2'|'pl-3'|'pl-4'|'pl-5'|'pl-6'|'pl-7'|'pl-8';
export type RightPaddingType = 'pr-0'|'pr-1'|'pr-2'|'pr-3'|'pr-4'|'pr-5'|'pr-6'|'pr-7'|'pr-8';
export type BottomPaddingType = 'pb-0'|'pb-1'|'pb-2'|'pb-3'|'pb-4'|'pb-5'|'pb-6'|'pb-7'|'pb-8';

export interface AllPaddings {
    all?: AllPaddingType;
    x?: HorizontalPaddingType;
    y?: VerticalPaddingType;
    top?: TopPaddingType; 
    left?: LeftPaddingType;
    right?: RightPaddingType;
    bottom?: BottomPaddingType
}
