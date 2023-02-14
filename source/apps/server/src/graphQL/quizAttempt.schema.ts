import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql'
import { User } from './user.schema'
import { Topic } from './topic.schema'

@ObjectType()
export class QuizAttempt {
  @Field((type) => ID)
  id: string

  @Field()
  topic: Topic

  @Field()
  topicId: string

  @Field()
  user: User

  @Field()
  userId: string

  @Field()
  answers: string

  @Field((type) => Int)
  score: number

  @Field((type) => Int)
  fullScore: number

  @Field()
  createdAt: Date

  @Field()
  attemptEnd: Date

  @Field()
  updatedAt: Date
}
