import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fishes");
    //let fishes = mostHolyFish()

    function processFish(getFish) {
        let fishes = getFish;
        for (const fish of fishes) {
            contentElement.innerHTML += Fish(fish);
        }

    }

    processFish(mostHolyFish());
    processFish(soldierFish());
    processFish(nonHolyFish());

}
