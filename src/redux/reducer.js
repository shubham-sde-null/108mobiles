import { MOBILE_DATA } from "./action";
export const completeMobileData = (initialData = [], action) => {
  switch (action.type) {
    case MOBILE_DATA:
      //   function removeDuplicates() {
      //     let allData = [...initialData, action.payload];
      //     let allDataObject = allData.map(JSON.stringify());
      //     let uniqueData = new Set(allDataObject);
      //     let uniqueArrayList = Array.from(uniqueData).map(JSON.parse());
      //     return uniqueArrayList;
      //   }
      return [...initialData, action.payload];
    default:
      return initialData;
  }
};
