import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  postsListLength: number
  fetchIssues: (query?: string) => Promise<void>
}

export function SearchForm({ postsListLength, fetchIssues }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: SearchFormInput) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer>
      <div>
        <h2>Posts</h2>
        <span>{postsListLength} posts</span>
      </div>

      <form onSubmit={handleSubmit(handleSearch)}>
        <input type="text" placeholder="Search" {...register('query')} />
      </form>
    </SearchFormContainer>
  )
}
