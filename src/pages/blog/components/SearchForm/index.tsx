import { SearchFormContainer } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { handleSubmit, register } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  function handleSearchPost(data: SearchFormInput) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
