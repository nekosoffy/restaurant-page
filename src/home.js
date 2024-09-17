import homePictureOne from "./images/home-picture1.jpeg";
import homePictureTwo from "./images/home-picture2.jpeg";
import { select, selectAll, create } from "./index.js"

const homePage = () => {
    const divContent = select("#content");
    divContent.replaceChildren();

    create("div", divContent, "home");

    const home = select("#home");

    create("article", home);
    create("article", home);

    const [firstArticle, secondArticle] = selectAll("article");

    create("div", firstArticle, "", "text-wrapper");
    create("div", firstArticle, "", "image-wrapper");

    create("div", secondArticle, "", "image-wrapper");
    create("div", secondArticle, "", "text-wrapper");

    const [firstText, secondText] = selectAll(".text-wrapper");
    
    create("h2", firstText, "", "", `私たちの甘いデリカシーをお楽しみください！`);
    create("p", firstText, "", "", `Welcome to Hana, where we invite you to indulge in the serene experience of Japanese tea.
    Enjoy our carefully curated selection of fine teas, paired with delightful snacks and delicate desserts, all crafted to enhance your visit.
    Whether you're here to relax or celebrate, Hana offers a warm and inviting atmosphere to savor every moment.`);

    create("h2", secondText, "", "", `Explore our delights`);
    create("p", secondText, "", "", `For a personalized experience, you can browse our menu online and place your order for takeout or delivery. 
    Whether you're visiting us in person for a traditional tasting of our delicacies or enjoying Hana from the comfort of your home, 
    our commitment to quality and service ensures a delightful experience every time.`);
    create("button", secondText, "", "", `Order Now`).setAttribute("type","button");

    const [firstImage, secondImage] = selectAll(".image-wrapper");

    create("img", firstImage).src=homePictureOne;
    
    create("img", secondImage).src=homePictureTwo;
};

export { homePage };