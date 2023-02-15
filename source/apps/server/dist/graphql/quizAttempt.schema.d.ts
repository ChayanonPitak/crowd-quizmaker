import { User } from './user.schema'
import { Topic } from './topic.schema'
export declare class QuizAttempt {
  id: string
  topic: Topic
  user: User
  answers: string
  score: number
  fullScore: number
  createdAt: Date
  attemptEnd: Date
  updatedAt: Date
}
