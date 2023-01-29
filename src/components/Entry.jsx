import React from "react";

function Entry(props){
    return (
      <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.term}</span>
      </dt>
      <dd>
        {props.definition}
      </dd>
    </div>);
}

export default Entry;