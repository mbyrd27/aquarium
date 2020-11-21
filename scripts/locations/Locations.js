export const Locations = (place) => {
    return `
    <section class="location card">
        <div>
            <img class="location__image image--card" src="${place.image}"/>
        </div>
        <div class="location__name">${place.name}</div>
        <div class="location__url"><a href="${place.url}">Explore!</a></div>
        <div class="location__description">${place.description}</div>
    </section>
    `
}