import { Field, ObjectType } from '@nestjs/graphql'
import { User } from './user.schema'
import { Topic } from './topic.schema'

@ObjectType()
export class TopicContributor {
  @Field()
  topic: Topic

  @Field()
  user: User

  @Field()
  createdAt: Date
}
