const BASE_URL = "http://jsonplaceholder.typicode.com/posts";
export function FetchData(url = "", config = {}) {
  return fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .catch((error) => Promise.reject(error));
}

export function FetchDefaultData() {
  return FetchData(BASE_URL);
}

// export function FetchDataById(id) {
//   return FetchData(`${BASE_URL}/${id}`);
// }

export function FetchDataById(id) {
  return fetch(`${BASE_URL}?userId=${id}`)
    .then((response) => {
      // console.log(`${BASE_URL}/${id}`, "url");
      //   console.log(response.status, "response");
      return response.json();
    })
    .catch((error) => Promise.reject(error));
}

// export function FetchDefaultData() {
//   return fetch(`${BASE_URL}`)
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => Promise.reject(error));
// }
