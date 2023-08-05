import "./home.css";
import { Navbar, Header, Featured, PropertyList, FeaturedProperties, MailList, Footer} from "../../components/index";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
        <h1 className="home__title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home__title">Homes guests love</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
