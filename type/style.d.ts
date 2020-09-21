// https://spin.atomicobject.com/2020/06/22/css-module-typescript/

// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For LESS
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: { [key: string]: string };
  export default content;
}