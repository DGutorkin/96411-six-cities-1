import React from "react";
import Main from '../../components/main/main.jsx';
import PropTypes from "prop-types";


const App = (props) => <Main offers={props.offers} />;

App.propTypes = {
  offers: PropTypes.array
};
export default App;
