import Home from "./component/home"
import Hero from "./component/hero"
import Brands from "./component/brand"
import NewArrivals from "./component/newArrivals/page"
import TopSelling from "./component/TopSelling/page"
import DressStyle from "./component/dressStyle";
import DressStyleCard from "./component/dressStyleCard";
import Review from "./component/review";
import Footer from "./component/footer";
import  Main  from "./productOne/page";

import Main2 from "./productTwo/page"
import UserForm from "@/components/form"





export default  function Land() {


  
  return (
  <div>
    <Home />
<Hero />
<Brands />
<NewArrivals />
<Main/>
<TopSelling />
<Main2/>
<DressStyle />
<DressStyleCard title={""} url={""} />
<UserForm/>

<Review />

<Footer />

  </div>  
  );
}
