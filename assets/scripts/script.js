const tasks = document.querySelector('.main');
const modalBackground = document.querySelector('.modal-background-disable')
const modalAddTask = document.querySelector('.tasks-menu-add')


tasks.onclick = function(e){
    const target = e.target;

    if(target.classList.contains('tasks__add-button')){
        modalBackground.classList.add('modal-background-disable_active')
        modalAddTask.classList.add('tasks-menu-add_active')
    }
}

modalBackground.onclick = function(){
    modalBackground.classList.remove('modal-background-disable_active')
    modalAddTask.classList.remove('tasks-menu-add_active')
}

modalAddTask.onclick = function(e){
    const target = e.target;

    let parent = null;

    if(target.classList.contains('tasks-menu-add-fieldset__clear-field-button-image')){
        parent = target.closest('.tasks-menu-add-fieldset__item')
        parent.querySelector('.tasks-menu-add-fieldset__area').value = "";
    }
}