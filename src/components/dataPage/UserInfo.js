// import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from "react";
// import * as dataFetchApi from "../servise/fetchApi";
import PropTypes from "prop-types";

export default function UserInfo({ data, id }) {
  return (
    <>
      <p>{`Posts of user with ID№ ${id} `}</p>

      <ul>
        {data.map(({ body, title, id }) => {
          return (
            <li key={id}>
              <b>{title}</b>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
UserInfo.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  // url: PropTypes.string.isRequired,
  // location: PropTypes.object.isRequired,
};

// const { userId } = useParams();
// const [userData, setUserData] = useState([]);
// const [status, setStatus] = useState("idle");
// console.log("userId", userId);
// console.log("id", id);
// useEffect(() => {
//   if (!id) {
//     return;
//   }
//   dataFetchApi.FetchDataById(id).then((response) => {
//     // console.log(response, "response");
//     setUserData(response);
//     // setStatus("resolved");
//   });
// }, [id]);
