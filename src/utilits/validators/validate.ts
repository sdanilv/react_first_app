export const maxSize = (size:number) => (val:string) =>
    val && val.length > size && `You text is over ${size} symbols: ${val.length}`;
export const required = (val:string) => !val && "Please write something";
