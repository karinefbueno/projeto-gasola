export type FavoriteTypes = {
  id: string
  name: string | null
  login: string
  avatar_url: string
  html_url: string
}

export type UserTypes = {
  name: string
  id: string
  location: string | null
  login: string
  avatar_url: string
  public_repos: string
  followers: string
  following: string
  created_at: string
  // heartChecked?: string
  // heartEmpty?: string
  html_url: string
}
