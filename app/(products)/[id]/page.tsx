'use client'
import { CheckIcon } from '@heroicons/react/20/solid'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
const getProduct = async (id: Number) => {
    const res = await fetch(`http://localhost:3001/products/${id}`, {
        cache: 'no-cache',
    }).then((res) => {
        return res.json()
    })
    return res
}

export default async function Page({ params }: { params: { id: number } }) {
    const product = await getProduct(params.id)
    console.log(product)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">
                    <div className="font-medium text-gray-500 hover:text-gray-900">
                        {product.category}
                    </div>
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {product.name}
                        </h1>
                    </div>

                    <section
                        aria-labelledby="information-heading"
                        className="mt-4"
                    >
                        <h2 id="information-heading" className="sr-only">
                            Product information
                        </h2>

                        <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-xl">
                                ${product.price}
                            </p>
                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base text-gray-500">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-6 flex items-center">
                            <CheckIcon
                                className="h-5 w-5 flex-shrink-0 text-green-500"
                                aria-hidden="true"
                            />
                            <p className="ml-2 text-sm text-gray-500">
                                Good Seller Rating
                            </p>
                        </div>
                    </section>
                </div>
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                        <img
                            src={
                                product.image === ''
                                    ? 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg'
                                    : product.image
                            }
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
                {/* Product form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Product options
                        </h2>

                        <form>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    Ask to Buy
                                </button>
                            </div>
                            <div className="mt-6 text-center">
                                <a
                                    href="#"
                                    className="group inline-flex text-base font-medium"
                                >
                                    <ShieldCheckIcon
                                        className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-gray-500 hover:text-gray-700">
                                        Student to Student Guarantee
                                    </span>
                                </a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
