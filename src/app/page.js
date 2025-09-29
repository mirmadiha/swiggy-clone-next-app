import Category from '../components/Category'
import TopRestaurants from '../components/TopRestaurants';
import OnlineDelivery from '../components/OnlineDelivery';
import BestPlaces from '../components/BestPlaces';
import BestCuisines from '../components/BestCuisines';
import Explore from '../components/Explore';
function App(){
    return (
        <div>
            <Category/>
            <TopRestaurants/>
            <OnlineDelivery/>
            <BestPlaces/>
            <BestCuisines/>
            <Explore/>
        </div>
    )
}

export default App;