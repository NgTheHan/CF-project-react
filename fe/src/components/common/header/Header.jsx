import { Link } from "react-router-dom";

import TopBarHeader from "./TopBarHeader";
import MainBarHeader from "./MainBarHeader";

export default function Header() {
  return (
    <header>
      <TopBarHeader />
      <MainBarHeader />
    </header>
  );
}
