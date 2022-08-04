const btnGenerate = document.getElementById("btn-random");
const gendericon = document.getElementById("span-gender-icon");
const usercard = document.getElementById("div-user-card");
const names = document.getElementById("p-name");
const address = document.getElementById("p-address");
const email = document.getElementById("p-email");
const loading = document.getElementById("div-loading-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

btnGenerate.onclick = async () => {
  callApi();
  usercard = resp.data.result.picture.large;
  names.innerText = resp.data.result.name;
  address.innerText = resp.data.result.location;
  email.innerText = resp.data.result.email;
};
