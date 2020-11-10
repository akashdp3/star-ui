interface IButton {
    variant: string;
    theme: {
        colors: any;
    };
}
export declare const getAppearance: ({ variant, theme }: IButton) => {
    color: any;
    backgroundColor: any;
    borderColor: any;
    hoverBackgroundColor: any;
    hoverBorderColor: any;
    hoverBorderColorColor?: undefined;
} | {
    color: any;
    backgroundColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    hoverBorderColorColor: string;
    hoverBorderColor?: undefined;
};
export {};
