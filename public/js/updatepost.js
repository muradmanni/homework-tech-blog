const postId=document.querySelector('#post-id').value;
      

const updatePost = async (event) =>{
    event.preventDefault();

    var title = document.querySelector("#post-title").value;
    var content = document.querySelector("#post-content").value;

    if (title && content) {
        const response = await fetch('/post/update/'+ postId, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    })
        
        if (!response.ok) {
            showModal('Error','Error creating post, please check your details and try again.');
            return;
        }
        location.replace('/dashboard');
            
    }
    else{
        showModal('Incomplete details','Please complete the post data and press Create button.');
    }
}

const deletePost = async (event) =>{
    event.preventDefault();

    const response = await fetch('/post/delete/'+ postId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })

    location.replace('/dashboard');
}

document
    .querySelector('#update-post')
    .addEventListener('click', updatePost);


document
    .querySelector('#delete-post')
    .addEventListener('click', deletePost);
