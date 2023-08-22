import About from "../About/About";
import Banner from "../Banner/Banner";
import Duration from "../Duration/Duration";
import Products from "../Product/Products";

import Services from "../Services/Services";
import Team from "../Team/Team";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Duration></Duration>
      <Products></Products>
      <Team></Team>
    </div>
  );
}
