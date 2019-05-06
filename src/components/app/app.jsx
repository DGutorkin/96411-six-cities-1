import React from "react";
import Main from '../../components/main/main.jsx';
import PropTypes from "prop-types";


const App = (props) => <Main cardsData={props.cardsData} />;

App.propTypes = {
  cardsData: PropTypes.array
};
export default App;
