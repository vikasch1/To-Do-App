let todoList=[
  {item:'Learn React',
  dueDate:'04/11/2023'},
  {item:'Host on server',
  dueDate:'04/11/2023'}
];
displayItems();

function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoDate=dateElement.value;
  let todoItem=inputElement.value;
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();

 

}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');
 let newHTML='';
  for(let i=0;i<todoList.length;i++){
    let item=todoList[i].item;
    let duedate=todoList[i].dueDate;
    newHTML+=`
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    `;
  

  }
  containerElement.innerHTML=newHTML;
 

}


