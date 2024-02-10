import SearchByName from "./components/SearchByName";
import "./styles.css";
import Link from "next/link";

export default function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchByName />
    </div>
  );
}
