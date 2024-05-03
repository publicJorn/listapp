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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const list_entity_1 = require("./entities/list.entity");
let ListsService = exports.ListsService = class ListsService {
    constructor(listRepo) {
        this.listRepo = listRepo;
    }
    async findAll() {
        return await this.listRepo.find();
    }
    async findOne(id) {
        const list = await this.listRepo.findOne({ where: { id }, relations: { items: true } });
        if (!list) {
            throw new common_1.NotFoundException(`List ${id} not found`);
        }
        return list;
    }
    async create(createListDto) {
        const list = new list_entity_1.List();
        list.title = createListDto.title.trim();
        await this.listRepo.save(list);
        return 'List created';
    }
    async update(id, listDto) {
        listDto.title = listDto.title.trim();
        const list = await this.listRepo.findOneBy({ id });
        if (!list) {
            throw new common_1.NotFoundException(`List ${id} not found`);
        }
        await this.listRepo.save({ ...list, ...listDto });
        return `List ${id} updated`;
    }
    async remove(id) {
        const report = await this.listRepo.delete(id);
        if (!report.affected) {
            throw new common_1.NotFoundException(`List ${id} not found`);
        }
        return `List ${id} removed`;
    }
};
exports.ListsService = ListsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(list_entity_1.List)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ListsService);
//# sourceMappingURL=lists.service.js.map