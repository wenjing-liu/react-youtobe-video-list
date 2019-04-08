import axios from 'axios'

const KEY = 'AIzaSyDIZN1qHxqV9lUdNZO37fBhr9DKFGnzLmk'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

