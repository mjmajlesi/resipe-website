import React from 'react'
import Container from './container'
import Button from './buttuns'
function NavBar() {
  return (
    <section className='bg-gray-950 text-gray-200'>
        <Container>
        <div className='flex justify-between items-center flex-wrap gap-8 p-6'>
            <span className='font-bold text-lg'>MJM</span>
            <div className='flex items-center gap-8 flex-wrap'>
                <a className='buttun' href="#aboutUs">about Us</a>
                <a className='buttun' href="#contentUs">content Us</a>
                <a className='buttun' href="#Get Starded">Get Starded</a>
                <Button className='p-3' variant='login'>
                    <a href='mailto:mohammadjavadmajlesi313@gmail.com'>Content</a>
                </Button>
            </div>
          </div>
        </Container>
      </section>
  )
}

export default NavBar