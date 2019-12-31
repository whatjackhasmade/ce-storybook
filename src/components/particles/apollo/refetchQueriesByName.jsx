import { client } from "./client"

export const refetchQueriesByName = queryNames => {
  queryNames.forEach(queryName =>
    client.queryManager.refetchQueryByName(queryName)
  )
}

export default refetchQueriesByName
