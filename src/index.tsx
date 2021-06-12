import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

ReactDOM.render(<Header />, document.getElementById("page-header"));
ReactDOM.render(<MainContent />, document.getElementById("main-content"));
