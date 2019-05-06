import React from "react";
import Main from '../../components/main/main.jsx';
import PropTypes from "prop-types";


const App = (props) => {
  App.propTypes = {
    cardsData: PropTypes.array
  };

  return <div>
    <Main cardsData={props.cardsData} />
  </div>;
};
export default App;
