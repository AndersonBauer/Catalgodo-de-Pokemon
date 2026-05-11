import { useEffect, useState } from 'react'

export function useFetch(fetchFunction) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchFunction()
        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { data, loading }
}