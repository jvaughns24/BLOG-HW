document.addEventListener('DOMContentLoaded', function() {
    const postContainer = document.getElementById('postContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postDiv.appendChild(postTitle);

        const postAuthor = document.createElement('p');
        postAuthor.textContent = `By: ${post.username}`;
        postDiv.appendChild(postAuthor);

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postDiv.appendChild(postContent);

        postContainer.appendChild(postDiv);
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('toggleMode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
