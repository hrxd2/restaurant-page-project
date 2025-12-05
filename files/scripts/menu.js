export function loadMenu(){

  const contentDiv = document.querySelector("#content");

  function newElem(elem, className='', text=''){
      const child =  document.createElement(elem);
      if(className) child.classList.add(className);
      if(text) child.textContent = text;
      return child;
  }
  
  function menuItem(classText='', src='', alt='', html, h2){
    const child = document.createElement("div");
    if(classText){
      child.classList.add(classText);
    }
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";

    const figCaption = document.createElement("figcaption");
    figCaption.innerHTML = html; 

    const itemName = document.createElement("h2");
    itemName.textContent = h2;
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus quo modi sint dignissimos, nostrum illum ea ratione porro velit aliquam odit assumenda vel suscipit quos aspernatur? Reprehenderit, magni eius.";

    child.append(img, figCaption,itemName, p);

    return child;
  }
  
  //menu-info
  const menuInfoDiv = newElem("div", "menu-info");
  const menuHeader = newElem("h2", '', "Menu");
  const menuPara = newElem("p", '', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum vitae itaque magni impedit repudiandae error laboriosam sunt qui exercitationem ullam illo sed sapiente fuga, dolore optio suscipit, soluta laudantium dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur iste libero explicabo maiores facere, odit ipsum doloribus voluptatem veniam incidunt. Porro nemo soluta placeat laboriosam amet illo asperiores molestiae.')

  menuInfoDiv.append(menuHeader, menuPara);
  contentDiv.appendChild(menuInfoDiv);

  //menu-wrapper
  const menuWrapper = newElem("div", "menu-wrapper");
  
  const item1 = menuItem("menu-items", `./images/menu1.jpg`, "menu1", `Photo by <a href="https://unsplash.com/@haberdoedas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haberdoedas</a> on <a href="https://unsplash.com/photos/coffee-and-a-purple-smoothie-sit-on-a-table-md0RSAP2IIY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`, "Coffee1");

  const item2 = menuItem("menu-items", `./images/menu2.jpg`, "menu2", `Photo by <a href="https://unsplash.com/@haberdoedas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haberdoedas</a> on <a href="https://unsplash.com/photos/coffee-and-a-purple-smoothie-sit-on-a-table-md0RSAP2IIY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`, "Muffins2");

  const item3 = menuItem("menu-items", "./images/menu3.jpg", "menu3", `Photo by <a href="https://unsplash.com/@haberdoedas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haberdoedas</a> on <a href="https://unsplash.com/photos/coffee-and-a-purple-smoothie-sit-on-a-table-md0RSAP2IIY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 `, "Coffee3");

  const item4 = menuItem("menu-items", "./images/menu4.jpg", "menu4", `Photo by <a href="https://unsplash.com/@haberdoedas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haberdoedas</a> on <a href="https://unsplash.com/photos/coffee-and-a-purple-smoothie-sit-on-a-table-md0RSAP2IIY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`, "Coffee4");
  
  const item5 = menuItem("menu-items", "./images/menu5.jpg", "menu5", `Photo by <a href="https://unsplash.com/@zhengsiting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">克里斯汀</a> on <a href="https://unsplash.com/photos/a-glass-of-beer-on-a-table-qaLYZFTcRDM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`, "Coffee5");

  const item6 = menuItem("menu-items", "./images/menu6.jpg", "menu6", `Photo by <a href="https://unsplash.com/@haberdoedas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haberdoedas</a> on <a href="https://unsplash.com/photos/coffee-and-a-purple-smoothie-sit-on-a-table-md0RSAP2IIY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`, "Coffee6");

  menuWrapper.append(item1, item2, item3, item4, item5, item6);
  contentDiv.appendChild(menuWrapper);
}