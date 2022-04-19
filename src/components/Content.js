import React from 'react'
import Product from './Product'

const productsList = [
    {
        id:'1',
        image: 'img4.png',
        name: 'Aria Salamat Website',
        dName: 'Eng. Shafiq Salehi',
        view:25
    },
    {
        id:'2',
        image: 'img2.jpeg',
        name: 'BNF Website',
        dName: 'Eng. Shafiq Salehi',
        view:46
    },
    {
        id:'3',
        image: 'img3.PNG',
        name: 'Aria Salamat Admin Pannel',
        dName: 'Eng. Shafiq Salehi',
        view:33
    },
]


function Content() {
  return (
    <main className='px-16 py-6 bg-gray-100 md:col-span-4'>
        <div className='flex justify-center md:justify-end'>
            <a href='#' className='btn text-primary border-primary md:border-2 md:hover:bg-primary md:hover:text-white transition ease-out duration-500'>Log In</a>
            <a href='#' className='btn text-primary border-primary md:border-2 md:hover:bg-primary md:hover:text-white transition ease-out duration-500 ml-2'>Sign In</a>
        </div>
        <header>
            <h2 className='text-6xl text-gray-700 font-semibold'>Products</h2>
            <p className='text-2xl font-semibold'>by Engineer Shafiq Salehi</p>
        </header>
        <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Products</h4>
            <div className='mt-8 grid lg:grid-cols-3 gap-10'>
                {/* products goes here ----------------------------- */}
                {
                    productsList.map(product => {
                        return <Product key={product.id} view={product.view} image={product.image} name={product.name} dName={product.dName}/>
                    })
                }
                
                {/* end products section ---------------------- */}
            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
            <div className='mt-8 grid lg:grid-cols-3 gap-10'>
                {/* most popular products goes here ----------------------------- */}
                {
                    productsList.map(product => {
                        if(product.view>40)
                            return <Product key={product.id} view={product.view} image={product.image} name={product.name} dName={product.dName}/>
                    })
                }
                
                {/* end section ---------------------- */}
            </div>
            <div className='flex justify-center mt-4'>
                <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 transition ease-out duration-300 hover:bg-opacity-50'>Load more</div>
            </div>
        </div>
    </main>
  )
}

export default Content