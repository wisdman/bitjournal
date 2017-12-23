
interface IYouTubeVideoThumb {
  url: string
  width: number,
  height: number
}

export interface IYouTubeVideo {
  id: string

  snippet: {
    publishedAt: string
    title: string
    thumbnails: {
      default: IYouTubeVideoThumb
      medium: IYouTubeVideoThumb
      high: IYouTubeVideoThumb
      standard: IYouTubeVideoThumb
      maxres: IYouTubeVideoThumb
    }
  }

  contentDetails: {
    duration: string
  }

  statistics: {
    viewCount: any
    likeCount: any
    dislikeCount: any
    favoriteCount: any
    commentCount: any
  }
}
