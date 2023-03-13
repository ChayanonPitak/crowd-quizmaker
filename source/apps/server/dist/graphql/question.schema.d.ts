import { User } from './user.schema'
import { Topic } from './topic.schema'
export declare class Question {
  id: string
  topic: Topic
  creator: User
  question: string
  correctRate: number
  createdAt: Date
  updatedAt: Date
}
