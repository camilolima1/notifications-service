import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificatioonProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificatioonProps;

    constructor(props: Replace<NotificatioonProps, { createdAt?: Date}>){
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }
    }

    public get id(): string {
        return this._id;
    }

    public set recipientId(recipientId: string) {
        this.recipientId = recipientId;
    }

    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set content(content: Content) {
        this.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set category(category: string) {
        this.category = category;
    }

    public get category(): string {
        return this.props.category;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.readAt = readAt;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

}