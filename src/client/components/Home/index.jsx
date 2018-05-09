import { connect } from "react-redux";
import Home from "./Home";

// To use `dispatch` function in Home component, we have to `connect` to Home component!
export default connect()(Home);
