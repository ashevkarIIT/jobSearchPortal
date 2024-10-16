//create array of sample jobs 
const jobs = [
    { title: 'Frontend Developer', category: 'IT', location: 'New York' },
    { title: 'Marketing Specialist', category: 'Marketing', location: 'San Francisco' },
    { title: 'Financial Analyst', category: 'Finance', location: 'Chicago' },
    { title: 'Sales Executive', category: 'Sales', location: 'Austin' },
    { title: 'Backend Developer', category: 'IT', location: 'San Francisco' },
    { title: 'Marketing Manager', category: 'Marketing', location: 'Austin' },
    { title: 'Accountant', category: 'Finance', location: 'New York' },
    { title: 'Data Scientist', category: 'IT', location: 'Chicago' },
    { title: 'Product Manager', category: 'Business', location: 'Seattle' },
    { title: 'HR Manager', category: 'Human Resources', location: 'Denver' },
    { title: 'DevOps Engineer', category: 'IT', location: 'Austin' },
    { title: 'Business Analyst', category: 'Business', location: 'New York' },
    { title: 'Graphic Designer', category: 'Design', location: 'Los Angeles' },
    { title: 'Content Writer', category: 'Marketing', location: 'Seattle' },
    { title: 'Operations Manager', category: 'Operations', location: 'Miami' },
    { title: 'UX Designer', category: 'Design', location: 'San Francisco' },
    { title: 'Cloud Engineer', category: 'IT', location: 'Chicago' },
    { title: 'Financial Planner', category: 'Finance', location: 'Austin' }
];

function filterJobs(){
    // console.log("CLicked")
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const jobList = document.getElementById('jobList');
    const search = document.getElementById('search').value.toLowerCase();

    jobList.innerHTML = ''
    const filteredJobs = jobs.filter(job =>{
        return (
            (category === job.category || category === '')&&
            (location === job.location || location === '')&&
            (job.title.toLowerCase().includes(search) || search === '')
        )
    });
    // console.log(filteredJobs);

    if(filteredJobs.length > 0){
        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-Card bg-white p-6 rounded-lg shadow-lg'
            jobCard.innerHTML = `
            <h2 class = "text-xl font-bold mb-2">${job.title}</h2>
            <p class = "text-gray-900">Category: ${job.category}</p>
            <p class = "text-gray-900">Location: ${job.location}</p>
            `;
            jobList.appendChild(jobCard);
        });
        }else{            
            const noResult = document.createElement('p');
            noResult.className = 'text-red-600'
            noResult.innerHTML = 'No jobs found for the selected criteria.'
            jobList.appendChild(noResult);
        }
}
    
