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
exports.Topic = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_schema_1 = require("./user.schema");
const question_schema_1 = require("./question.schema");
const quizAttempt_schema_1 = require("./quizAttempt.schema");
const topicContributor_schema_1 = require("./topicContributor.schema");
const topicAdmin_schema_1 = require("./topicAdmin.schema");
var ContributionAllowance;
(function (ContributionAllowance) {
    ContributionAllowance[ContributionAllowance["FALSE"] = 0] = "FALSE";
    ContributionAllowance[ContributionAllowance["CREATE_ONLY"] = 1] = "CREATE_ONLY";
    ContributionAllowance[ContributionAllowance["ANSWER_ONLY"] = 2] = "ANSWER_ONLY";
    ContributionAllowance[ContributionAllowance["TRUE"] = 3] = "TRUE";
})(ContributionAllowance || (ContributionAllowance = {}));
let Topic = class Topic {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Topic.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Topic.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Topic.prototype, "isPublic", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Topic.prototype, "format", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Topic.prototype, "contributionAllowance", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Topic.prototype, "distribution", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", user_schema_1.User)
], Topic.prototype, "owner", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Topic.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Topic.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [topicAdmin_schema_1.TopicAdmin]),
    __metadata("design:type", Array)
], Topic.prototype, "quizAdmins", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [topicContributor_schema_1.TopicContributor]),
    __metadata("design:type", Array)
], Topic.prototype, "quizContributors", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [question_schema_1.Question]),
    __metadata("design:type", Array)
], Topic.prototype, "questions", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [quizAttempt_schema_1.QuizAttempt]),
    __metadata("design:type", Array)
], Topic.prototype, "attempts", void 0);
Topic = __decorate([
    (0, graphql_1.ObjectType)()
], Topic);
exports.Topic = Topic;
//# sourceMappingURL=topic.schema.js.map