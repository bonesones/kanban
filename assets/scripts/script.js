const tasks = document.querySelector('.main');
const modalBackground = document.querySelector('.modal-background-disable')
const modalAddTask = document.querySelector('.tasks-menu-add')
const modalAddTaskHeader = document.querySelector('.tasks-menu-add-form__header')
const modalAddTaskSubmit = document.querySelector(".tasks-menu-add-fieldset__submit");

const openTaskModal = function(e){
    const target = e.target;

    if(target.classList.contains('tasks__add-button')){
        modalBackground.classList.add('modal-background-disable_active')
        modalAddTask.classList.add('tasks-menu-add_active')
    }
}

const closeTaskModal = function(e){
    modalBackground.classList.remove('modal-background-disable_active')
    modalAddTask.classList.remove('tasks-menu-add_active')
}


const clearInputValue = function(e){
    const target = e.target;

    if(target.classList.contains('tasks-menu-add-fieldset__clear-field-button-image')){
        parent = target.closest('.tasks-menu-add-fieldset__item')
        parent.querySelector('.tasks-menu-add-fieldset__area').value = "";
    }
}

tasks.addEventListener('click', openTaskModal)

modalBackground.addEventListener('click', closeTaskModal)

modalAddTask.addEventListener('click', clearInputValue);

/*modalAddTaskSubmit.addEventListener('submit', (e) => {
    e.preventDefault();


})*/