export interface RouterItem{
    path: string;
    name: string;
    component: any;
    children: RouterItem[];
}