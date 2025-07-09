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
                images: [
                    "https://images.unsplash.com/photo-1522092979303-2e4a66943c43?w=800",
                    "https://images.unsplash.com/photo-1522092979303-2e4a66943c43?w=800",
                    "https://images.unsplash.com/photo-1522092979303-2e4a66943c43?w=800"
                ],
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
                images: [
                    "https://images.unsplash.com/photo-1531404997487-23b9d4a69131?w=800",
                    "https://images.unsplash.com/photo-1531404997487-23b9d4a69131?w=800",
                    "https://images.unsplash.com/photo-1531404997487-23b9d4a69131?w=800"
                ],
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
                images: [
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                ],
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi", "Business Center", "Concierge"],
                roomTypes: ["Club", "Suite", "Penthouse"],
                bookingLink: "https://www.ritzcarlton.com/en/hotels/new-york"
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
            
            // Create images container
            const imagesContainer = document.createElement("div");
            imagesContainer.className = "hotel-images";
            
            // Add each image
            hotel.images.forEach(img => {
                const imgElement = document.createElement("img");
                imgElement.src = img;
                imgElement.alt = hotel.name;
                imgElement.className = "hotel-image";
                imagesContainer.appendChild(imgElement);
            });
            
            // Create hotel info
            const hotelInfo = document.createElement("div");
            hotelInfo.className = "hotel-info";
            hotelInfo.innerHTML = `
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
            `;
            
            // Append images container first, then hotel info
            hotelCard.appendChild(imagesContainer);
            hotelCard.appendChild(hotelInfo);
            
            hotelList.appendChild(hotelCard);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");
    const hotelFinder = new HotelFinder();
    const countrySelect = document.getElementById("country");
    const searchButton = document.getElementById("searchButton");

    if (!searchButton) {
        console.error("Search button not found");
        return;
    }
    if (!countrySelect) {
        console.error("Country select not found");
        return;
    }
    if (!document.getElementById("hotelList")) {
        console.error("Hotel list container not found");
        return;
    }

    searchButton.addEventListener("click", () => {
        console.log("Search button clicked");
        const selectedCountry = countrySelect.value;
        console.log("Selected country:", selectedCountry);
        
        if (!selectedCountry) {
            console.log("No country selected");
            return;
        }

        const hotels = hotelFinder.searchHotels(selectedCountry);
        console.log("Found hotels:", hotels);
        
        if (hotels.length === 0) {
            console.log("No hotels found for country:", selectedCountry);
            return;
        }

        hotelFinder.renderHotels(hotels);
    });
});
