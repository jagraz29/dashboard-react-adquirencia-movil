export class StorageData {
  setData(data: string) {
    localStorage.setItem('dataUser', JSON.stringify(data))
  }
  getData() {
    return JSON.parse(localStorage.getItem('dataUser')!)
  }
  removeData() {
    localStorage.removeItem('dataUser')
  }
}
