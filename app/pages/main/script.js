function logout(){
    if (confirm("Você está prestes a sair da sua conta") == true) {
        window.location.href = "../login/login.html";
      } else {}
}
function doneTask(){
    alert("Tarefa concluída!");
}
function editTask(){

}
function deleteTask(){
    if (confirm("Você está prestes a excluir esta tarefa") == true) {
        alert("Tarefa movida para a lixeira!");
      } else {}
}