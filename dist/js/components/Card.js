export class Card {
    constructor(logo = "./imgs/logo.jpg", company = "Amazon", days = "5 days ago", title = "Senior UI/UX Designer", part = "Part Time", level = "Senior level", price = "$120/hr", ubication = "San Francisco, CA") {
        this.logo = logo;
        this.company = company;
        this.days = days;
        this.title = title;
        this.part = part;
        this.level = level;
        this.price = price;
        this.ubication = ubication;
        console.log('card');
    }
    innertHTML() {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        card.appendChild(cardContent);
        const logo = document.createElement("img");
        logo.src = "./imgs/logo.jpg";
        cardContent.appendChild(logo);
        document.body.appendChild(card);
        const save = document.createElement("button");
        save.textContent = "Save";
        cardContent.appendChild(save);
        const amazon = document.createElement("h2");
        amazon.textContent = "Amazon";
        cardContent.appendChild(amazon);
        const days = document.createElement("h3");
        days.textContent = "5 days ago";
        cardContent.appendChild(days);
        const Senior = document.createElement("h1");
        Senior.textContent = "Senior UI/UX DESIGNER";
        cardContent.appendChild(Senior);
        const part = document.createElement("button");
        part.textContent = "Part Time";
        cardContent.appendChild(part);
        const level = document.createElement("button");
        level.textContent = "Senior level";
        cardContent.appendChild(level);
        const line = document.createElement("hr");
        cardContent.appendChild(line);
        const price = document.createElement("h2");
        price.textContent = "$120/hr";
        cardContent.appendChild(price);
        const ubication = document.createElement("h3");
        ubication.textContent = "San Francisco, CA";
        cardContent.appendChild(ubication);
        const now = document.createElement("button");
        now.textContent = "Apply Now";
        cardContent.appendChild(now);
    }
    render() {
    }
}
//# sourceMappingURL=Card.js.map