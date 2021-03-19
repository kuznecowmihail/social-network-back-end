class Post {
    id: Number;
    text: string;
    userId: Number;
    likesCount: Number;
    constructor(id: Number, text: string, userId: Number, likesCount: Number) {
        this.id = id;
        this.text = text;
        this.userId = userId;
        this.likesCount = likesCount;
    }
}
export default Post;