const postUpdateHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#editPostTitle').value.trim();
    const text = document.querySelector('#editPostText').value.trim();
    const post_id = document.querySelector('#editPostForm').getAttribute('postid');

    if (title && text) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
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
};

const postDeleteHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('#editPostForm').getAttribute('postid');

    if (post_id) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failure');
        }
    }
};

document.querySelector('#editPostForm').addEventListener('submit', postUpdateHandler);
document.querySelector('#deletePost').addEventListener('click', postDeleteHandler);