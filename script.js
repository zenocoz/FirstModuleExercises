//Starting from D6's exercise, use your Smartphone Shop Website and implement the following exercises
    /*
    EXERCISE 1 
     Create a new welcome alert message when the page successfully loads
    */
  window.onload = function () {
      window.alert("Welcome to the Masters Store");
      let button = document.querySelector("#changeP");
      button.onclick = changePContent;
      let toggle_img = document.querySelector("#toggle");
      toggle_img.onclick = toggleShowImages;

  };
  /* EXERCISE 2
      Write a function to change the Title of the page in something else (execute the function in browser console)
  */
  const changeTitle = function (newTitle) {
    document.querySelector("title").innerText = newTitle;
    //document.title
  };
  /* EXERCISE 3a
      Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
  */
  const addClassToTitle = function () {
      let heading = document.querySelector("h1");
      if(!heading.classList.contains("red-color")){
          heading.classList.add("red-color");
      }    
  };

  /* EXERCISE 3b
      Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).
  */

  //TODO check if possible to remove entire class
  const removeClassFromTitle = function () {
    let heading = document.querySelector("h1");
    if(heading.classList.contains("red-color")){   
        heading.classList.remove("red-color");
    }   

  };
  /* EXERCISE 4
      Add the following html snippet to your page:
          <h2 id="listTitle">Todo List</h2>
          <ul id="firstList">
              <li><p>1st</p></li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <ul id="secondList">
              <li>1st</li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <div>
              <p>This text is just for the exercise</p>
          </div>
  Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
  */
 //TODO works but check back on Nodes and why DIV capital
  const changePContent = function () {
      //create array of p
      //check parents, if child of div, access innerText 
      let allPs = document.querySelectorAll("p");
      for (let i = 0; i<allPs.length; i++) {
          if(allPs[i].parentNode.nodeName==="DIV") {
              allPs[i].innerText = "Here is some brand new content brought to you by JS";
          }
      }
  };

  /* EXERCISE 5
      Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content)
  */
  const changeListTitle = function (content) {
      let list_title = document.querySelector("#listTitle");
      list_title.innerText = content.target.value;  
      console.log(content);
  };



  /* EXERCISE 6
       Write a function to add a new item ONLY to the second list (create an input field + add button)
  */
  const addToTheSecond = function (content) {
      document.querySelector("#secondList").appendChild(content.nodeName); //TODO test

  };

  /* EXERCISE 7
      Write a function to make the first UL disappear (button)
  */
  const firstUlDisappear = function () {
      document.querySelector("#firstList").style.visibility = "hidden"; 
  };
  /* EXERCISE 8
      Write a function to make the background of every UL green (button)
  */
  const paintItGreen = function () {
      let ul_list = document.querySelectorAll("ul");
      for (let i = 0; i < ul_list.length; i++) {
          ul_list[i].style.backgroundColor = "green";
      }
  };

  /* EXERCISE 9
      Add a "magnifier function" to the table.
      When the user mouse goes on a table cell (not the image one) the font size must increase.
      HINT use mouseenter / mouseleave events
  */
  const makeThemMagnifiable = function () {
      let table_children = document.querySelector("td");
      for (let i = 0; i < table_children.length; i++) {
          if (table_children[i].contains("I") ) {
              //increase the font. find some method...
          }
      }

  };
  /* EXERCISE 10
      Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
  */
  const toggleShowImages = function () {
      let table_images = document.querySelectorAll("img");
      for (let i = 0; i < table_images.length; i++) {
          if(table_images[i].style.visibility === "hidden") {
              table_images[i].style.visibility === "visible";
          } else {
              table_images[i].style.visibility === "hidden";
          }
      }
  };


  //##### EXTRA

  /* EXERCISE 11
      Make the heading of the page change color radomly every time the user clicks on it
      */
  const makeItClickable = function () {};

  /*EXERCISE 12
    Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc*/

  //"LEGACY" CODE from Day 6
  
  function changeHeader(name) {
      let new_name = name;
      let id_name = document.querySelector("#name");
      id_name.textContent = new_name;
  }
  
  function changeColor(color) {
      let new_color = color;
      let current_color = document.body.style.backgroundColor = new_color;
  }

  function fakeFooter() {
      let fake_address = "Via della Conciliazione 1";
      document.querySelector("footer").innerText = fake_address;
  }

