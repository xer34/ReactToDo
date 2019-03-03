import React from "react";
import Main from "./app/components/Main";
import Note from "./app/components/Note"

export default class App extends React.Component {
  render() {
    return <Main>
      <Note />
      </Main>;
  }
}
