import { Route, Routes } from "react-router-dom";
import UserCreate from "./pages/Users/Create";
import UserEdit from "./pages/Users/Edit";
import UserList from "./pages/Users/List";
import { Dashboard } from "@mui/icons-material";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users">
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/users/new" element={<UserCreate />}></Route>
                <Route path="/users/:id" element={<UserEdit />}></Route>
            </Route>
        </Routes>
    )
}