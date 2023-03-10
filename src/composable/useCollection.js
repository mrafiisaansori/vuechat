import { ref } from 'vue'
import { projectFirestore } from '../config/firebase'

const useCollection = (collection) => {
  const error = ref(null)

  const storeDoc  = async(document) => {
    error.value=null
    try {
      await projectFirestore.collection(collection).add(document)
    } catch (err) {
      console.log(err.message)
      error.value = "could not send the message"
    }
  }

  return { error, storeDoc }
}

export default useCollection