import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql'
import { User } from './user.schema'
import { Topic } from './topic.schema'

@ObjectType()
export class Question {
  @Field((type) => ID)
  id: string

  @Field()
  topic: Topic

  @Field()
  creator: User

  @Field()
  question: string

  @Field((type) => Float)
  correctRate: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
