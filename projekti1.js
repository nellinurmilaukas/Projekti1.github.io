function addUIItem(txt) { //funktio add ul item
    let li = document.createElement("li"); //luodaan uusi li (elementti)
    li.innerHTML = txt; //teksti
    list.insertBefore(li, list.childNodes[0]); //siirretään nykyisestä sijainnista uuteen paikkaan
    const delBtn = document.createElement("button"); //deletointi buttoni 
    delBtn.textContent = "tehty"; //teksti poisto buttoniin
    li.appendChild(delBtn);  
    delBtn.addEventListener("click", (e) => { //tehtävän poistaminen
      li.parentNode.removeChild(li); //postaa luodun solmun(li)
      savedTasks = savedTasks.filter((e) => e !== txt); // poista muistissa oleva elementti
      localStorage.setItem("tasks", JSON.stringify(savedTasks)); //localStorage muisti
    });
  }
  let input = document.querySelector("#todo"); //input
  let btn = document.querySelector("#btn"); //nappi
  let list = document.querySelector("#list"); //lista
  // lataa tallennetut
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // lisää UI elementtit tallennettuihin taskeihin
  savedTasks.forEach(addUIItem); //luodaan forEach-silmukan jokaiselle objektitaulukon objektinkohdalle
  
  btn.addEventListener("click", () => {
    let txt = input.value;
    if (txt === "") { //jos kirjoituskenttä on tyhjä, tulee ilmoitus
      alert("Sinun piti kirjoittaa jotain!");
    } else { //jos kenttään on kirjoitettu jotain-->
      savedTasks.push(txt); //tallennetut tehtävät
      localStorage.setItem("tasks", JSON.stringify(savedTasks)); //tallennus localStorageen
      input.value = ""; //syötetty teksti
      addUIItem(txt); // lisää ul itemi
    }
  });
  
  list.addEventListener("click", (e) => { //tehtävien checkaus
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
  });
  