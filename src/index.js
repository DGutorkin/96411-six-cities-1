import React from "react";
import ReactDOM from "react-dom";

import App from './components/app/app.jsx';
import {cardsData} from './data.js';


ReactDOM.render(
    <App cardsData={cardsData} />,
    document.querySelector(`#root`)
);
