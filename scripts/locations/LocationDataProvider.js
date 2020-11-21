const locations = [
    {
        name: "Great Barrier Reef",
        image: "./images/gbr.jpeg",
        url: "https://greatbarrierreef.org",
        description: `One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.`
    }, 

    {
        name: "Hawaii",
        image: "./images/hawaii.png",
        url: "https://www.oahuscubadiving.com/",
        description: "Out in the middle of the Pacific Ocean, there's a bunch of volcanic islands that conveyor-belted themselves over a hot-spot over millions of years. This is Hawaii. Given its remote nature, it is home to a vast array of aquatic wildlife that is just waiting to be explored."
    },

    {
        name: "Key Largo",
        image: "./images/keylargo.png",
        url: "https://www.keylargochamber.org/",
        description: "This best-kept-secret of the Florida Keys has numerous opportunities to explore the endagered coral reef surrounding the island. The limestone canals make getting out the diving areas an adventure. Be careful, barracudas like to hang out near your boat."
    }

]

export const useLocations = () => {
    return locations.slice();
}