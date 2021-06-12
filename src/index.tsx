import ReactDOM from "react-dom";
import Header from "./Header";
import MainContent from "./MainContent";

ReactDOM.render(<Header />, document.getElementById("page-header"));
ReactDOM.render(<MainContent />, document.getElementById("main-content"));
