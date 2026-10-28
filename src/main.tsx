//import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import VisualNovelPage from "./components/VisualNovelPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {fetchVisualNovel} from "./api/vndbApi.ts";
import NotFound from "./components/VisualNovelPageComponents/NotFound.tsx";
import Search from "./components/Search.tsx";
import './index.css'

const router = createBrowserRouter([
    {
      path:"/",
      element: <Search/>
    },
    {
        path: '/vn/:id?',
        loader: async ({params}) => {
            const id = params.id;
            if (!id) {
                throw new Error("No visual novel selected");
            }
            if (!id.startsWith("v")) {
                throw new Error("Invalid ID");
            }
            const visualNovel = await fetchVisualNovel(id)
            if (!visualNovel) {
                throw new Error(`visual novel "${id}" Not Found`);
            }
            return visualNovel;
        },
        element: <VisualNovelPage/>,
        errorElement: <NotFound/>,
        HydrateFallback: () => <div>Loading...</div>
    },
])


createRoot(document.getElementById('root')!).render(
//  <StrictMode>
    <RouterProvider router={router}/>
//  </StrictMode>
)
