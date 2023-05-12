"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const contact_repository_1 = require("./repositories/contact.repository");
const exceptions_1 = require("@nestjs/common/exceptions");
let ContactsService = class ContactsService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async create(createContactDto) {
        try {
            return await this.contactRepository.create(createContactDto);
        }
        catch (error) {
            throw new exceptions_1.NotAcceptableException();
        }
    }
    async findAll() {
        try {
            return await this.contactRepository.findAll({});
        }
        catch (error) {
            throw new exceptions_1.InternalServerErrorException();
        }
    }
    async findOne(id) {
        try {
            return await this.contactRepository.findOneById(id);
        }
        catch (error) {
            throw new exceptions_1.NotFoundException();
        }
    }
    async remove(id) {
        try {
            await this.contactRepository.findByIdAndDelete(id);
        }
        catch (error) {
            throw new exceptions_1.NotFoundException();
        }
    }
};
ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contact_repository_1.ContactRepository])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map