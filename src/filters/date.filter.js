export default function dateFilter(value, format = 'date') {
  console.log(value)
  const options = {}
  if (format.includes('date')) {
    options.year = 'numeric'
    options.month = 'long'
    options.day = 'numeric'
  }

  if (format.includes('time')) {
    options.hour = 'numeric'
    options.minute = 'numeric'
    options.second = 'numeric'

  }
  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
