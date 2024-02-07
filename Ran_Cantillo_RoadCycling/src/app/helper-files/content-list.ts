import { Content } from "./content-interface";

export class ContentList {
    private array: Content[];

    constructor() {
        this.array = [];
    }

    get content(): Content[] {
        return this.array;
    }

    add(newContent: Content): void {
        this.array.push(newContent);
    }

    countItems(): number {
        return this.array.length;
    }

    getFriendlyHtml(i: number): string {
        const arrayItem = this.array[i];

        if (!arrayItem) {
            return "<p>Invalid index</p>";
        }

        let output = `<div>
                        <h3>${arrayItem.title}</h3>
                        <p>${arrayItem.description}</p>
                        <p>${arrayItem.creator}</p>
                        <img src="${arrayItem.imgURL}" alt="${arrayItem.title}">
                        <p>${arrayItem.type}</p>
                      </div>`;

        return output;
    }
}