import {useSelector } from "react-redux"

export default function Details({ product }) {
  const allStores = useSelector(state => state.stores.storeList)
  const storeId = product?.stores
  const store = allStores.find(store => store._id === storeId)


  return (
    <div className="overflow-hidden bg-white border border-gray-400 sm:rounded-md font-light">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Product Details</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Product details and store info.</p>
      </div>
      <div className="border-t border-gray-400 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-300">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product?.title}</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Ksh. {product?.price}</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">In Stock</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product?.inStock ? "True" : "False"}</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Store</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul>
                {
                  store ? store?.name : "Store not found"
                }
              </ul>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {product?.desc}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
