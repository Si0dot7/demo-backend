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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const cat_schema_1 = require("./schemas/cat.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CategoryService = class CategoryService {
    constructor(catModel) {
        this.catModel = catModel;
    }
    async findAll() {
        return this.catModel.find();
    }
    async findById(id) {
        return this.catModel.findById(id);
    }
    async createCat(CreateCatDto) {
        const createCat = new this.catModel(CreateCatDto);
        return createCat.save();
    }
    async updateCat(id, UpdateCatDto) {
        return this.catModel.findByIdAndUpdate(id, UpdateCatDto, { new: true });
    }
    async deleteCat(id) {
        return this.catModel.findByIdAndDelete(id);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(cat_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoryService);
//# sourceMappingURL=categories.service.js.map