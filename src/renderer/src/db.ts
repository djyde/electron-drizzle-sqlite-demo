import { drizzle } from 'drizzle-orm/sqlite-proxy'
import * as schema from '../../db/schema'

export const database = drizzle(async (...args) => {
  try {
    // @ts-expect-error
    const result = await window.api.execute(...args)
    return {rows: result}
  } catch (e: any) {
    console.error('Error from sqlite proxy server: ', e.response.data)
    return { rows: [] }
  }
}, {
  schema: schema
})