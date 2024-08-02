import { useAppSelector } from '@/app/hooks'

import { selectUserById } from '../users/userSlice'

interface PostAuthorProps {
  userId: string
}

export const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useAppSelector((state) => selectUserById(state, userId))

  return <span>by {author?.name ?? 'Unknown author'}</span>
}
