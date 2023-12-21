export type PercentageHalvesType = '1/2';
export type PercentageThirdsType = '1/3'|'2/3';
export type PercentageFourthsType = '1/4'|'2/4'|'3/4';
export type PercentageFifthsType = '1/5'|'2/5'|'3/5'|'4/5';
export type PercentageSixtsType = '1/6'|'2/6'|'3/6'|'4/6'|'5/6';
export type PercentageTwelveType = '1/12'|'2/12'|'3/12'|'4/12'|'5/12'|'6/12'|'7/12'|'8/12'|'9/12'|'10/12'|'11/12';
export type NumericType = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'14'|'16'|'20'|'24'|'28'|'32'|'36'|'40'|'44'|'48'|'52'|'56'|'60'|'64'|'72'|'80'|'96';

export type DecimalType = '0'|'0.5'|'1.5'|'2.5'|'3.5';
export type PercentageType = PercentageHalvesType | PercentageThirdsType | PercentageFourthsType | PercentageFifthsType | PercentageSixtsType | PercentageTwelveType;

export type TargetType = '_self' | '_blank';
export type ActionType = 'neutral'|'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark';
export type RoundingType = 'rounded-none' | 'rounded-md' | 'rounded-lg' | 'rounded-full';
export type ScaleType = 'small' | 'medium' | 'large';

export type TextColor = 'text-black'|'text-white'|'text-neutral'|'text-stone'|'text-slate'|'text-gray'|'text-zinc'|'text-red'|'text-orange'|'text-amber'|'text-yellow'|'text-lime'|'text-green'|'text-emerald'|'text-teal'|'text-cyan'|'text-sky'|'text-blue'|'text-indigo'|'text-violet'|'text-purple'|'text-fuchsia'|'text-pink'|'text-rose';
export type TextWeight = '0'|'50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'950';
export type TextColorType = { color?: TextColor; weight?: TextWeight; }

export type BackgroundColor = 'bg-black'|'bg-white'|'bg-neutral'|'bg-stone'|'bg-slate'|'bg-gray'|'bg-zinc'|'bg-red'|'bg-orange'|'bg-amber'|'bg-yellow'|'bg-lime'|'bg-green'|'bg-emerald'|'bg-teal'|'bg-cyan'|'bg-sky'|'bg-blue'|'bg-indigo'|'bg-violet'|'bg-purple'|'bg-fuchsia'|'bg-pink'|'bg-rose';
export type BackgroundWeight = '50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'950';
export type BackgroundColorType = { color?: BackgroundColor; weight?: BackgroundWeight; }
export type ColorPropertyType = { text?: TextColorType, background?: BackgroundColorType }

export type OpacityType = 'opacity-100'|'opacity-90'|'opacity-80'|'opacity-70'|'opacity-60'|'opacity-50'|'opacity-40'|'opacity-30'|'opacity-25'|'opacity-20'|'opacity-10'|'opacity-5'|'opacity-0';
