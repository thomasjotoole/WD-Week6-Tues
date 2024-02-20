//Function 
document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        //Collection of user input values
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const author = document.getElementById('postAuthor').value; // Capture the author name

        //Creates the elements for the new post
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const authorP = document.createElement('p');
        const contentP = document.createElement('p');
        const currentTime = new Date().toISOString().slice(0, 10);

        //Sets the content for the new post
        h2.textContent = title;
        authorP.innerHTML = `Posted on <time datetime="${currentTime}">${currentTime}</time> by ${author}`;
        contentP.textContent = content;

        //Adds the new elements to the post
        article.appendChild(h2);
        article.appendChild(authorP);
        article.appendChild(contentP);

        //Appends the new article to the blog post section
        document.getElementById('blogPosts').appendChild(article);

        //Clears
        blogForm.reset();
    });
});
