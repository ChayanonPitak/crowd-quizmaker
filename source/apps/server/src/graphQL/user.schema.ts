import { Field, ObjectType } from '@nestjs/graphql'
import { Question } from './question.schema'
import { QuizAttempt } from './quizAttempt.schema'
import { TopicContributor } from './topicContributor.schema'
import { TopicAdmin } from './topicAdmin.schema'
import { Topic } from './topic.schema'

@ObjectType()
export class User {
  @Field()
  id: string

  @Field()
  username: string

  @Field()
  password: string

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field((type) => [Topic])
  ownedTopics: Topic[]

  @Field((type) => [TopicAdmin])
  topicsAdmin: TopicAdmin[]

  @Field((type) => [TopicContributor])
  quizContributor: TopicContributor[]

  @Field((type) => [Question])
  contributedQuestions: Question[]

  @Field((type) => [QuizAttempt])
  attemptedQuizzes: QuizAttempt[]
}
