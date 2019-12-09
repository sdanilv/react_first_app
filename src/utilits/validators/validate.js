export const maxSize = size => val =>
    val && val.length > size && `You text is over ${size} symbols: ${val.length}`;
export const required = val => !val && "Please write something";
