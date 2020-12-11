import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fishes");
    //let fishes = mostHolyFish()

    function processFish(getFish) {
        let fishes = getFish;
        
        contentElement.innerHTML += fishes.map(fish => Fish(fish));


    }

    processFish(mostHolyFish());
    processFish(soldierFish());
    processFish(nonHolyFish());

}
