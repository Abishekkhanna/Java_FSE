console.log("Welcome to the Community Portal");
window.addEventListener('load', function() {
    alert("Welcome! The Community Portal is now ready for you to explore.");
});
const events = [
    {
        id: 1,
        name: "Summer Music Festival",
        date: "2024-07-15",
        category: "music",
        location: "Central Park",
        price: 25,
        seats: 150,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        description: "Join us for an amazing day of live music featuring local bands and artists."
    },
    {
        id: 2,
        name: "Community Art Workshop",
        date: "2024-07-20",
        category: "arts",
        location: "Art Center",
        price: 20,
        seats: 25,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        description: "Learn painting techniques from professional artists in this hands-on workshop."
    },
    {
        id: 3,
        name: "Annual Food Fair",
        date: "2024-07-25",
        category: "food",
        location: "Main Street",
        price: 30,
        seats: 200,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
        description: "Taste delicious food from local restaurants and food trucks."
    },
    {
        id: 4,
        name: "Tech Startup Workshop",
        date: "2024-08-01",
        category: "education",
        location: "Business Center",
        price: 12,
        seats: 40,
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
        description: "Learn about starting your own tech business from successful entrepreneurs."
    },
    {
        id: 5,
        name: "Community Sports Day",
        date: "2024-08-05",
        category: "sports",
        location: "Sports Complex",
        price: 10,
        seats: 100,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        description: "Family-friendly sports activities including basketball, soccer, and volleyball."
    },
    {
        id: 6,
        name: "Photography Masterclass",
        date: "2024-08-10",
        category: "workshop",
        location: "Community Center",
        price: 15,
        seats: 30,
        image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400&h=300&fit=crop",
        description: "Master the art of photography with professional photographer Jane Smith."
    }
];
let filteredEvents = [...events];
let userPreferences = {};
window.addEventListener('load', function() {
    const savedEventType = getUserPreference('eventType');
    if (savedEventType) {
        document.getElementById('eventType').value = savedEventType;
    }
    displayEvents(filteredEvents);
});
function getUserPreference(key) {
    return userPreferences[key] || null;
}

function setUserPreference(key, value) {
    userPreferences[key] = value;
}

function clearUserPreferences() {
    userPreferences = {};
}
function displayEvents(eventsToShow) {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = '';
    
    eventsToShow.forEach(event => {
        const eventCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="eventCard" data-category="${event.category}">
                    <img src="${event.image}" alt="${event.name}" class="event-image">
                    <h5 class="fw-bold text-black">${event.name}</h5>
                    <p class="text-muted mb-2">
                        <i class="bi bi-calendar me-2"></i>${new Date(event.date).toLocaleDateString()}
                    </p>
                    <p class="text-muted mb-2">
                        <i class="bi bi-geo-alt me-2"></i>${event.location}
                    </p>
                    <p class="mb-3">${event.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold text-grey fs-5">$${event.price}</span>
                        <span class="badge">${event.seats} seats left</span>
                    </div>
                    <button class="btn btn-primary w-100 mt-3" onclick="registerForEvent(${event.id})">
                        <i class="bi bi-person-plus me-2"></i>Register
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += eventCard;
    });
}
function filterEvents() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    if (selectedCategory === '') {
        filteredEvents = [...events];
    } else {
        filteredEvents = events.filter(event => event.category === selectedCategory);
    }
    displayEvents(filteredEvents);
}
function searchEvents(event) {
    if (event.key === 'Enter') {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        filteredEvents = events.filter(e => 
            e.name.toLowerCase().includes(searchTerm) || 
            e.description.toLowerCase().includes(searchTerm)
        );
        displayEvents(filteredEvents);
    }
}

function registerForEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event && event.seats > 0) {
        event.seats--;
        alert(`Successfully registered for ${event.name}! Seats remaining: ${event.seats}`);
        displayEvents(filteredEvents);
    } else {
        alert('Sorry, this event is fully booked!');
    }
}
function validatePhone(input) {
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const errorDiv = document.getElementById('phoneError');
    
    if (!phonePattern.test(input.value)) {
        errorDiv.textContent = 'Please enter a valid phone number (e.g., 555-123-4567)';
        input.style.borderColor = '#ef4444';
    } else {
        errorDiv.textContent = '';
        input.style.borderColor = '#10b981';
    }
}
function showEventFee(select) {
    const feeDiv = document.getElementById('eventFee');
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value) {
        const fee = selectedOption.text.split(' - ')[1];
        feeDiv.innerHTML = `<i class="bi bi-currency-dollar me-1"></i>Registration Fee: ${fee}`;
        setUserPreference('eventType', selectedOption.value);
    } else {
        feeDiv.innerHTML = '';
    }
}
function countCharacters(textarea) {
    const count = textarea.value.length;
    document.getElementById('charCount').textContent = `${count} characters`;
}
function countFeedbackCharacters(textarea) {
    const count = textarea.value.length;
    document.getElementById('feedbackCharCount').textContent = `${count} characters`;
}
function showConfirmation() {
    const output = document.getElementById('confirmationMessage');
    output.innerHTML = '<i class="bi bi-check-circle me-2"></i>Registration submitted successfully!';
    output.style.display = 'block';
    setTimeout(() => {
        output.style.display = 'none';
    }, 5000);
}
async function submitRegistration(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const registrationData = Object.fromEntries(formData);
    document.getElementById('loadingSpinner').style.display = 'block';
    
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Registration data:', registrationData);
        alert('Registration submitted successfully! You will receive a confirmation email shortly.');
        event.target.reset();
    } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
    } finally {
        document.getElementById('loadingSpinner').style.display = 'none';
    }
}
function clearPreferences() {
    clearUserPreferences();
    document.getElementById('registrationForm').reset();
    document.getElementById('eventFee').innerHTML = '';
    alert('Preferences cleared successfully!');
}
function checkFormCompletion() {
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    let hasData = false;   
    for (let value of formData.values()) {
        if (value.trim() !== '') {
            hasData = true;
            break;
        }
    }
    if (hasData) {
        return 'You have unsaved changes. Are you sure you want to leave?';
    }
}
function findNearbyEvents() {
    if ('geolocation' in navigator) {
        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        };       
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                alert(`Your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}\n\nNearby events found! Check the events section below.`);            
                document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
            },
            error => {
                let errorMessage = 'Unable to retrieve your location. ';
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage += 'Location access denied by user.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage += 'Location information unavailable.';
                        break;
                    case error.TIMEOUT:
                        errorMessage += 'Location request timed out.';
                        break;
                }
                alert(errorMessage);
            },
            options
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}
function videoReady() {
    document.getElementById('videoStatus').innerHTML = 
        '<i class="bi bi-play-circle me-2"></i>Video ready to play!';
}
function enlargeImage(img) {
    document.getElementById('enlargedImage').src = img.src;
    document.getElementById('enlargedImage').alt = img.alt;
    new bootstrap.Modal(document.getElementById('imageModal')).show();
}
function displaySelectedEvent() {
    const select = document.getElementById('feedbackEvent');
    const selectedEvent = select.value;
    const feeDiv = document.getElementById('selectedEventFee');
    
    if (selectedEvent) {
        const eventFees = {
            'Summer Music Festival': '$25',
            'Art Workshop': '$20',
            'Food Fair': '$30'
        };
        
        feeDiv.innerHTML = `Event Fee: ${eventFees[selectedEvent] || 'Free'}`;
    } else {
        feeDiv.innerHTML = '';
    }
}
function submitFeedback() {
    const event = document.getElementById('feedbackEvent').value;
    const feedback = document.getElementById('feedbackText').value;
    
    if (event && feedback.trim()) {
        alert(`Thank you for your feedback about ${event}!`);
        document.getElementById('feedbackForm').reset();
        document.getElementById('selectedEventFee').innerHTML = '';
        document.getElementById('feedbackCharCount').textContent = '0 characters';
    } else {
        alert('Please select an event and provide feedback.');
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});