import { Field, ObjectType } from '@nestjs/graphql'
import { User } from './user.schema'
import { Question } from './question.schema'
import { QuizAttempt } from './quizAttempt.schema'
import { TopicContributor } from './topicContributor.schema'
import { TopicAdmin } from './topicAdmin.schema'

enum ContributionAllowance {
  FALSE, /// No contributions allowed
  CREATE_ONLY, /// Only questions contribution
  ANSWER_ONLY, /// Only answers contribution
  TRUE, /// Both questions and answers contribution
}

@ObjectType()
export class Topic {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  isPublic: boolean

  @Field()
  format: string

  @Field()
  contributionAllowance: ContributionAllowance

  @Field()
  distribution: string

  @Field()
  owner: User

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field((type) => [TopicAdmin])
  quizAdmins: TopicAdmin[]

  @Field((type) => [TopicContributor])
  quizContributors: TopicContributor[]

  @Field((type) => [Question])
  questions: Question[]

  @Field((type) => [QuizAttempt])
  attempts: QuizAttempt[]
}
