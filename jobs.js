
let jobs = [];
async function fetchJobs() {
    try {
        const response = await fetch('./jobs.json');
        console.log("Inside Json file"); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        jobs = await response.json();
        // console.log(jobs);
        filterJobs();         
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function filterJobs(){
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const jobList = document.getElementById('jobList');
    const search = document.getElementById('search').value.trim().toLowerCase();

    jobList.innerHTML = ''
    console.log(jobs);
    
    const filteredJobs = jobs.filter(job => {
        return (
            (category === job.category || category === '') &&
            (location === job.location || location === '') &&
            (job.title.toLowerCase().includes(search) || search === '')
        );
    });

    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-Card bg-white p-6 rounded-lg shadow-lg';
            jobCard.innerHTML = `
                <h2 class="text-xl font-bold mb-2">${job.title}</h2>
                <p class="text-gray-900">Category: ${job.category}</p>
                <p class="text-gray-900">Location: ${job.location}</p>
            `;
            jobList.appendChild(jobCard);
        });
    } else {
        const noResult = document.createElement('p');
        noResult.className = 'text-red-600';
        noResult.innerHTML = 'No jobs found for the selected criteria.';
        jobList.appendChild(noResult);
    }
}
document.getElementById('search').addEventListener('click', function() {
    document.getElementById('category').value = '';
    document.getElementById('location').value = '';
});
document.getElementById('category').addEventListener('click', function() {
    document.getElementById('search').value = '';
});
document.getElementById('button').addEventListener('click', ()=> {
    fetchJobs();
});


function openPDF() {
    window.open('./resume/resume.pdf', '_blank'); 
}

