const tasks = document.querySelectorAll('.tasks');
const modalBackground = document.querySelector('.modal-background-disable')
const modalAddTaskToDo = document.querySelector('#add-toDo')
const modalContainer = document.querySelector('.tasks-menu-add')
const modalAddTaskInWork = document.querySelector('#add-inWork')
const modalAddTaskHeader = document.querySelector('.tasks-menu-add-form__header')
const modalAddTaskSubmit = document.querySelector(".tasks-menu-add-fieldset__submit");
let editTaskPopup;


const openPopupSettings = function(popup, units){
    popup.classList.add('tasks__settings-menu_active');
    editTaskPopup = document.querySelector('.tasks__settings-menu_active');

    editTaskPopup.onclick = function(e){
        const target = e.target;
    
        console.log(target);
    
        console.log(target.closest('.tasks'))
        const tasks = target.closest('.tasks');
    
        if(target.classList.contains('tasks_delete-task')){
            removeModeTask(tasks);
        }
    }
}

const deleteCurrentTask = function(id){

}

const closePopupSettings = function(popup){
    popup.classList.remove('tasks__settings-menu_active')
    popup = undefined;
}

const removeModeTask = function(tasks){
    console.log(tasks, "воркаем")
    tasks.querySelectorAll('.tasks-task__remove-btn').forEach(btn => {
        btn.classList.add('tasks-task__remove-btn_active')
    })

    removeTaskButtons = document.querySelectorAll('.tasks-task__remove-btn_active')
    removeTaskButtons.forEach(btn => {
        btn.onclick = async function(e){
            let id = e.target.closest('.tasks-task').getAttribute("id");
            let task = e.target.closest('.tasks').getAttribute('id');

            await fetch(`/removeTask/${task}/${id}`, {
                method: "DELETE"
            });

            window.location.reload();
        }
    })
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

let popup = undefined;

tasks.forEach(task => task.addEventListener('click', (e) => {
    const target = e.target;


    if(target.closest('.tasks__settings')){
        popup = target.closest('.tasks').querySelector('.tasks__settings-menu');
        openPopupSettings(popup)
    } else if(popup && !target.closest('.tasks__settings-menu_active')){
        closePopupSettings(popup)
    }
    if(task.querySelector('.tasks__title').textContent === "To do"){
        openTaskModal(e, modalAddTaskToDo)
    } else if (task.querySelector('.tasks__title').textContent === "In work") {
        openTaskModal(e, modalAddTaskInWork)
    }

}));

modalBackground.addEventListener('click', closeTaskModal);

modalContainer.addEventListener('click', clearInputValue);
