const sampleEvents = [
  {
    event_id: 1,
    title: "Eco Awareness Drive",
    description: "Join us to clean local parks and educate about sustainability.",
    city: "Chennai",
    start_date: "2025-06-01T10:00:00",
    end_date: "2025-06-01T14:00:00",
    status: "upcoming"
  },
  {
    event_id: 2,
    title: "Tech for All Workshop",
    description: "Free training on using basic technology for senior citizens.",
    city: "Cuddalore",
    start_date: "2025-06-05T09:00:00",
    end_date: "2025-06-05T12:30:00",
    status: "upcoming"
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const eventsList = document.getElementById("eventsList");
  const eventSelect = document.getElementById("eventSelect");
  const feedbackEventSelect = document.getElementById("feedbackEventSelect");

  sampleEvents.forEach(event => {
    const col = document.createElement("div");
    col.className = "col-md-6";
    col.innerHTML = `
      <div class="card p-3 h-100">
        <h5>${event.title}</h5>
        <p class="text-muted">${event.city} | ${new Date(event.start_date).toLocaleDateString()}</p>
        <p>${event.description}</p>
        <p><strong>Status:</strong> ${event.status}</p>
      </div>
    `;
    eventsList.appendChild(col);

    const option = new Option(event.title, event.event_id);
    eventSelect.appendChild(option.cloneNode(true));
    feedbackEventSelect.appendChild(option.cloneNode(true));
  });

  document.getElementById("registrationForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Registered successfully!");
    e.target.reset();
  });

  document.getElementById("feedbackForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Feedback submitted! Thank you.");
    e.target.reset();
  });
});
