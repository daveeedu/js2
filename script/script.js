//  let postTitle = document.getElementById('post-title');
//  let postBody = document.getElementById('post-body');
//  let postForm = document.getElementById('post-form');

//  postForm.addEventListener('submit', creatPost)
 
 
 function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then((data) => {
         console.log(data)
         let postLayout = document.getElementById('post-layout')
         let html = " ";
         data.forEach(e => {
            //  console.log(e)
            html += `
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-end">
                                <h6 class= "text-danger">${e.id}</h6>
                            </div>
                            <h5 class="post-title mb-4">${e.title}</h5>
                            <p class="post-body">${e.body}</p>
                        </div>
                        <div class="d-flex justify-content-center mb-3">
                              <button type="submit" class="btn btn-warning id="click" onclick="page(${e.id})"  >Read More</button>
                            </div>
                    </div>
                </div>
            `
            postLayout.innerHTML = html
         });
     })
 }

 getPosts();

//  function creatPost(e) {
//     e.preventDefault();
//      let pTitle = postTitle.value;
//      let pBody = postBody.value;
//      console.log('Post Title', pTitle)
//      console.log('Post Body', pBody)
//      fetch('https://jsonplaceholder.typicode.com/posts', {
//          method: 'POST',
//          body: JSON.stringify({
//              title: pTitle,
//              body: pBody,
//              userId: 5
//          }),
//          headers: {
//              'Content-type': 'application/json: charset=UTF-8'
//          }
//      })
//      .then((response) => response.json())
//      .then((data) => {
//          console.log('post', data)
//          alert('Post created successfuly')
//      })
//  }



 function page(id) {
    
     localStorage.setItem("posts", id);

     postId = localStorage.getItem("posts");
     console.log(postId);

     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
     .then(response => response.json())
     .then((e) => {
         let postLayout = document.getElementById('post-layout')
         let html = "";

         html = `
         <div class="col-md-8 mt-5 m-auto">
            <div class="card mb-8" onclick="page()">
                <div class="card-body">
                    <div class="d-flex justify-content-end">
                        <h6 class= "text-danger">${e.id}</h6>
                    </div>
                    <h5 class="post-title mb-4 d-flex justify-content-center">${e.title} </h5>
                    <p class="post-body text-center">${e.body}</p>
                </div>
                <div class="d-flex justify-content-center mb-3">
                    <a href="index.html"><button type="submit" class="btn btn-warning" >Home page</button></a>
                </div>
            </div>
        </div>
         `
         postLayout.innerHTML = html
     })
     
 }

 