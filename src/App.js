import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/layouts/Nav";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";
import Landing from "./components/layouts/Landing";
import Main from "./components/layouts/Main";
import ErrorMessage from "./components/layouts/ErrorMessage";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import QuestionCreate from "./components/question/QuestionCreate";
import QuestionUpdate from "./components/question/QuestionUpdate";

function App() {
  return (
    <Router>
      <Nav />
      <ErrorMessage />
      <Routes>
        <Route index element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/main"
          element={
            <WithPrivateRoute>
              <Main />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/ask/question"
          element={
            <WithPrivateRoute>
              <QuestionCreate />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/main/question/:id/edit"
          element={
            <WithPrivateRoute>
              <QuestionUpdate />
            </WithPrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
