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
                description: "Iconic luxury hotel in the heart of Manhattan",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.theplaza.com"
            },
            {
                id: 2,
                name: "The Ritz-Carlton, New York Central Park",
                country: "usa",
                city: "New York",
                price: 600,
                rating: 4.9,
                description: "Luxury hotel with stunning Central Park views",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.ritzcarlton.com"
            },
            {
                id: 3,
                name: "The London Hotel",
                country: "uk",
                city: "London",
                price: 350,
                rating: 4.7,
                description: "Historic hotel in the heart of London",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.thelondonhotel.com"
            },
            {
                id: 4,
                name: "The Savoy",
                country: "uk",
                city: "London",
                price: 500,
                rating: 4.9,
                description: "Legendary hotel on the Strand",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.thesavoylondon.com"
            },
            {
                id: 5,
                name: "The Ritz-Carlton, Toronto",
                country: "canada",
                city: "Toronto",
                price: 300,
                rating: 4.8,
                description: "Luxury hotel in downtown Toronto",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.ritzcarlton.com"
            },
            {
                id: 6,
                name: "The Fairmont Royal York",
                country: "canada",
                city: "Toronto",
                price: 250,
                rating: 4.7,
                description: "Historic hotel in the heart of Toronto",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.fairmont.com"
            },
            {
                id: 7,
                name: "The Langham, Sydney",
                country: "australia",
                city: "Sydney",
                price: 400,
                rating: 4.8,
                description: "Luxury hotel in the heart of Sydney",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.langhamhotels.com"
            },
            {
                id: 8,
                name: "The Park Hyatt Sydney",
                country: "australia",
                city: "Sydney",
                price: 550,
                rating: 4.9,
                description: "Luxury hotel with harbor views",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                bookingLink: "https://www.hyatt.com"
            }
        ];
    }

    calculateValue(hotel) {
        return (hotel.rating / hotel.price) * 100;
    }

    searchHotels(country) {
        const loadingSpinner = document.getElementById("loadingSpinner");
        loadingSpinner.style.display = "block";
        
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
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                <h3>${hotel.name}</h3>
                <p>Location: ${hotel.city}, ${hotel.country}</p>
                <p>Rating: ${hotel.rating}⭐</p>
                <p>Price: $${hotel.price}/night</p>
                <p class="value-score">Value Score: ${(this.calculateValue(hotel)).toFixed(1)}%</p>
                <p>${hotel.description}</p>
                <a href="${hotel.bookingLink}" target="_blank" class="book-now-button">Book Now</a>
            `;
            resultsDiv.appendChild(hotelCard);
        });

        loadingSpinner.style.display = "none";
    }
}

function searchHotels() {
    const country = document.getElementById("country").value;
    if (country) {
        const finder = new HotelFinder();
        finder.searchHotels(country);
    }
}
