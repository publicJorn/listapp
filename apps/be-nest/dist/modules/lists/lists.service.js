"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsService = void 0;
const common_1 = require("@nestjs/common");
const list_dto_1 = require("./dto/list.dto");
let ListsService = exports.ListsService = class ListsService {
    constructor() {
        this.lists = [{ id: 1, title: 'Boodschappen' }];
    }
    create(createListDto) {
        const highestId = this.lists.reduce((highest, current) => (current.id > highest ? current.id : highest), 1);
        const list = new list_dto_1.ListDto();
        list.id = highestId + 1;
        list.title = createListDto.title;
        this.lists.push(list);
        return 'List created';
    }
    findAll() {
        return this.lists;
    }
    findOne(id) {
        const list = this.lists.filter((list) => list.id === id);
        if (!list) {
            throw new common_1.NotFoundException(`List ${id} not found`);
        }
        return list;
    }
    update(id, listDto) {
        const idx = this.lists.findIndex((list) => list.id === id);
        const list = this.lists[idx];
        if (!list) {
            throw new common_1.NotFoundException(`List ${id} not found`);
        }
        this.lists.splice(idx, 1, { ...list, ...listDto });
        return `List ${id} updated`;
    }
    remove(id) {
        const idx = this.lists.findIndex((list) => list.id === id);
        if (!idx) {
            throw new common_1.NotFoundException(`List ${id} not found`);
        }
        this.lists.splice(idx, 1);
        return `List ${id} removed`;
    }
};
exports.ListsService = ListsService = __decorate([
    (0, common_1.Injectable)()
], ListsService);
//# sourceMappingURL=lists.service.js.map