export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'SUCCESSFUL':
      return 200
    case 'INVALID_DATA':
      return 400
    case 'NOT_FOUND':
      return 404
    case 'UNAUTHORIZED':
      return 401
    case 'NOT_MODIFIED':
      return 304
    case 'CREATED':
      return 201
    case 'NO_CONTENT':
      return 204
    default:
      return 500
  }
}
