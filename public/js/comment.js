const newCommentHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#newComment').value.trim();
    const post_id = document.querySelector('#renderPost').getAttribute('postid');

    if (text && post_id) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ text, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('failure');
        }
    }
};

document.querySelector('#commentForm').addEventListener('submit', newCommentHandler);