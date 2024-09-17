import { select, create } from "./index.js"
import storyPicture from "./images/story-picture.jpeg";

const storyPage = () => {
    const divContent = select("#content");
    divContent.replaceChildren();

    create("div", divContent, "story");

    const story = select("#story");

    create("article", story);

    const article = select("article");

    create("img", article).src=storyPicture;
    create("div", article, "story-wrapper");

    const wrapper = select("#story-wrapper");

    create("h2", wrapper, "", "", "The Legacy of Hana Tea Shop");
    create("p", wrapper, "", "", `In a time when Japan was turned upside down by conflict, Hana Tea Shop emerged as a symbol of resilience and tradition. 
                                Founded by the Matsumoto family, Hana is more than just a tea shop — it's a tribute to their deep-rooted passion for 
                                Japanese tea and their remarkable perseverance through tough times.
                                During the war, as their world faced uncertainty, the Matsumotos clung to their cherished tea traditions. 
                                They had lost everything, so they transformed their beloved family home into Hana, creating a serene sanctuary amidst the chaos. 
                                Hana (花) means "flower", as a homage to the beautiful and peaceful cherry tree that stands just outside the shop. 
                                The place became a beacon of hope, where the soothing ritual of tea offered comfort and connection.
                                Today, Hana continues to honor that legacy. Step inside, and you'll find a warm, welcoming atmosphere that reflects the Matsumoto 
                                family's dedication. Our carefully selected teas, from rich matcha to delicate sencha, 
                                are brewed with the same love and care that saw the family through their darkest hours.
                                Hana is a place where history and hospitality come together, and every visit is a reminder of 
                                the strength of tradition and the beauty of resilience.`);
}

export { storyPage };