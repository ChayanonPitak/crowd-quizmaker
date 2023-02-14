import { Field, ObjectType } from '@nestjs/graphql'
import { User } from './user.schema'
import { Topic } from './topic.schema'

@ObjectType()
export class TopicContributor {
  @Field()
  topic: Topic

  @Field()
  topicId: string

  @Field()
  user: User

  @Field()
  userId: string

  @Field()
  createdAt: Date
}
