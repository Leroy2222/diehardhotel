class HotelFinder {
    constructor() {
        this.hotels = [
            { 
                id: 1, 
                name: "The Plaza Hotel", 
                country: "usa", 
                city: "New York", 
                price: 450, 
                rating: 4.8,
                images: ["https://www.theplaza.com/wp-content/uploads/2022/01/Plaza-Hotel-Interior-1.jpg", "https://www.theplaza.com/wp-content/uploads/2022/01/Plaza-Hotel-Exterior.jpg", "https://www.theplaza.com/wp-content/uploads/2022/01/Plaza-Hotel-Room.jpg"],
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi"],
                roomTypes: ["Deluxe", "Suite", "Executive"],
                bookingLink: "https://www.theplaza.com"
            },
            { 
                id: 2, 
                name: "The Waldorf Astoria", 
                country: "usa", 
                city: "New York", 
                price: 500, 
                rating: 4.9,
                image: "https://www.waldorfastoria.com/content/dam/waldorfastoria/properties/newyork/homepage/hero/waldorfastoria_newyork_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi", "Business Center"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.waldorfastoria.com/new-york"
            },
            { 
                id: 3, 
                name: "The Ritz-Carlton", 
                country: "usa", 
                city: "New York", 
                price: 600, 
                rating: 5,
                image: "https://www.ritzcarlton.com/content/dam/ritzcarlton/properties/newyork/homepage/hero/ritzcarlton_newyork_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi", "Business Center", "Concierge"],
                roomTypes: ["Club", "Suite", "Penthouse"],
                bookingLink: "https://www.ritzcarlton.com/en/hotels/new-york"
            },
            { 
                id: 4, 
                name: "The Savoy", 
                country: "uk", 
                city: "London", 
                price: 350, 
                rating: 4.9,
                image: "https://www.thesavoy.com/content/dam/thesavoy/properties/london/homepage/hero/thesavoy_london_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.thesavoy.com"
            },
            { 
                id: 5, 
                name: "The Ritz", 
                country: "uk", 
                city: "London", 
                price: 400, 
                rating: 5,
                image: "https://www.theritzlondon.com/content/dam/theritzlondon/properties/london/homepage/hero/theritzlondon_london_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi", "Business Center"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.theritzlondon.com"
            },
            { 
                id: 6, 
                name: "The Dorchester", 
                country: "uk", 
                city: "London", 
                price: 450, 
                rating: 5,
                image: "https://www.thedorchester.com/content/dam/thedorchester/properties/london/homepage/hero/thedorchester_london_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi", "Business Center", "Concierge"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.thedorchester.com"
            },
            { 
                id: 7, 
                name: "Hotel de Crillon", 
                country: "france", 
                city: "Paris", 
                price: 500, 
                rating: 4.7,
                image: "https://www.hoteldecillon.com/content/dam/hoteldecillon/properties/paris/homepage/hero/hoteldecillon_paris_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.hoteldecillon.com"
            },
            { 
                id: 8, 
                name: "Le Meurice", 
                country: "france", 
                city: "Paris", 
                price: 450, 
                rating: 4.9,
                image: "https://www.lemeurice.com/content/dam/lemeurice/properties/paris/homepage/hero/lemeurice_paris_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi", "Business Center"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.lemeurice.com"
            },
            { 
                id: 9, 
                name: "Hôtel Plaza Athénée", 
                country: "france", 
                city: "Paris", 
                price: 600, 
                rating: 5,
                image: "https://www.plazaathenee.com/content/dam/plazaathenee/properties/paris/homepage/hero/plazaathenee_paris_hero_desktop_1920x1080.jpg",
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi", "Business Center", "Concierge"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.plazaathenee.com"
            }
        ];
    }

    searchHotels(country) {
        return this.hotels.filter(hotel => hotel.country === country);
    }

    renderHotels(hotels) {
        const hotelList = document.getElementById("hotelList");
        hotelList.innerHTML = "";
        
        hotels.forEach(hotel => {
            const hotelCard = document.createElement("div");
            hotelCard.className = "hotel-card";
            
            hotelCard.innerHTML = `
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                <div class="hotel-info">
                    <h3>${hotel.name}</h3>
                    <div class="hotel-meta">
                        <p>${hotel.city}, ${hotel.country.toUpperCase()}</p>
                        <p>Price: $${hotel.price}/night</p>
                        <p>Rating: ${hotel.rating}⭐</p>
                    </div>
                    <div class="amenities">
                        <h4>Amenities:</h4>
                        <ul>
                            ${hotel.amenities.map(amenity => `<li>${amenity}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="room-types">
                        <h4>Room Types:</h4>
                        <ul>
                            ${hotel.roomTypes.map(type => `<li>${type}</li>`).join("")}
                        </ul>
                    </div>
                    <a href="${hotel.bookingLink}" target="_blank" class="book-button">
                        Book Now
                    </a>
                </div>
            `;
            
            hotelList.appendChild(hotelCard);
        });
    }
}

console.log("Hotel script loaded");
document.addEventListener("DOMContentLoaded", () => {
    const hotelFinder = new HotelFinder();
    const countrySelect = document.getElementById("country");
    const searchButton = document.getElementById("searchButton");
    
    searchButton.addEventListener("click", () => {
        const selectedCountry = countrySelect.value;
        if (selectedCountry) {
            const hotels = hotelFinder.searchHotels(selectedCountry);
            hotelFinder.renderHotels(hotels);
        }
    });
});
