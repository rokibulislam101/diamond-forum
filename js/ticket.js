// Discuss Function Section--
fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
  .then(response => {
    return response.json();
  })
  .then(postsData => {
    let postsHTML = '';
    postsData.posts.map(post => {
      postsHTML += `<div class="flex bg-neutral-100 m-5 p-5 rounded-2xl gap-5">
          <div class="relative">
            <img src="${
              post.image
            }" alt="img" class="profile-img w-20 rounded-3xl" />
            ${
              post.isActive
                ? '<div class="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full"></div>'
                : '<div class="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></div>'
            }
          </div>
          <div class="w-full">
            <div class="flex gap-4 pb-2">
              <p>#${post.category}</p>
              <p>Author: ${post.author.name || 'Unknown'}</p>
            </div>
            <h2 class="font-bold py-2">${post.title}</h2>
            <p class="py-2">${post.description}</p>
            <hr class="border-dashed">
            <div class="flex justify-between items-center">
              <div class="flex gap-5">
                <p><i class="fa-regular fa-message me-3"></i>${
                  post.comment_count
                }</p>
                <p><i class="fa-regular fa-eye me-3"></i>${post.view_count}</p>
                <p><i class="fa-regular fa-clock me-3"></i>${
                  post.posted_time
                } min</p>
              </div>
              <button class="show-btn btn bg-green-400 text-white p-2 btn-circle flex justify-center items-center rounded-full" id="addButton"><i class="fa-regular fa-envelope-open"></i></button>
            </div>
          </div>
        </div>`;
    });
    document.getElementById('posts').innerHTML = postsHTML;

    // Add event listener after setting the innerHTML
    addEventListenersToButtons();
  })
  .catch(err => {
    console.log(err);
  });

function addEventListenersToButtons() {
  const allBtn = document.getElementsByClassName('show-btn');
  let count = 0;
  for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
      count = count + 1;
      document.getElementById('read-count').innerText = `(${count})`;
    });
  }
}







// // Additional-Info Function Section--
// document.getElementById('addButton').addEventListener('click', () => {
//   fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
//     .then(response => {
//       return response.json();
//     })
//     .then(postsData => {
//       let postsHTML = '';
//       postsData.posts.map(post => {
//         postsHTML += `<div class="flex bg-white justify-between p-5 rounded-2xl my-3">
//                 <h2 class="font-bold py-2">${post.title}</h2>
//                 <p><i class="fa-regular fa-eye me-3"></i>${post.view_count}</p>
//               </div>`;
//       });
//       document.getElementById('additional-info').innerHTML = postsHTML;
//       document.getElementById('additional-info').style.display = 'block';
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });






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

          <p class="posted-date my-2">
            <i class="fa-regular fa-calendar"></i>
            ${values.author.posted_date || 'No publish date'}
          </p>

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
