// Card Function Section--
fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  .then(data => {
    return data.json();
  })
  .then(completedata => {
    let data1 = '';
    completedata.map(values => {
      data1 += `<div class="card border p-3">
          <img src="${
            values.cover_image
          }" alt="img" class="cover_image rounded-2xl pb-2" />
          
          <h2 class="posted-date my-2">
            <i class="fa-regular fa-calendar"></i>
            ${values.author.posted_date || 'No publish date'}
          </h2>

          <h1 class="title font-bold py-2">${values.title}</h1>
          <p class="py-2">${values.description}</p>
          <div class="author-section flex py-2 items-center">
            <img class="w-20 rounded-full me-4" src="${
              values.profile_image
            }" alt="author-img" class="profile-picture" />
            <div class="author-details">
              <h2 class="font-bold py-2">${
                values.author.name || 'Unknown'
              }</h2>
              <p>${
                values.author.designation || values.author.title || 'Unknown'
              }</p>
            </div>
          </div>
        </div>`;
    });
    document.getElementById('cards').innerHTML = data1;
  })
  .catch(err => {
    console.log(err);
  });
