let jobs = [];

function addJob() {
  const title = document.getElementById("jobTitle").value;
  const company = document.getElementById("company").value;

  if (title === "" || company === "") {
    alert("Please fill in both fields");
    return;
  }

  const job = {
    title: title,
    company: company
  };

  jobs.push(job);
  displayJobs();

  document.getElementById("jobTitle").value = "";
  document.getElementById("company").value = "";
}

function displayJobs() {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  jobs.forEach((job, index) => {
    jobList.innerHTML += `
      <div class="job">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
      </div>
    `;
  });
}
