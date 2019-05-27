// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

declare interface IRequestError {
  message: string
  status: number
}

declare module '*.scss' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module 'Types'