const tasks = document.querySelectorAll('.tasks');
const modalBackground = document.querySelector('.modal-background-disable')
const modalAddTaskToDo = document.querySelector('#add-toDo')
const modalContainer = document.querySelector('.tasks-menu-add')
const modalAddTaskInWork = document.querySelector('#add-inWork')
const modalAddTaskHeader = document.querySelector('.tasks-menu-add-form__header')
const modalAddTaskSubmit = document.querySelector(".tasks-menu-add-fieldset__submit");

const openPopupSettings = function(popup){
    popup.classList.add('tasks__settings-menu_active');
}

const closePopupSettings = function(popup){
    popup.classList.remove('tasks__settings-menu_active')
}

const openTaskModal = function(e, modal){
    const target = e.target;

    if(target.classList.contains('tasks__add-button')){
        modalBackground.classList.add('modal-background-disable_active')
        modal.classList.add('tasks-menu-add_active')
    }
}

const closeTaskModal = function(e){
    modalBackground.classList.remove('modal-background-disable_active')
    document.querySelector('.tasks-menu-add_active').classList.remove('tasks-menu-add_active')
}


const clearInputValue = function(e){
    const target = e.target;

    if(target.classList.contains('tasks-menu-add-fieldset__clear-field-button-image')){
        parent = target.closest('.tasks-menu-add-fieldset__item')
        parent.querySelector('.tasks-menu-add-fieldset__area').value = "";
    }
}
tasks.forEach(task => task.addEventListener('click', (e) => {
    const target = e.target;

    if(target.closest('.tasks__settings')){
        let popup = target.closest('.tasks').querySelector('.tasks__settings-menu');
        openPopupSettings(popup)
        console.log(target.closest('.task__settings'))
    }

    if(task.querySelector('.tasks__title').textContent === "To do"){
        openTaskModal(e, modalAddTaskToDo)
    } else if (task.querySelector('.tasks__title').textContent === "To do") {
        openTaskModal(e, modalAddTaskInWork)
    }

}));

modalBackground.addEventListener('click', closeTaskModal);

modalContainer.addEventListener('click', clearInputValue);