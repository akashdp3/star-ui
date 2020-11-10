interface IBadge {
    variant: string;
    theme: {
        colors: any;
    };
}
export declare const getAppearance: ({ variant, theme }: IBadge) => {
    color: string;
    bgColor: string;
};
export {};
