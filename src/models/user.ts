export default class User {
    id: Number;
    name: string;
    password: string
    followed: Boolean;
    img: string | null;

    constructor(id: Number, name: string, password: string, followed: Boolean, img: string) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.followed = followed;
        this.img = img;
    }
}