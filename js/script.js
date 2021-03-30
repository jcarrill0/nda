const myForm = document.querySelector('#myForm');
const entryComments = document.querySelector('#entry-comments');
const btnReset = document.querySelector('#resetForm');

document.addEventListener('DOMContentLoaded', () => {
    myForm.addEventListener('submit', addComment);
    btnReset.addEventListener('click', resetForm);
});

function addComment(e) {
    e.preventDefault();

    const name = myForm['name'].value,
          commentText = myForm['comment-text'].value;

    if(name !== "" && commentText !== "") {
        let commentBody =`
        <article class="comment">
            <div class="comment-header">
                <div class="comment-author">
                    <p><strong>${name.toLowerCase()}</strong> dice: </p>
                </div>
            </div>
            <blockquote class="comment-content">
                <p>${commentText}</p>
            </blockquote>
        </article>
        <hr style="margin: 1.5rem 0;">`;
        
        entryComments.insertAdjacentHTML("beforeend", commentBody);
        resetForm();
    } else {
        alert("Faltan campos por llenar")
        return
    }
}

function resetForm() {
    myForm.reset()
}