import { Switch, Route, Redirect } from "react-router-dom";
import { Login, MainPage } from "./pages";
import { ProtectedRoute } from "./components";

export const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/main-page">
          <MainPage />
        </ProtectedRoute>
        
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
};
