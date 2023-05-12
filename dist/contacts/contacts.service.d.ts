import { CreateContactDto } from './dto/create-contact.dto';
import { ContactRepository } from './repositories/contact.repository';
import { Contact } from './schemas/contact.schema';
export declare class ContactsService {
    private readonly contactRepository;
    constructor(contactRepository: ContactRepository);
    create(createContactDto: CreateContactDto): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: string): Promise<Contact | null>;
    remove(id: string): Promise<void>;
}
