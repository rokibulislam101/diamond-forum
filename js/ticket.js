

// Card Function Section--
fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  .then(data => {
    return data.json();
  })
  .then(completedata => {
    let data1 = '';
    completedata.map(values => {
      data1 += `<div class="card">
          <img src="${values.cover_image}" alt="img" class="cover_image" />
          
          <h2 class="posted-date">
            <i class="fa-regular fa-calendar"></i>
            ${values.author.posted_date || 'No publish date'}
          </h2>

          <h1 class="title">${values.title}</h1>
          <p>${values.description}</p>
          <div class="author-section">
            <img src="${
              values.profile_image
            }" alt="author-img" class="profile-picture" />
            <div class="author-details">
              <h2>${values.author.name || 'Unknown'}</h2>
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
