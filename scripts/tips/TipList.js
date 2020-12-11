import { Tips } from './Tips.js'
import { takeAdvice } from './TipDataProvider.js'

const contentTarget = document.querySelector(".tips");
const advice = takeAdvice();

export const TipList = () => {
    contentTarget.innerHTML += advice.map(tip => Tips(tip));
}