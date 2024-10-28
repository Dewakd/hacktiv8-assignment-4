// Select the form and profile elements
const profileForm = document.getElementById('profileForm');
const profileName = document.getElementById('profileName');
const profileRole = document.getElementById('profileRole');
const profileAvail = document.getElementById('profileAvail');
const profileAge = document.getElementById('profileAge');
const profileLocation = document.getElementById('profileLocation');
const profileExperience = document.getElementById('profileExperience');
const profileEmail = document.getElementById('profileEmail');
const formSection = document.getElementById('formSection');
const profilePictureUrl = document.getElementById('profilePictureIMG');

window.onload = loadProfileData;

function loadProfileData() {
    const savedProfile = localStorage.getItem('profileData');
    if (savedProfile) {
        const profileData = JSON.parse(savedProfile);

        profilePictureUrl.src = profileData.picture;
        profileName.textContent = profileData.fullName;
        profileRole.textContent = profileData.role;
        profileAvail.textContent = profileData.availStatus;
        profileAge.textContent = profileData.age;
        profileLocation.textContent = profileData.location;
        profileExperience.textContent = profileData.experience + ' Tahun';
        profileEmail.textContent = profileData.email;
    }
}


function editButton() {

    formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';

    document.getElementById('profilePicture').value = profilePictureUrl.src;
    document.getElementById('fullName').value = profileName.textContent;
    document.getElementById('role').value = profileRole.textContent;
    document.getElementById('availStatus').value = profileAvail.textContent;
    document.getElementById('age').value = profileAge.textContent;
    document.getElementById('lokasi').value = profileLocation.textContent;
    document.getElementById('yearsExp').value = profileExperience.textContent.split(' ')[0]; // Remove 'Tahun'
    document.getElementById('email').value = profileEmail.textContent;
}

profileForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture').value;
    const fullName = document.getElementById('fullName').value;
    const role = document.getElementById('role').value;
    const availStatus = document.getElementById('availStatus').value;
    const age = document.getElementById('age').value;
    const lokasi = document.getElementById('lokasi').value;
    const yearsExp = document.getElementById('yearsExp').value;
    const email = document.getElementById('email').value;


    profilePictureUrl.src = profilePictureInput;
    profileName.textContent = fullName;
    profileRole.textContent = role;
    profileAvail.textContent = availStatus;
    profileAge.textContent = age;
    profileLocation.textContent = lokasi;
    profileExperience.textContent = yearsExp + ' Tahun';
    profileEmail.textContent = email;


    const profileData = {
        picture: profilePictureInput,
        fullName: fullName,
        role: role,
        availStatus: availStatus,
        age: age,
        location: lokasi,
        experience: yearsExp,
        email: email
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Hide the form section after submission
    formSection.style.display = 'none';
});
