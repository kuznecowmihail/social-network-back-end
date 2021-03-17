class Post {
    content: string;
    userId: Number;
    likeCount: Number;
    constructor(content: string, userId: Number, likeCount: Number) {
        this.content = content;
        this.userId = userId;
        this.likeCount = likeCount;
    }
}
export default Post;