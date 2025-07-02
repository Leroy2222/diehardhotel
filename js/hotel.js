class HotelFinder {
    constructor() {
        this.hotels = [
            {
                id: 1,
                name: "Luxury Hotel",
                country: "usa",
                price: 200,
                rating: 4.5,
                description: "Luxurious accommodations with top-notch amenities"
            },
            {
                id: 2,
                name: "Budget Inn",
                country: "usa",
                price: 80,
                rating: 3.8,
                description: "Basic but clean and comfortable"
            },
            {
                id: 3,
                name: "City View Hotel",
                country: "uk",
                price: 150,
                rating: 4.2,
                description: "Great views of the city center"
            }
        ];
    }

    calculateValue(hotel) {
        return (hotel.rating / hotel.price) * 100;
    }

    searchHotels(country) {
        const hotels = this.hotels.filter(h => h.country === country);
        const sortedHotels = hotels.sort((a, b) => {
            return this.calculateValue(b) - this.calculateValue(a);
        });

        const resultsDiv = document.getElementById("hotelResults");
        resultsDiv.innerHTML = "";

        sortedHotels.forEach(hotel => {
            const hotelCard = document.createElement("div");
            hotelCard.className = "hotel-card";
            hotelCard.innerHTML = `
                <h3>${hotel.name}</h3>
                <p>Rating: ${hotel.rating}⭐</p>
                <p>Price: $${hotel.price}/night</p>
                <p>Value Score: ${(this.calculateValue(hotel)).toFixed(1)}%</p>
                <p>${hotel.description}</p>
                <button onclick="bookHotel(${hotel.id})">Book Now</button>
            `;
            resultsDiv.appendChild(hotelCard);
        });

        document.getElementById("gameContainer").style.display = "block";
    }
}

function searchHotels() {
    const country = document.getElementById("country").value;
    if (country) {
        const finder = new HotelFinder();
        finder.searchHotels(country);
    }
}
