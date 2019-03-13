import axios from "axios";

export const getNews = () => {
  return {
    type: 'GET_NEWS',
    payload: axios.get('http://192.168.0.23:3333/api/v1/news')
  }
}

export const getNewsDetail = (id) => {
  return {
    type: 'GET_NEWS_DETAIL',
    payload: axios.get(`http://192.168.0.23:3333/api/v1/news/${id}`)
  }
}

export const createNews = (body) => {
  return {
    type: 'CREATE_NEWS',
    payload: axios({
      method: 'post',
      url: 'http://192.168.0.23:3333/api/v1/news',
      data: body
    })
  }
}

export const updateNews = (id) => {
  return {
    type: 'UPDATE_NEWS_DETAIL',
    payload: axios.patch(`http://192.168.0.23:3333/api/v1/news/${id}`)
  }
}

export const deleteNews = (id) => {
  // alert(JSON.stringify(id))
  return {
    type: 'DELETE_NEWS',
    payload: axios({
      method: 'delete',
      url: `http://192.168.0.23:3333/api/v1/news/${id}`,
    })
  }
}
