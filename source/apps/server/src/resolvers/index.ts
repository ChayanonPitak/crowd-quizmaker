import { Resolver, Query, Arg } from 'type-graphql'
import { Question } from '@generated/type-graphql'
import { Ctx } from 'type-graphql';
import { Context } from 'vm';

@Resolver()
export class CustomUserResolver {
    @Query(() => [Question])
    async randomQuestions(@Ctx() { prisma }: Context, @Arg("topicId") topicId: String) {
        const result = await prisma.$queryRaw`SELECT * FROM Question WHERE topicId=${topicId} ORDER BY RAND() LIMIT 3`
        return result
    }
}