import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(Override: Override = {}) {
    return new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'recipient-2',
        ...Override,
    });
}