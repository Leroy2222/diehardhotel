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
                name: "The Savoy",
                country: "uk",
                city: "London",
                price: 350,
                rating: 4.9,
                images: [
                    "https://images.unsplash.com/photo-1522092979303-2e4a66943c43?w=800",
                    "https://images.unsplash.com/photo-1522092979303-2e4a66943c43?w=800",
                    "https://images.unsplash.com/photo-1522092979303-2e4a66943c43?w=800"
                ],
                amenities: ["Pool", "Spa", "Restaurant", "Gym", "Free WiFi"],
                roomTypes: ["Classic", "Premier", "Suite"],
                bookingLink: "https://www.thesavoy.com"
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
            
            const imagesContainer = document.createElement("div");
            imagesContainer.className = "hotel-images";
            
            hotel.images.forEach(img => {
                const imgElement = document.createElement("img");
                imgElement.src = img;
                imgElement.alt = hotel.name;
                imgElement.className = "hotel-image";
                imagesContainer.appendChild(imgElement);
            });
            
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
            
            hotelCard.appendChild(imagesContainer);
            hotelCard.appendChild(hotelInfo);
            
            hotelList.appendChild(hotelCard);
        });
    }
}

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
