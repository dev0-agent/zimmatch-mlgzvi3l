import { Navigate, Outlet } from "react-router-dom";
import { mockDB } from "@/lib/mock-db";

export default function ProtectedRoute() {
  const currentUser = mockDB.getCurrentUser();

  if (!currentUser) {
    // In a real app, we might redirect to /login. 
    // For this demo, we'll redirect to the landing page.
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
