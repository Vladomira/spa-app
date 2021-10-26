import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function SpinLoader() {
  return (
    <Loader
      type="BallTriangle"
      color="#3748a5"
      height={100}
      width={90}
      timeout={3000}
      style={{
        position: "fixed",
        top: "40%",
        left: "50%",
      }}
    />
  );
}
export default SpinLoader;
// class SpinLoader extends Component {
//   render() {
//     return (
//       <Loader
//         type="BallTriangle"
//         color="#85309f"
//         height={100}
//         width={100}
//         timeout={3000}
//         style={{
//           position: "fixed",
//           top: "40%",
//           left: "50%",
//         }}
//       />
//     );
//   }
// }
