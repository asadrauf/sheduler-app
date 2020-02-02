
  /*-----------------Selecting of DOM Elements-----------------*/
  var dateElement = document.getElementById("date");
  var saveButton = document.getElementById("save");


  /*-----------------This willl show us today date-----------------*/
  var options = {weekday : "long", month:"short", day:"numeric"};
  var today = new Date();

  dateElement.innerHTML = today.toLocaleDateString("en-US", options);
 /*-----------------End of show us today date-----------------*/

 /*-----------------Start of saving input to the local storage and keep it persistent-----------------*/
    function save() { 
        var fieldValue = 
        document.getElementById('todo-text').value; 
        localStorage.setItem('task-1', JSON.stringify(fieldValue)); 
    } 

  //reading data from the local torage
    function get() { 
        var storedValue = JSON.parse(localStorage.getItem('task-1')); 
        if (storedValue) { 
        document.getElementById('todo-text').value = storedValue; 
      } 
    } 

  function save1() { 
    var fieldValue = 
        document.getElementById('todo-text1').value; 

    localStorage.setItem('task-2', JSON.stringify(fieldValue)); 
  } 

  function get1() { 
    var storedValue = JSON.parse(localStorage.getItem('task-2')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text1').value = storedValue; 
    } 
  } 


  function save2() { 
    var fieldValue = 
        document.getElementById('todo-text2').value; 

    localStorage.setItem('task-3', JSON.stringify(fieldValue)); 
    //     localStorage.setItem("first", JSON.stringify(todos));
  } 

  //reading data 
  function get2() { 
    var storedValue = JSON.parse(localStorage.getItem('task-3')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text2').value = storedValue; 
    } 
  } 

  function save3() { 
    var fieldValue = 
        document.getElementById('todo-text3').value; 

    localStorage.setItem('task-4', JSON.stringify(fieldValue)); 
  } 



  function get3() { 
    var storedValue = JSON.parse(localStorage.getItem('task-4')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text3').value = storedValue; 
    } 
  } 


  function save4() { 
    var fieldValue = 
        document.getElementById('todo-text4').value; 

    localStorage.setItem('task-5', JSON.stringify(fieldValue)); 
    //     localStorage.setItem("first", JSON.stringify(todos));
  } 

  //reading data 
  function get4() { 
    var storedValue = JSON.parse(localStorage.getItem('task-5')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text4').value = storedValue; 
    } 
  } 

  function save5() { 
    var fieldValue = 
        document.getElementById('todo-text5').value; 

    localStorage.setItem('task-6', JSON.stringify(fieldValue)); 
  } 



  function get5() { 
    var storedValue = JSON.parse(localStorage.getItem('task-6')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text5').value = storedValue; 
    } 
  } 


  function save6() { 
    var fieldValue = 
        document.getElementById('todo-text6').value; 

    localStorage.setItem('task-7', JSON.stringify(fieldValue)); 
    //     localStorage.setItem("first", JSON.stringify(todos));
  } 

  //reading data 
  function get6() { 
    var storedValue = JSON.parse(localStorage.getItem('task-7')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text6').value = storedValue; 
    } 
  } 

  function save7() { 
    var fieldValue = 
        document.getElementById('todo-text7').value; 

    localStorage.setItem('task-8', JSON.stringify(fieldValue)); 
  } 



  function get7() { 
    var storedValue = JSON.parse(localStorage.getItem('task-8')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text7').value = storedValue; 
    } 
  } 


  function save8() { 
    var fieldValue = 
        document.getElementById('todo-text8').value; 

    localStorage.setItem('task-9', JSON.stringify(fieldValue)); 
    //     localStorage.setItem("first", JSON.stringify(todos));
  } 

  //reading data 
  function get8() { 
    var storedValue = JSON.parse(localStorage.getItem('task-9')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text8').value = storedValue; 
    } 
  } 

  function save9() { 
    var fieldValue = 
        document.getElementById('todo-text9').value; 

    localStorage.setItem('task-10', JSON.stringify(fieldValue)); 
  } 



  function get9() { 
    var storedValue = JSON.parse(localStorage.getItem('task-10')); 
    if (storedValue) { 

        document.getElementById( 
            'todo-text9').value = storedValue; 
    } 
  } 



  function clearLocalStorage(){
    localStorage.clear();
    window.location.reload();
  }












