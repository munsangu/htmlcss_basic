const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
	const list = document.createElement('li')
  list.textContent = `${text}`
  toDoList.append(list)
  list.classList.add('item')
}

addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');

function updateToDo(event) {
  if(event.target.classList.contains('item')) {
    event.target.classList.toggle('done')
  }
}

toDoList.addEventListener('click', updateToDo) 

const newToDo = document.createElement('li');
newToDo.textContent = '가계부 정리하기';
newToDo.classList.add('item');
toDoList.append(newToDo);