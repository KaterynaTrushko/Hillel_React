import React, { createElement } from "react";

let div = createElement("div", { className: 'red' });

function Div(props) {
  return (
    <div className={props.className}>
      <p>
        <p>
          {123 + 4}
        </p>
      </p>
    </div>
  )
}

let divComponent = createElement(Div, { className: 'red' });