import { Locations } from './Locations.js'
import { useLocations } from './LocationDataProvider.js'

const contentTarget = document.querySelector(".locations");
const places = useLocations();

export const LocationList = () => {
    contentTarget.innerHTML += places.map(place => Locations(place))
}




