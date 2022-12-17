import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory.notificatios-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipients notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationRepository);

        await notificationRepository.create(
            new Notification({
                content: new Content('This is a notification'),
                category: 'social',
                recipientId: 'recipient-1',
            })
        );

        await notificationRepository.create(
            new Notification({
                content: new Content('This is a notification'),
                category: 'social',
                recipientId: 'recipient-1',
            })
        );

        await notificationRepository.create(
            new Notification({
                content: new Content('This is a notification'),
                category: 'social',
                recipientId: 'recipient-2',
            })
        );

        const { count} = await countRecipientNotifications.execute({
            recipientId: 'recipient-1',
        });

        expect(count).toEqual(2);
    });
});