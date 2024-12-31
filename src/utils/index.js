// Example: dd/mm/yyyy (remove timestamp)
const formatDateLongNumeric = (value) => {
  if (!value) return value

  const date = new Date(value)

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour12: false,
  }
  return date.toLocaleDateString('it-IT', options)
}

// Example: x.xxx,xx
const formatToEuro = (value, options = {}) => {
  const { currency = false, decimal = true, truncate = false } = options

  const formatter = new Intl.NumberFormat('it-IT', {
    style: currency ? 'currency' : undefined,
    currency: currency ? 'EUR' : undefined,
    minimumFractionDigits: decimal ? 2 : 0,
    maximumFractionDigits: decimal ? 2 : undefined,
  })

  const result = formatter.format(value)

  return truncate ? Number.parseInt(result) : result
}

export { formatDateLongNumeric, formatToEuro }
