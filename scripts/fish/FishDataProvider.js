// Set fish collection object
const fishCollection = [
    {
        name: "Nemo",
        food: "Krill",
        species: "Clown Fish",
        length: 4,
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
    },

    {
        name: "Bob",
        food: "Minnows",
        species: "Swordfish",
        length: 37,
        location: "Gulf of Mexico",
        image: "./images/bob.jpeg"
    },

    {
        name: "Slick",
        food: "Barnacles",
        species: "Barracuda",
        length: 20,
        location: "Key Largo",
        image: "./images/slick.jpeg"
    },

    {
        name: "Gary",
        food: "Human Arms",
        species: "Great White Shark",
        length: 40,
        location: "Great Barrier Reef",
        image: "./images/Bruce.jpeg"

    }


]

// Allows a copy of the fish collection object to be accessible
//export const useFish = () => {
  //  return fishCollection.slice();
//}

export const mostHolyFish = () => {
    const holyFish = fishCollection.filter(fish => {
        return fish.length % 3 == 0;
    });
    return holyFish;
}

export const soldierFish = () => {
    const soldiers = fishCollection.filter(fish => {
        return fish.length % 5 == 0;
    });
    return soldiers;
}

export const nonHolyFish = () => {
    const regularFish = fishCollection.filter(fish => {
        if (fish.length % 3 == 0) {
            return false;
        }
        else if (fish.length % 5 == 0) {
            return false;
        }
        else {
            return true;
        }
    });
    return regularFish;
}