import { connect } from "react-redux";
import LandingPage from "./LandingPage";

// To use 'dispatch' in LandingPage component, we have to connect!
export default connect()(LandingPage);
