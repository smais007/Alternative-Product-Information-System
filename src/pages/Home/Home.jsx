import QueryBanner from "../../components/QueryBanner/QueryBanner";
import RecentQueries from "../../components/RecentQueries/RecentQueries";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <QueryBanner></QueryBanner>
      <RecentQueries></RecentQueries>
    </div>
  );
};

export default Home;
