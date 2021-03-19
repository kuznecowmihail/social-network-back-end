export default class User {
    id: Number;
    name: string;
    followed: Boolean;
    img: string | null;

    constructor(id: Number, name: string, followed: Boolean, img: string) {
        this.id = id;
        this.name = name;
        this.followed = followed;
        this.img = img;
    }
}