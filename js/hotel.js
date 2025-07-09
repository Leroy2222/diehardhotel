class HotelFinder {
    constructor() {
        this.hotels = [
            {
                id: 1,
                name: "London Hotel",
                country: "uk",
                city: "London",
                price: 200,
                rating: 4.5,
                images: [
                    "https://via.placeholder.com/200x150?text=Test+Image"
                ],
                amenities: ["Test"],
                roomTypes: ["Test"],
                bookingLink: "#"
            }
        ];
        console.log("Hotels data:", this.hotels);
    }

    searchHotels(country) {
        console.log("Searching hotels for country:", country);
        console.log("Available hotels:", this.hotels);
        const hotels = this.hotels.filter(hotel => hotel.country === country);
        console.log("Found hotels:", hotels);
        return hotels;
    }

    renderHotels(hotels) {
        console.log("Rendering hotels:", hotels);
        const hotelList = document.getElementById("hotelList");
        if (!hotelList) {
            console.error("Could not find hotelList element");
            return;
        }

        hotelList.innerHTML = "";
        if (hotels.length === 0) {
            hotelList.innerHTML = "<p>No hotels found</p>";
            return;
        }

        const hotel = hotels[0]; // Just using one hotel for testing
        const hotelCard = document.createElement("div");
        hotelCard.className = "hotel-card";
        
        const hotelInfo = document.createElement("div");
        hotelInfo.className = "hotel-info";
        hotelInfo.innerHTML = `
            <h3>${hotel.name}</h3>
            <p>Price: $${hotel.price}/night</p>
            <p>Rating: ${hotel.rating}⭐</p>
        `;

        hotelCard.appendChild(hotelInfo);
        hotelList.appendChild(hotelCard);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");
    const searchButton = document.getElementById("searchButton");
    if (!searchButton) {
        console.error("Search button not found");
        return;
    }

    searchButton.addEventListener("click", () => {
        console.log("Search button clicked");
        const countrySelect = document.getElementById("country");
        const selectedCountry = countrySelect.value;
        console.log("Selected country:", selectedCountry);
        
        if (!selectedCountry) {
            console.log("No country selected");
            return;
        }

        const hotelFinder = new HotelFinder();
        const hotels = hotelFinder.searchHotels(selectedCountry);
        console.log("Found hotels:", hotels);
        
        if (hotels.length === 0) {
            console.log("No hotels found for country:", selectedCountry);
            return;
        }

        hotelFinder.renderHotels(hotels);
    });
});
