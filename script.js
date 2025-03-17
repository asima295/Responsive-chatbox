
const testimonials = [
    {
        text: "Events made my dream wedding a reality. They took my vision and turned it into something beyond my wildest expectations. The attention to detail was impeccable. The decor, the lighting, the choice of venue – everything was absolutely perfect.",
        name: "Daria Bronson",
        position: "Head of Agency",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        text: "The event planning team exceeded all expectations. Their creativity and organization skills turned our event into an unforgettable experience. We couldn't have asked for anything better.",
        name: "John Smith",
        position: "CEO, XYZ Corp",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        text: "Absolutely outstanding service! From start to finish, everything was managed with professionalism and elegance. I highly recommend them for any event planning needs.",
        name: "Emily Clark",
        position: "Marketing Director",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
];

let currentIndex = 0;

function updateTestimonial() {
    document.getElementById("testimonial-text").innerText = testimonials[currentIndex].text;
    document.getElementById("user-name").innerText = testimonials[currentIndex].name;
    document.getElementById("user-position").innerText = testimonials[currentIndex].position;
    document.getElementById("user-image").src = testimonials[currentIndex].image;
}

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

// Initialize first testimonial
updateTestimonial();
