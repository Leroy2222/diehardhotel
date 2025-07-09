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
            // Add other hotels with similar structure
        ];
    }

    searchHotels(country) {
        return this.hotels.filter(hotel => hotel.country === country);
    }

    renderHotels(hotels) {
        const hotelList = document.getElementById("hotelList");
        if (!hotelList) {
            console.error("hotelList element not found");
            return;
        }
        hotelList.innerHTML = "";
        
        if (hotels.length === 0) {
            hotelList.innerHTML = "<p>No hotels found for this country.</p>";
            return;
        }

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
    console.log("Hotel script loaded");
    const hotelFinder = new HotelFinder();
    const countrySelect = document.getElementById("country");
    const searchButton = document.getElementById("searchButton");
    
    if (!searchButton) {
        console.error("Search button not found");
        return;
    }
    
    searchButton.addEventListener("click", () => {
        const selectedCountry = countrySelect.value;
        console.log("Searching for hotels in:", selectedCountry);
        if (selectedCountry) {
            const hotels = hotelFinder.searchHotels(selectedCountry);
            console.log("Found hotels:", hotels);
            hotelFinder.renderHotels(hotels);
        }
    });
});
