// Set fish collection object
const fishCollection = [
    {
        name: "Nemo",
        food: "Krill",
        species: "Clown Fish",
        length: 3,
        location: "Great Barrier Reef",
        image: "./images/Nemo.jpeg"

    },

    {
        name: "Bruce",
        food: "Fish, Tires",
        species: "Great White Shark",
        length: 48,
        location: "Great Barrier Reef",
        image: "./images/Bruce.jpeg"
    },

    {
        name: "Dory",
        food: "Spicy Tacos for some reason",
        species: "Blue Tang",
        length: 6,
        location: "Great Barrier Reef",
        image: "./images/dory.jpeg"
    }
]

// Allows a copy of the fish collection object to be accessible
export const useFish = () => {
    return fishCollection.slice();
}