const formatter = new Intl.DateTimeFormat(
  'ru-RU',
  {
    month: 'long',
    day: 'numeric'
  })

export default (date: string) => formatter.format(new Date(date))