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
import QuestionList from "./components/question/QuestionList";

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
          path="/question/:id/edit"
          element={
            <WithPrivateRoute>
              <QuestionUpdate />
            </WithPrivateRoute>
          }
        />

        <Route
          exact
          path="/questions"
          element={
            <WithPrivateRoute>
              <QuestionList />
            </WithPrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
