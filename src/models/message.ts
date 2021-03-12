import User from '../models/user';
import Dialog from '../models/dialog';

export default class Message {
    id: Number;
    message: string;
    userId: Number;
    dialogId: Number;
    date: Date;
    direction: string = '';
    constructor(id: Number, message: string, userId: Number, dialogId: Number, date: Date) {
        this.id = id;
        this.message = message;
        this.userId = userId;
        this.dialogId = dialogId;
        this.date = date;
    }
}