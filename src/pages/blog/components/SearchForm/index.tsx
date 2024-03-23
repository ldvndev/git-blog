import { SearchFormContainer } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormInputSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormInputSchema>

interface SearchFormProps {
  length: number
  loadPost: (query?: string) => Promise<void>
}

export function SearchForm({ loadPost, length }: SearchFormProps) {
  const { handleSubmit, register, reset } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormInputSchema),
  })

  async function handleSearchPost(data: SearchFormInput) {
    await loadPost(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>{length} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
