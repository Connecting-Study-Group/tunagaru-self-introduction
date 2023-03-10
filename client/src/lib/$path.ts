export const pagesPath = {
  "introduction": {
    $url: (url?: { hash?: string }) => ({ pathname: '/introduction' as const, hash: url?.hash })
  },
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  next_svg: '/next.svg',
  thirteen_svg: '/thirteen.svg',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
