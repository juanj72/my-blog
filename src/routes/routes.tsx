import {useRoutes,Navigate} from "react-router-dom";
import { MainContent } from "../layouts/mainContent";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/projects";

export type routeItem={
    name:string;
    path:React.ReactNode;
    icon:routeItem[];
}

export const NavBarRoutes:routeItem[]=[
    {
        name:'home',
        path:<Navigate to="/home"/>,
        icon:[]
    },
    {
        name:'about',
        path:<Navigate to="/about"/>,
        icon:[]
    },
    {
        name:'posts',
        path:<Navigate to="/posts"/>,
        icon:[]
    },
]


export const AppRoutes =()=>useRoutes(
    [
        {
            path:'/',
            element: <MainContent/>,
            children:[
                {index:true,element:<Home/>},
                {path:'about',element:<About/>},
                {path:'projects',element:<Projects/>},
            

            ]
        }
    ]
)