const addForm = document.querySelector('form.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//create the template function
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span> ${ todo } </span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

//filter function

const filterTodos = term => {
    //console.log(term);
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};

addForm.addEventListener('submit' , e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    //console.log(todo);

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }else{
        alert('Please add a todo action');
    }

});

//Delete list item
list.addEventListener('click' , e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//search for list items
search.addEventListener('keyup' , e => {
    //console.log(e.target.value);
    const term = e.target.value.trim().toLowerCase();
    filterTodos(term);
})