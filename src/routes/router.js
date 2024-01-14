import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../reusableComponents/ErrorPage";
import CreateForm from "../components/CreateForm";
import EditForm from "../components/EditForm";
import AppLayout from "./appLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create",
        element: <CreateForm />,
      },
      {
        path: "edit",
        element: <EditForm />,
      },
    ],
  },
]);
