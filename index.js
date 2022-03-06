
// inputevent.addEventListener(onkeyup,handleChange);

// function handleChange(){
//     console.log("hello")
// }
fetchdata();

function start (list){




    const body = document.querySelector("body");
    const parentElement = document.createElement("div");

    body.appendChild(parentElement);
    const inputElement = document.createElement("input");
    inputElement.classList.add("input");
    parentElement.classList.add("parent");
    parentElement.appendChild(inputElement);
    const search=document.createElement('div');
    parentElement.appendChild(search);
    search.classList.add('children');
    search.classList.add('passive');
    const childDiv = document.createElement("div");
    parentElement.appendChild(childDiv);
    childDiv.classList.add("child");
    // inputElement.addEventListener('onkeyup',()=>{
    //     console.log('hi')
    // })

    let inputevent=document.querySelector('.input');
    


    let htmlElement = list.map((users) => {
        return `<div id=${users.name} class="element_container">
                    <div  class="name">${users.name}</div>
                    <div class="type">${users.type}</div>
                    <div class="website">${
                      users.website === null
                        ? "no website Sorry"
                        : users.website
                    }</div>
                    <div class="phone">${users.phone}</div>
                </div>`;
    
      }).join('');


    childDiv.innerHTML=htmlElement;

    inputevent.onkeyup=function(e){
        let element=document.querySelector('.child');
        if(e.target.value.trim()!==""){
            
            
            element.classList.add("passive");
        
            let listSearch=list.filter(users=>users.name.includes(e.target.value));
            
            search.classList.remove('passive');
            
            let searchhtmlelement= listSearch.map(users=>{
                return `<div id=${users.name} class="element_container">
                <div  class="name">${users.name}</div>
                <div class="type">${users.type}</div>
                <div class="website">${
                  users.website === null
                    ? "no website Sorry"
                    : users.website
                }</div>
                <div class="phone">${users.phone}</div>
            </div>`
            }).join('')

            search.innerHTML=searchhtmlelement;
            console.log(searchhtmlelement)

            
        } 
        
       
        
    }

    

}





//now add the entire divs of the last;

//fetch the data

async function fetchdata() {
  let list = await getList();
  const containerList = list.map((users) => {
    return {
      name: users.name,
      type: users.brewery_type,
      website: users.website_url,
      phone: users.phone,
    };

    // let htmlelement=

    //    `

    // `
  });
  start(containerList);
   


 


//  

  

}







async function getList() {
  let url = "https://api.openbrewerydb.org/breweries";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
