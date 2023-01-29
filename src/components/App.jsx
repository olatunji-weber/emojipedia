import React from "react";
import Entry from "./Entry.jsx"
import emojis from "./emojiLib"

function App() {
  return (
  <div>
    <h1><span>emojipedia</span></h1>  
    <dl className="dictionary">
      {emojis.map(
        emoji => <Entry 
            key = {emoji.id}
            emoji = {emoji.emoji}
            term = {emoji.term}
            definition = {emoji.definition.substring(0, 100)+"......"} 
          />
      )};
    </dl>
  </div>);
}

export default App;
