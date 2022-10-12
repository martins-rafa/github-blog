import moment from 'moment'

export function formatCreatedAtDate(date: string) {
  return moment(date).fromNow()
}
