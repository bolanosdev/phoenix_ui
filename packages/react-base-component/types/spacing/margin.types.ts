export type AllMarginType = 'm-0'|'m-1'|'m-2'|'m-3'|'m-4'|'m-5'|'m-6'|'m-7'|'m-8';
export type HorizontalMarginType = 'mx-0'|'mx-1'|'mx-2'|'mx-3'|'mx-4'|'mx-5'|'mx-6'|'mx-7'|'mx-8';
export type VerticalMarginType = 'my-0'|'my-1'|'my-2'|'my-3'|'my-4'|'my-5'|'my-6'|'my-7'|'my-8';
export type TopMarginType = 'mt-0'|'mt-1'|'mt-2'|'mt-3'|'mt-4'|'mt-5'|'mt-6'|'mt-7'|'mt-8';
export type LeftMarginType = 'ml-0'|'ml-1'|'ml-2'|'ml-3'|'ml-4'|'ml-5'|'ml-6'|'ml-7'|'ml-8';
export type RightMarginType = 'mr-0'|'mr-1'|'mr-2'|'mr-3'|'mr-4'|'mr-5'|'mr-6'|'mr-7'|'mr-8';
export type BottomMarginType = 'mb-0'|'mb-1'|'mb-2'|'mb-3'|'mb-4'|'mb-5'|'mb-6'|'mb-7'|'mb-8';

export interface AllMargins {
    all?: AllMarginType;
    x?: HorizontalMarginType;
    y?: VerticalMarginType;
    top?: TopMarginType; 
    left?: LeftMarginType;
    right?: RightMarginType;
    bottom?: BottomMarginType
}