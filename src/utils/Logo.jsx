import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <>
        <Link to="/" className='shrink-0'>
          <img className='w-full h-8 object-cover object-center' src="https://alluretechnology.africa/wp-content/uploads/2022/04/allure_header_logo-1.png" alt="logo"/>
        </Link>
    </>
  )
}

export const Logo2 = () => {
  return (
    <div className='flex justify-center'>
        <Link to="/">
          <img className='w-36 h-8 object-cover object-center' src="https://alluretechnology.africa/wp-content/uploads/2022/04/allure_header_logo-1.png" alt="logo"/>
        </Link>
    </div>
  )
}

