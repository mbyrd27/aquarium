import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fishes");
    let fishes = mostHolyFish()

    function processFish() {
        for (const fish of fishes) {
            contentElement.innerHTML += Fish(fish);
            console.log('ran func')
        }
    }
    processFish();
    fishes = soldierFish();
    processFish();
    fishes = nonHolyFish();
    processFish();
}
