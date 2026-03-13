import { useEffect, useState } from "react"

interface GithubData {
  login: string
  avatar_url: string
  public_repos: number
  followers: number
}

export function useGithub(username: string) {
  const [data, setData] = useState<GithubData | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(setData)
  }, [username])

  return data
}