import { Tips } from './Tips.js'
import { takeAdvice } from './TipDataProvider.js'

const contentTarget = document.querySelector(".tips");
const advice = takeAdvice();

export const TipList = () => {
    for (const tip of advice) {
        contentTarget.innerHTML += Tips(tip);
    }
}