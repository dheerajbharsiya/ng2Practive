export class HotListDeal {
    public name: string;
    public description: string;
    public id: string;
    public imagePath: string;
    public owenarName: string;

    constructor(name,description,id,imagePath,owenarName) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.imagePath = imagePath;
        this.owenarName = owenarName;
    }
}