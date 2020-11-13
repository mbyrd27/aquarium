import { useFish } from './FishDataProvider.js'

// Stores the Fish Data Provider object copy in var called allTheFish
const allTheFish = useFish()

for (const fishObj of allTheFish) {
    console.log(fishObj);
}