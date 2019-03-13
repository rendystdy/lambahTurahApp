'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with news
 */
const News = use('App/Models/News')

const Database = use('Database')

class NewsController {
  /**
   * Show a list of all news.
   * GET news
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await News.all()

  }

  async details({ params, view }) {
    return await News.find(params.id)
  }

  /**
   * Render a form to be used for creating a new news.
   * GET news/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new news.
   * POST news
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const news = await News.create((request.all()))

    return {
      status: 'Success',
      data: news
    }
  }

  /**
   * Display a single news.
   * GET news/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing news.
   * GET news/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update news details.
   * PUT or PATCH news/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

    const { id } = params
    const news = await News.find(id)

    const { title, image_url, description, author, video_url } = request.all()

    news.title = title
    news.image_url = image_url
    news.description = description
    news.author = author
    news.video_url = video_url
    

    await news.save()

    // const order = await Database
    // .table('orders')
    // .where('id', params.id)
    // .update(request.all())

    return {
      status: 'Success',
      data: news
    }
  }

  /**
   * Delete a news with id.
   * DELETE news/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const news = await News.find(params.id)

    news.delete()
    // return await news.delete()
    return {
      status: 'success delete',
      data: news
    }
  }
}

module.exports = NewsController
