import { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from "./SeacrhBar/Searchbar";
import ImageGallery from "./ImgsList/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SpinLoader from "./Loader/Loader";
import Error from "./Error/Error.js";
import FetchImgs from "./services/FetchImgs";
import Modal from "./Modal/Modal";
import Container from "./Container/Container";
import "./styles/Style.scss";

function App() {
  const [imgName, setImgName] = useState("");
  const [entriesImgs, setEntriesImgs] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [forLoadMore, setForLoadMore] = useState(false);
  //

  useEffect(() => {
    if (!imgName) {
      return;
    }
    setStatus("pending");
    FetchImgs(imgName, page)
      .then((entriesImgs) => {
        if (!entriesImgs.hits.length) {
          return (
            setStatus("rejected"),
            alert("No such pictures, try again"),
            setError(error)
          );
        } else {
          const data = entriesImgs.hits.map(
            ({ id, tags, webformatURL, largeImageURL }) => {
              setLargeImageURL(largeImageURL);
              return {
                id,
                webformatURL,
                tags,
                largeImageURL,
              };
            }
          );
          setEntriesImgs((prevState) => [...prevState, ...data]);
          setStatus("resolved");
          setForLoadMore(true);
        }
        scroll();
      })
      .catch((error) => {
        setError("Something went wrong, please try again");
        setStatus("rejected");
      });
  }, [error, page, imgName]);

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const handleFormSubmit = (imgName) => {
    setImgName(imgName);
    setEntriesImgs([]);
    setPage(1);
  };
  const toggleModalWindow = (prop) => {
    setShowModal(!showModal);
    setLargeImageURL(prop);
  };
  const pageIncrement = () => {
    setPage(page + 1);
    setStatus("pending");
  };
  return (
    <Container className="container">
      <Searchbar onSubmit={handleFormSubmit} />
      {status === "idle" && (
        <p className="header">Please, type the image name</p>
      )}
      {status === "pending" && (
        <>
          <ImageGallery
            entriesImgs={entriesImgs}
            openModal={toggleModalWindow}
          />
          <SpinLoader />
        </>
      )}
      {status === " rejected" && <Error message={error} />}
      {status === "resolved" && (
        <>
          <ImageGallery
            entriesImgs={entriesImgs}
            openModal={toggleModalWindow}
          />
          {forLoadMore && <LoadMoreBtn onClick={pageIncrement} />}
        </>
      )}
      {showModal && <Modal onClose={toggleModalWindow} img={largeImageURL} />}
    </Container>
  );
}

export default App;
