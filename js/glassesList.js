export class GlassesList {
    constructor() {
        this.glist = [];

    }
    addGlasses(glassesNew) {
        this.glist.push(glassesNew);
    }

    renderGlasses() {
        let content = "";
        content = this.glist.reduce((glcontent, item, index) => {
            glcontent += `
                <div class = "col-4">
                    <img class = "img-fluid vglasses__items" onclick = "tryOnGlasses(event)" data-id ="${item.id}" src= "${item.src}" alt = "glaseses">
                </div>
            `;

            return glcontent;


        }, "");
        return content;
    }
}