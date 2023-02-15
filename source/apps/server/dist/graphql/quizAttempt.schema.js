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
exports.QuizAttempt = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_schema_1 = require("./user.schema");
const topic_schema_1 = require("./topic.schema");
let QuizAttempt = class QuizAttempt {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    __metadata("design:type", String)
], QuizAttempt.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", topic_schema_1.Topic)
], QuizAttempt.prototype, "topic", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", user_schema_1.User)
], QuizAttempt.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], QuizAttempt.prototype, "answers", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], QuizAttempt.prototype, "score", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], QuizAttempt.prototype, "fullScore", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], QuizAttempt.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], QuizAttempt.prototype, "attemptEnd", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], QuizAttempt.prototype, "updatedAt", void 0);
QuizAttempt = __decorate([
    (0, graphql_1.ObjectType)()
], QuizAttempt);
exports.QuizAttempt = QuizAttempt;
//# sourceMappingURL=quizAttempt.schema.js.map