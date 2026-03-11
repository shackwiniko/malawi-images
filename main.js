const gallery = document.getElementById('gallery');
const uploadForm = document.getElementById('uploadForm');
const pictureInput = document.getElementById('pictureInput');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const files = pictureInput.files;

    for(let i=0; i<files.length; i++){
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(event){
            const div = document.createElement('div');
            div.classList.add('photo');
            div.innerHTML = `
                <img src="${event.target.result}" alt="${file.name}">
                <p>${file.name}</p>
                <a href="${event.target.result}" download="${file.name}">Download</a>
            `;
            gallery.appendChild(div);
        }

        reader.readAsDataURL(file);
    }
});