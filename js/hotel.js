class HotelFinder {
    constructor() {
        this.hotels = [
            { id: 1, name: "The Plaza Hotel", country: "usa", city: "New York", price: 450, rating: 4.8, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920" },
            { id: 2, name: "The Savoy", country: "uk", city: "London", price: 350, rating: 4.9, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920" },
            { id: 3, name: "Hotel de Crillon", country: "france", city: "Paris", price: 500, rating: 4.7, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920" }
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
                <h3>${hotel.name}</h3>
                <p>${hotel.city}, ${hotel.country.toUpperCase()}</p>
                <p>Price: $${hotel.price}/night</p>
                <p>Rating: ${hotel.rating}⭐</p>
                <button class="book-button">Book Now</button>
            `;
            
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
