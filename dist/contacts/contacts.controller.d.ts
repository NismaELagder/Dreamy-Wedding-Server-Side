import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: CreateContactDto): Promise<import("./schemas/contact.schema").Contact>;
    findAll(): Promise<import("./schemas/contact.schema").Contact[]>;
    findOne(id: string): Promise<import("./schemas/contact.schema").Contact>;
    remove(id: string): Promise<void>;
}
