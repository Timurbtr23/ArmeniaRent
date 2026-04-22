import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

const SEO = {
  '/': {
    title: 'Аренда авто в Ереване — выдача в центре и аэропорту, цена без сюрпризов',
    description: 'Прокат авто в Армении: D-класс, кроссоверы и премиум. Фиксируем итоговую сумму до приезда. Осмотр с фотофиксацией. 30+ автомобилей. Выдача в центре или аэропорту.',
    canonical: 'https://rentcar-arm.ru/',
    ogUrl: 'https://rentcar-arm.ru/',
  },
  '/armenia': {
    title: 'Аренда авто в Армении — без залога, скрытых платежей и проблем при возврате',
    description: 'Прокат автомобилей по Армении: седаны, кроссоверы, премиум. Цена фиксируется до приезда. 30+ авто, выдача в Ереване и аэропорту Звартноц.',
    canonical: 'https://rentcar-arm.ru/armenia',
    ogUrl: 'https://rentcar-arm.ru/armenia',
  },
}

export async function prerender(data) {
  const url = data.url || '/'
  const seo = SEO[url] || SEO['/']

  const html = renderToString(
    <React.StrictMode>
      <App initialUrl={url} />
    </React.StrictMode>,
  )

  return {
    html,
    links: new Set(Object.keys(SEO)),
    head: {
      title: seo.title,
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: seo.description } },
        { type: 'link', props: { rel: 'canonical', href: seo.canonical } },
        { type: 'meta', props: { property: 'og:url', content: seo.ogUrl } },
        { type: 'meta', props: { property: 'og:title', content: seo.title } },
        { type: 'meta', props: { property: 'og:description', content: seo.description } },
      ]),
    },
  }
}
