const postPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newPostTitle').value.trim();
    const text = document.querySelector('#newPostText').value.trim();

    if (title && text) {
       const response = await fetch(`/api/posts`, {
           method: 'POST',
           body: JSON.stringify({ title, text }),
           headers: {
               'Content-Type': 'application/json',
           },
       });
       if (response.ok) {
           document.location.replace(`/dashboard`);
       } else {
           alert('failure');
       }
    }
}

document.querySelector('#postForm').addEventListener('submit', postPostHandler);