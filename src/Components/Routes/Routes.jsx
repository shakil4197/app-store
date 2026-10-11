import { createBrowserRouter} from 'react-router'
import App from '../../App'
import Home from '../Home/Home'
import AppsPage from '../AppsPage/AppsPage'
import Installation from '../Installation/Installation'
import PageNotFound from '../ErrorPages/PageNotFound'
import AppDetails from '../AppDetails/AppDetails'
import AppNotFound from '../ErrorPages/AppNotFound'


export const route = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,

      children:[
        {
            path : '/',
            loader : async ()=> {
                const response = await fetch('/appsData.json');
                const data = await response.json();

                return data.slice(0, 8);

            },
            Component : Home
        },
        {
            path : '/apps',
            loader : ()=> fetch('/appsData.json'),
            Component : AppsPage
        },
        {
            path : '/installation',
            loader : ()=> fetch('/appsData.json'),
            Component : Installation
        },
        {
            path : '/details/:appId',
            loader : async ({params})=>{
                const response = await fetch('/appsData.json');
                const data = await response.json();

                const app = data.find(item => item.id === Number(params.appId));

                if(!app)
                {
                    throw new Response("Not Found", {status: 404});
                }

                return app;
            },
            Component : AppDetails,
            errorElement : <AppNotFound></AppNotFound>
        },
        {
            path : '*',
            Component : PageNotFound
        }
      ]
    }
  ]
)
