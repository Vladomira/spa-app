import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import NavigationBox from "./navigation/NavigationBox";
import Container from "./Container/Container";
import HomePageView from "./views/HomePageView";
import InfopageView from "./views/InfopageView";
import UserInfo from "../components/dataPage/UserInfo";
import InteractivePageView from "./views/InteractivePageView";
import NotFoundView from "./views/NotFoundView";

//
function App() {
  return (
    <Container>
      <NavigationBox />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route exact path="/info">
            <InfopageView />
          </Route>

          <Route path="/info/:userId">
            <UserInfo />
          </Route>

          <Route path="/interacvtive">
            <InteractivePageView />
          </Route>

          <Route path="*">
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
export default App;
