
export interface ISlider {
  id: number,
  url: string,
  name: string,
}

export interface ILesson {
  title: string,
  video: string,
  poster: string,
  price: number,
  category: string
}

export interface ILessons {
  hasMore: boolean,
  loading: boolean,
  limit: number,
  offset: number,
  list: ILesson[],
}

export interface IHomeState {
  currentCategory: number
  sliders: ISlider[]
  lessons: ILessons,
}


export enum CATEGORY_TYPES {
  ALL,
  VUE,
  REACT,
  NODE
}
