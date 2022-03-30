import { lazy,LazyExoticComponent} from "react";
import { NoLazyPage } from "../01-lazyload/pages/NoLazyPage";

type JSXComponent =()=>JSX.Element;

interface Route {
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}

const LazyLayout=lazy(()=>import(/* webpackChunckName: "LazyPage1" */ '../01-lazyload/layout/LazyLayout'));


export const routes:Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazyPage,
    name: "No Lazy",
  },  
];
