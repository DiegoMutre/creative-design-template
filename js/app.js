const storyBtn = document.querySelectorAll(".story-btn");
const navbar = document.querySelector("#navbar");
const scrollUpBtn = document.querySelector(".scroll-up-btn");

function toggleStory(e) {
    e.target.classList.toggle("change");
}

storyBtn.forEach(btn => btn.addEventListener("click", toggleStory));

function observeHomeSection(entries) {
    if (entries[0].isIntersecting) {
        scrollUpBtn.classList.remove("show");
        return;
    }

    scrollUpBtn.classList.add("show");
}

const observer = new IntersectionObserver(observeHomeSection).observe(navbar);
