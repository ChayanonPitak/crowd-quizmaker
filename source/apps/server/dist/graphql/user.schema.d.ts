import { Question } from './question.schema'
import { QuizAttempt } from './quizAttempt.schema'
import { TopicContributor } from './topicContributor.schema'
import { TopicAdmin } from './topicAdmin.schema'
import { Topic } from './topic.schema'
export declare class User {
  id: string
  username: string
  password: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
  ownedTopics: Topic[]
  topicsAdmin: TopicAdmin[]
  quizContributor: TopicContributor[]
  contributedQuestions: Question[]
  attemptedQuizzes: QuizAttempt[]
}
