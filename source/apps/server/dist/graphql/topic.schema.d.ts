import { User } from './user.schema'
import { Question } from './question.schema'
import { QuizAttempt } from './quizAttempt.schema'
import { TopicContributor } from './topicContributor.schema'
import { TopicAdmin } from './topicAdmin.schema'
declare enum ContributionAllowance {
  FALSE = 0,
  CREATE_ONLY = 1,
  ANSWER_ONLY = 2,
  TRUE = 3,
}
export declare class Topic {
  id: string
  name: string
  isPublic: boolean
  format: string
  contributionAllowance: ContributionAllowance
  distribution: string
  owner: User
  createdAt: Date
  updatedAt: Date
  quizAdmins: TopicAdmin[]
  quizContributors: TopicContributor[]
  questions: Question[]
  attempts: QuizAttempt[]
}
export {}
