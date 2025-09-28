import Header from '../components/Header'
import Category from '../components/Category'
import TopRestaurants from '../components/TopRestaurants';
import OnlineDelivery from '../components/OnlineDelivery';
import BestPlaces from '../components/BestPlaces';
import BestCuisines from '../components/BestCuisines';
import Explore from '../components/Explore';
import Footer from '../components/Footer';
function App(){
    return (
        <div>
            <Header/>
            <Category/>
            <TopRestaurants/>
            <OnlineDelivery/>
            <BestPlaces/>
            <BestCuisines/>
            <Explore/>
            <Footer/>
        </div>
    )
}

export default App;