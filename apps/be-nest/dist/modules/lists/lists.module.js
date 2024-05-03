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
exports.ListsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const list_entity_1 = require("./entities/list.entity");
const item_entity_1 = require("../items/entities/item.entity");
const lists_service_1 = require("./lists.service");
const lists_controller_1 = require("./lists.controller");
let ListsModule = exports.ListsModule = class ListsModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.ListsModule = ListsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([list_entity_1.List, item_entity_1.Item])],
        controllers: [lists_controller_1.ListsController],
        providers: [lists_service_1.ListsService],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], ListsModule);
//# sourceMappingURL=lists.module.js.map