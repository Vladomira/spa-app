import { useState, useEffect, lazy } from "react";
import { Suspense } from "react";
import {
  Route,
  // useParams,
  useRouteMatch,
  useLocation,
  // useHistory,
} from "react-router-dom";
// import { useParams, useRouteMatch, useHistory } from 'react-router-dom';
import * as dataFetchApi from "../servise/fetchApi";
import DefaultInfo from "../dataPage/DefaultInfo";
import SearchForm from "../dataPage/SearchForm";

const UserInfo = lazy(() =>
  import("../dataPage/UserInfo" /* webpackChunkName: "movie-reviews" */)
);

export default function InfopageView() {
  // const params = useParams();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [status, setStatus] = useState("idle");
  // console.log(userId, "userId from parent");

  // const currentId = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!userId) {
      return;
    }
    dataFetchApi.FetchDataById(userId).then((response) => {
      // console.log(response, "response");
      setUserData(response);
      setStatus("resolved");
    });
  }, [userId]);

  useEffect(() => {
    dataFetchApi.FetchDefaultData().then((response) => {
      const newArray = [...response].slice(0, 10);
      const dataResponse = newArray.map(({ title, body, id }) => {
        return {
          title,
          body,
          id,
        };
      });
      setData(dataResponse);
      setStatus("pending");
    });
  }, []);

  const handleFormSubmit = (userId) => {
    setUserId(userId);
    setUserData([]);
  };

  return (
    <>
      <h1>Info page</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={`${url}`}>
          <SearchForm
            onSubmit={handleFormSubmit}
            url={url}
            id={userId}
            location={location}
          />
        </Route>

        {status === "pending" && <DefaultInfo data={data} id={userId} />}

        {userId && <UserInfo data={userData} id={userId} />}

        <Suspense>
          {/* <Route exact path={"/info/:userId"}>
            <UserInfo />
          </Route> */}
        </Suspense>
      </Suspense>
    </>
  );
}
