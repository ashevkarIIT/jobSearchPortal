function removeSkill(element) {
    element.parentElement.remove(); // Remove the entire skill span
}

function toggleSkillInput() {
    const skillInputContainer = document.getElementById('skill-input-container');
    const addSkillBtn = document.getElementById('add-skill-btn');
    
    // Toggle visibility of input field
    if (skillInputContainer.style.display === "none") {
        skillInputContainer.style.display = "block";
        addSkillBtn.style.display = "none"; // Hide the "Add Skill" button while input is shown
    } else {
        skillInputContainer.style.display = "none";
    }
}

function addSkill() {
    const skillInput = document.getElementById('skill-input');
    const newSkill = skillInput.value.trim();

    if (newSkill) {
        const skillContainer = document.getElementById('skills-container');
        const span = document.createElement('span');
        span.className = 'bg-gray-200 text-gray-700 rounded-full px-4 py-2 mb-2 relative';
        span.innerHTML = `${newSkill} <span class="absolute right-0 top-0 cursor-pointer text-red-500 px-2" onclick="removeSkill(this)">×</span>`;
        skillContainer.appendChild(span);

        skillInput.value = ''; // Clear the input field
        document.getElementById('skill-input-container').style.display = 'none'; // Hide input after adding
        document.getElementById('add-skill-btn').style.display = 'inline-block'; // Show the "Add Skill" button again
    }
}