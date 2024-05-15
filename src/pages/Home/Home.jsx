import QueryBanner from "../../components/QueryBanner/QueryBanner";
import RecentQueries from "../../components/RecentQueries/RecentQueries";
import Slider from "../../components/Slider/Slider";
import State from "../../components/State/State";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <State></State>
      <RecentQueries></RecentQueries>
      <QueryBanner></QueryBanner>
    </div>
  );
};

export default Home;
