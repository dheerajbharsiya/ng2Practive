export class HotListDeal {
    public name: string;
    public description: string;
    public id: string;
    public imagePath: string;
    public price: string;

    constructor(name,description,id,imagePath,price) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.imagePath = imagePath;
        this.price = price;
    }
}