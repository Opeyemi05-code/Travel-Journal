import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import "./index.css";
import data from "./data";

const root = createRoot(document.getElementById("root"));

function Page() {

  const entryElements = data.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        entry={entry}
      />
    )
  })
  return (
    <>

      <Header />
      {entryElements}

    </>
  );
}

root.render(<Page />);

export default App;