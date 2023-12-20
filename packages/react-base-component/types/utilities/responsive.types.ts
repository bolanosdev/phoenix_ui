import type { AllMargins, AllPaddings } from '../spacing';
import type { DarkOverrides } from '../utilities/dark.types';
import type { TextSizeType, TextAlignmentType } from '../texts';
import type { OpacityType, FlexType, ColorPropertyType } from '../attributes';
import type { AllHeights, AllWidths } from '../sizing';

export type AllResponsiveBreakpoints = 'sm'|'md'|'lg'|'xl'|'2xl';

export type ResponsiveOverrides = {
    medium?: {
        size?: TextSizeType;        
        width?: AllWidths,
        height?: AllHeights,
        margin?: AllMargins;
        padding?: AllPaddings;
        colors?: ColorPropertyType;
        dark?: DarkOverrides
        opacity?: OpacityType;
        align?: TextAlignmentType;
        flex?: FlexType;
    },
    large?: {
        size?: TextSizeType;
        width?: AllWidths,
        height?: AllHeights,
        margin?: AllMargins;
        padding?: AllPaddings;
        colors?: ColorPropertyType;
        dark?: DarkOverrides;
        opacity?: OpacityType;
        align?: TextAlignmentType;
        flex?: FlexType;
    }
}