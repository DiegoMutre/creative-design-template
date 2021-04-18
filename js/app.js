const storyBtn = document.querySelectorAll(".story-btn");

function toggleStory(e) {
    e.target.classList.toggle("change");
}

storyBtn.forEach(btn => btn.addEventListener("click", toggleStory));
