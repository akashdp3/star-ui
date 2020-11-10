interface ITextAppearance {
    variant: string;
    theme: {
        colors: any;
    };
}
export declare const getTextColor: ({ variant, theme }: ITextAppearance) => any;
export {};
