export function loadContact(){

  const contentDiv = document.querySelector("#content");

  function newElem(elem, classText='', text='', src='', alt=''){
    const child = document.createElement(elem);
    if(classText) child.classList.add(classText);
    if(text) child.textContent = text;

    if(elem === "img"){
      child.src = src;
      child.alt = alt;
      child.loading = "lazy";
    }
    return child;
  }

  const aboutWrapper = newElem("div", "about-wrapper");

  const leftSection = newElem("section", "left-image");

  const leftImage = newElem("img", "", "", "./images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg", "restaurant");
  leftSection.appendChild(leftImage);

  const rightSection = newElem("section", "right-section");
  const contactH2 = newElem("h2", '', "Contact Us");
  const contactPara = newElem("p", '', "We’re here to help you with anything—from inquiries about our services to feedback that helps us grow. Reach out anytime, and our team will get back to you as soon as possible. Cozy coffee, orem ipsum dolor sit amet consectetur, adipisicing elit. Laborum perspiciatis expedita excepturi ab, dolor tempora eligendi, quo nulla error quae dolorum iste velit esse possimus nisi nobis. Quis, obcaecati vel? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore fuga qui, reprehenderit consequatur delectus culpa corporis doloribus nisi distinctio soluta maxime, nesciunt recusandae rerum ad ratione a odio? A, maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut dicta perspiciatis possimus quam, illo velit aut culpa tempora nobis illum, ad eveniet unde distinctio quo officiis, nisi minus iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis ullam nulla commodi quasi ut, cum accusamus laboriosam minima assumenda maiores quos numquam ducimus consectetur necessitatibus doloribus itaque sed iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum aperiam nemo atque dolorem ea dolores at sequi sed modi tempore maxime eos, cumque quis quo repellat expedita quas animi.");

  const officeH3 = newElem("h3", '', "Our Office");
  const officePara = newElem("p", '', "Cozy Coffee HQ, Green Street, 4th Avenue , nowhere, unknownn – 132012,Ph: +12 358930200");

  const supprotH3 = newElem("h3", "", "Customer Support");
  const supportP = newElem("p", '', "Our support team is always ready to assist you with reservations, menu-related questions, or general inquiries. Expect a response within 24 hours on working days.");
  const supportMail = newElem("p", '', "email: cozycoffee2@tempmail.com");

  const followH = newElem("h3", '', 'Follow Us');
  const folowT = newElem("p", '', "Twitter: @cozycoffee");
  const folowI = newElem("p", '', 'Insta: @czycffe');

  rightSection.append(contactH2, contactPara, officeH3, officePara, supprotH3, supportP, supportMail, followH, folowT, folowI);
  aboutWrapper.append(leftSection, rightSection);
  contentDiv.append(aboutWrapper);
}