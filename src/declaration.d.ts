declare module '*.jpg';
declare module '*.svg';
declare module '*.ico';

declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames;
}