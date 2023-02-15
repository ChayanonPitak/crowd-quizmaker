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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const question_schema_1 = require("./question.schema");
const quizAttempt_schema_1 = require("./quizAttempt.schema");
const topicContributor_schema_1 = require("./topicContributor.schema");
const topicAdmin_schema_1 = require("./topicAdmin.schema");
const topic_schema_1 = require("./topic.schema");
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [topic_schema_1.Topic]),
    __metadata("design:type", Array)
], User.prototype, "ownedTopics", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [topicAdmin_schema_1.TopicAdmin]),
    __metadata("design:type", Array)
], User.prototype, "topicsAdmin", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [topicContributor_schema_1.TopicContributor]),
    __metadata("design:type", Array)
], User.prototype, "quizContributor", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [question_schema_1.Question]),
    __metadata("design:type", Array)
], User.prototype, "contributedQuestions", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [quizAttempt_schema_1.QuizAttempt]),
    __metadata("design:type", Array)
], User.prototype, "attemptedQuizzes", void 0);
User = __decorate([
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.schema.js.map