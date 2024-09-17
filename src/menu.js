import { select, selectAll, create } from "./index.js"

const menuPage = () => {
    const divContent = select("#content");
    divContent.replaceChildren();

    create("div", divContent, "menu");

    const menu = select("#menu");

    [...Array(3)].forEach((_, i) => create("article", menu));

    const [firstArticle, secondArticle, thirdArticle] = selectAll("article");

    create("h2", firstArticle, "", "", "Tea Selection");
    create("ul", firstArticle, "", "first");

    create("h2", secondArticle, "", "", "Appetizers");
    create("ul", secondArticle, "", "second");

    create("h2", thirdArticle, "", "", "Desserts");
    create("ul", thirdArticle, "", "third");

    const [firstUl, secondUl, thirdUl] = selectAll("ul");

    [...Array(4)].forEach((_, i) => create("li", firstUl));
    [...Array(3)].forEach((_, i) => create("li", secondUl));
    [...Array(4)].forEach((_, i) => create("li", thirdUl));

    (() => {
        const [firstItem, secondItem, thirdItem, fourthItem] = selectAll(".first li");

        create("span", firstItem, "", "bold", "Matcha:");
        create("span", firstItem, "", "", " Premium powdered green tea, perfect for a traditional experience. ");
        create("span", firstItem, "", "bold", "$8.00");

        create("span", secondItem, "", "bold", "Sencha:");
        create("span", secondItem, "", "", " Refreshing and light green tea with a delicate flavor. ");
        create("span", secondItem, "", "bold", "$7.00");

        create("span", thirdItem, "", "bold", "Genmaicha:");
        create("span", thirdItem, "", "", " Green tea with roasted brown rice, offering a nutty aroma. ");
        create("span", thirdItem, "", "bold", "$6.50");

        create("span", fourthItem, "", "bold", "Hojicha:");
        create("span", fourthItem, "", "", " Roasted green tea with a toasty, caramel-like taste. ");
        create("span", fourthItem, "", "bold", "$7.50");
    })();

    (() => {
        const [firstItem, secondItem, thirdItem] = selectAll(".second li");

        create("span", firstItem, "", "bold", "Edamame:");
        create("span", firstItem, "", "", " Lightly salted steamed young soybeans. ");
        create("span", firstItem, "", "bold", "$5.00");

        create("span", secondItem, "", "bold", "Rice Crackers:");
        create("span", secondItem, "", "", " Crispy and savory, with a variety of flavors. ");
        create("span", secondItem, "", "bold", "$4.50");

        create("span", thirdItem, "", "bold", "Seaweed Salad:");
        create("span", thirdItem, "", "", " Refreshing seaweed salad with a tangy sesame dressing. ");
        create("span", thirdItem, "", "bold", "$6.00");
    })();

    (() => {
        const [firstItem, secondItem, thirdItem] = selectAll(".third li");

        create("span", firstItem, "", "bold", "Matcha Cheesecake:");
        create("span", firstItem, "", "", " Rich and creamy cheesecake with a hint of matcha. ");
        create("span", firstItem, "", "bold", "$7.50");

        create("span", secondItem, "", "bold", "Daifuku:");
        create("span", secondItem, "", "", " Sweet rice cakes filled with red bean paste or fruit. ");
        create("span", secondItem, "", "bold", "$5.00");

        create("span", thirdItem, "", "bold", "Mochi Ice Cream:");
        create("span", thirdItem, "", "", " Soft and chewy rice cake with a creamy ice cream center in various flavors. ");
        create("span", thirdItem, "", "bold", "$6.00");
    })();
}

export { menuPage };