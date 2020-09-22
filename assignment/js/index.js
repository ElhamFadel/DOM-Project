let siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
//header Element
const navel = document.querySelector(".container").firstElementChild.firstElementChild;//to get nav element
const links = navel.getElementsByTagName('a');//to get Html collection for a tag
links[0].textContent=siteContent.nav["nav-item-1"];//assign link 
links[1].textContent=siteContent.nav["nav-item-2"];
links[2].textContent=siteContent.nav["nav-item-3"];
links[3].textContent=siteContent.nav["nav-item-4"];
links[4].textContent=siteContent.nav["nav-item-5"];
links[5].textContent=siteContent.nav["nav-item-6"];
navel.nextElementSibling.src=siteContent.nav["img-src"];
// end first step 
const ctael = document.querySelector(".cta");//parent cta
const ctext = ctael.querySelector(".cta-text");// parent cta-text
const h1el = ctext.querySelector("h1");//h1
h1el.textContent = siteContent.cta.h1;
const buttonel = ctext.querySelector("button");//button
buttonel.textContent = siteContent.cta.button;
ctext.nextElementSibling.src = siteContent.cta["img-src"];
//end second step
const manCon = document.querySelector(".main-content");//parent main-content
const topCon = manCon.querySelector(".top-content");
const txtCon = topCon.querySelectorAll(".text-content");
txtCon[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
txtCon[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
//
txtCon[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
txtCon[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];
//middle-img
manCon.querySelector("img").src = siteContent["main-content"]["middle-img-src"];
//********** */
//contact
const btnCon = manCon.querySelector(".bottom-content");
const txtBtnCon = btnCon.querySelectorAll(".text-content");

txtBtnCon[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
txtBtnCon[0].querySelector("p").textContent = siteContent["main-content"]["services-content"]
//
txtBtnCon[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
txtBtnCon[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
//
txtBtnCon[2].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
txtBtnCon[2].querySelector("p").textContent = siteContent["main-content"]["services-content"];

//contact
const contect = document.querySelector(".contact");
contect.querySelector("h4").innerHTML = siteContent.contact["contact-h4"];
const paras = contect.querySelectorAll('p');
paras[0].textContent = siteContent.contact.address;
paras[1].textContent = siteContent.contact.phone;
paras[2].textContent = siteContent.contact.email;
//footer
document.querySelector("footer").querySelector('p').textContent = siteContent.footer.copyright;

//console.log(document.querySelector('script'));
buttonel.addEventListener('click',reset);
function reset(){
  document.body.textContent = " ";
 
  
  
}







