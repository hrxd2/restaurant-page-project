import aboutImage from "./images/about-image.jpg";
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";


export function pageLoad(){
  
  function newElem(element, className='', text='') {
    const elem = document.createElement(`${element}`);
    elem.classList.add(`${className}`);
    elem.textContent = `${text}`;
    
    return elem;
  }

  function imgDiv(className, src, alt, figHtml='') {
    const div = document.createElement("div");
    div.classList.add(`${className}`);

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${alt}`;
    img.loading = "lazy";

    const figCaption = document.createElement("figcaption");
    figCaption.innerHTML = `${figHtml}`;

    div.append(img, figCaption);

    return div;
  }

  const contentDiv = document.querySelector("#content");

  const sectionOne = newElem("section", "about-section");
  const aboutDiv = newElem("div", "about-text");
  const aboutHeader = newElem("h3", 'hText', "Cozy Coffee, your warm corner in the busy world.");

  const aboutPara = newElem("p", 'pText', "Here, every cup is brewed with care, every aroma tells a story, and every visit feels like home. Whether you’re stopping by for a rich espresso, a smooth latte, or a quiet moment to unwind, Cozy Coffee is the place where comfort and flavor meet. Sit back, relax, and enjoy the experience.");

  const imageDiv = imgDiv("image-section", aboutImage, "cafe-image", `Photo by <a href="https://unsplash.com/@subagjav?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rizky Subagja</a> on <a href="https://unsplash.com/photos/two-clear-drinking-glasses-on-top-of-brown-wooden-table-1k7TnX5GAww?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
    );

  aboutDiv.append(aboutHeader, aboutPara);
  sectionOne.append(aboutDiv, imageDiv);
  contentDiv.appendChild(sectionOne);


  // secondSection popular items;

  const loremPara = () => {
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at quia provident inventore quae sapiente accusamus neque unde beatae quisquam. Beatae alias quaerat saepe sed, dolor quidem ab quas iure."
    return p;
  }

  const sectionTwo = newElem("section", "popular-items");

  const itemOne = imgDiv("image-wrapper", photo2, "famous-coffee", `Photo by <a href="https://unsplash.com/@subagjav?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rizky Subagja</a> on <a href="https://unsplash.com/photos/two-clear-drinking-glasses-on-top-of-brown-wooden-table-1k7TnX5GAww?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`);
  itemOne.appendChild(loremPara());
  const itemTwo = imgDiv("image-wrapper", photo1, "famous-coffee2", `Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/white-ceramic-cup-filled-with-coffee-beside-glass-of-water-ynwSQ9Bd6cA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`);
  itemTwo.appendChild(loremPara());
  const itemThree = imgDiv("image-wrapper", photo3, "famous-coffee3", `Photo by <a href="https://unsplash.com/@nicsandman20?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nicholas Ng</a> on <a href="https://unsplash.com/photos/a-desk-with-a-laptop-computer-sitting-on-top-of-a-wooden-table-Jvnbz-5VO90?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`);
  itemThree.appendChild(loremPara());

  sectionTwo.append(itemOne, itemTwo, itemThree);
  contentDiv.append(sectionTwo);
}

