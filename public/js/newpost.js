const newPost = async () => {
  location.replace('/newPost')
};

document.querySelector('#new-post').addEventListener('click', newPost);
