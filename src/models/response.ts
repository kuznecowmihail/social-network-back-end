class ResponseObject<T> {
    resultCode: Number;
    data: T;
    constructor(resultCode: Number, data: T) {
        this.resultCode = resultCode;
        this.data = data;
    }
}
export default ResponseObject;