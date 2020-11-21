import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fishes");
    const fishes = useFish();

    for (const fish of fishes) {
        contentElement.innerHTML += Fish(fish);
    }  
}